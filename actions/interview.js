"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash-latest",
// });


export async function generateQuiz() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      industry: true,
      skills: true,
    },
  });

  if (!user) throw new Error("User not found");

  // const prompt = `
  //   Generate 10 technical interview questions for a ${
  //     user.industry
  //   } professional${
  //   user.skills?.length ? ` with expertise in ${user.skills.join(", ")}` : ""
  // }.
    
  //   Each question should be multiple choice with 4 options.
    
  //   Return the response in this JSON format only, no additional text:
  //   {
  //     "questions": [
  //       {
  //         "question": "string",
  //         "options": ["string", "string", "string", "string"],
  //         "correctAnswer": "string",
  //         "explanation": "string"
  //       }
  //     ]
  //   }
  // `;

//   const prompt = `
//   Generate 10 technical interview questions for a ${
//     user.industry
//   } professional${
//     user.skills?.length ? ` with expertise in ${user.skills.join(", ")}` : ""
//   }.

//   Include a mix of:
//   - Multiple choice questions (4 options)
//   - True/False questions

//   For 2 or more questions, include a visual element. Instead of a real image, just provide a clear image **description** that could be rendered later using AI (e.g., "image showing a React component with useEffect usage").

//   Return the response in this **strict JSON format only**, no extra commentary:
//   {
//     "questions": [
//       {
//         "question": "string",
//         "type": "multiple-choice" | "true-false",
//         "options": ["string", "string", "string", "string"],  // optional for true/false
//         "correctAnswer": "string",
//         "explanation": "string",
//         "imageDescription": "string" // optional, can be null if not applicable
//       }
//     ]
//   }
// `;

const prompt = `
Generate 10 technical interview questions for a ${
  user.industry
}${
  user.skills?.length ? ` with expertise in ${user.skills.join(", ")}` : ""
}.

The questions should include a mix of:
- Multiple Choice Questions (MCQ) with 4 options
- True/False questions with only "True" and "False" as options
- Image-based questions: Provide a short description of an image (e.g., "image of a Python function with a syntax error") and ask the user to classify it as "Correct", "Incorrect", or "Needs Improvement".

Each question must include:
- "question": the actual question string
- "type": "multiple-choice" | "true-false" | "image-classification"
- "options": ["option1", "option2", ...] (always 2 for true-false, 3+ for others)
- "correctAnswer": the correct option
- "explanation": short explanation of the answer
- "imageDescription": (only if image-based, else null)

Return the output strictly in this JSON format:
{
  "questions": [
    {
      "question": "string",
      "type": "multiple-choice" | "true-false" | "image-classification",
      "options": ["string", "string", ...],
      "correctAnswer": "string",
      "explanation": "string",
      "imageDescription": "string or null"
    }
  ]
}
Do not include any extra text or markdown. Only JSON.
`;


  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const quiz = JSON.parse(cleanedText);

    return quiz.questions;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw new Error("Failed to generate quiz questions");
  }
}

export async function saveQuizResult(questions, answers, score) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const questionResults = questions.map((q, index) => ({
    question: q.question,
    answer: q.correctAnswer,
    userAnswer: answers[index],
    isCorrect: q.correctAnswer === answers[index],
    explanation: q.explanation,
  }));

  // Get wrong answers
  const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

  // Only generate improvement tips if there are wrong answers
  let improvementTip = null;
  if (wrongAnswers.length > 0) {
    const wrongQuestionsText = wrongAnswers
      .map(
        (q) =>
          `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`
      )
      .join("\n\n");

    const improvementPrompt = `
      The user got the following ${user.industry} technical interview questions wrong:

      ${wrongQuestionsText}

      Based on these mistakes, provide a concise, specific improvement tip.
      Focus on the knowledge gaps revealed by these wrong answers.
      Keep the response under 2 sentences and make it encouraging.
      Don't explicitly mention the mistakes, instead focus on what to learn/practice.
    `;

    try {
      const tipResult = await model.generateContent(improvementPrompt);

      improvementTip = tipResult.response.text().trim();
      console.log(improvementTip);
    } catch (error) {
      console.error("Error generating improvement tip:", error);
      // Continue without improvement tip if generation fails
    }
  }

  try {
    const assessment = await db.assessment.create({
      data: {
        userId: user.id,
        quizScore: score,
        questions: questionResults,
        category: "Technical",
        improvementTip,
      },
    });

    return assessment;
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw new Error("Failed to save quiz result");
  }
}

export async function getAssessments() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const assessments = await db.assessment.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return assessments;
  } catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}
