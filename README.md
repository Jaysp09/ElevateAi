# 🚀 ElevateAI — AI Career Coach Platform

> An AI-powered full-stack career progression platform that helps users build resumes, generate tailored cover letters, prepare for interviews, and track career growth — all in one intelligent dashboard.

🌐 **Live Demo:** https://elevate-ai-three.vercel.app  
📦 **Repository:** https://github.com/Jaysp09/ElevateAi  

---

## 🧠 Problem Statement

Modern job seekers struggle with:

- Crafting optimized resumes  
- Writing personalized cover letters  
- Preparing for technical & behavioral interviews  
- Tracking industry trends and growth opportunities  

**ElevateAI solves this using AI + Automation + Real-time Analytics.**

---

## ✨ Core Features

### 🤖 AI Resume Builder
- Dynamic resume generation  
- Structured experience & education entry  
- Real-time preview updates  
- Persistent database storage  

### 📝 AI Cover Letter Generator
- Personalized cover letters per job  
- Editable & savable versions  
- Stored per user profile  

### 🎯 Mock Interview System
- AI-generated interview questions  
- Quiz-based evaluation  
- Performance analytics dashboard  

### 📊 Career Dashboard
- Progress tracking  
- Insights overview  
- Activity-based statistics  

### 🔐 Secure Authentication
- User sign-up & login  
- Protected routes  
- Persistent user sessions  

---

## 🏗 System Architecture

### Frontend
- Next.js (App Router)  
- React  
- Tailwind CSS  
- Shadcn UI  

### Backend
- Next.js Server Actions  
- Prisma ORM  
- PostgreSQL (NeonDB)  

### AI & Automation
- OpenAI API  
- Inngest (Background event handling)  

### Deployment & DevOps
- Vercel (Production hosting)  
- GitHub (Version control)  

---

## 🗂 Project Structure

```
ElevateAi/
│
├── app/                 # Next.js App Router
├── actions/             # Server actions
├── components/          # Reusable UI components
├── lib/                 # Utility & DB logic
├── prisma/              # Database schema & migrations
├── data/                # Static data modules
└── public/              # Static assets
```

---

## 🔐 Environment Variables Required

Create a `.env` file in the root directory:

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```

⚠️ Never commit `.env` to GitHub.

---

## 🚀 Local Development Setup

```bash
git clone https://github.com/Jaysp09/ElevateAi.git
cd ElevateAi
npm install
npx prisma migrate dev
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

## 📈 What Makes This Project Stand Out

- Production-level full-stack architecture  
- Clean folder structure  
- Secure environment variable handling  
- Real-time database integration  
- Modern UI/UX design system  
- Scalable deployment setup  

---

## 📌 Future Enhancements

- Resume PDF Export  
- AI Skill Gap Analysis  
- Job Role Recommendation Engine  
- Advanced analytics visualization  
- Admin dashboard  

---

## 👨‍💻 Author

**Jay Patil**  
Full-Stack Developer | AI & Systems Enthusiast  

GitHub: https://github.com/Jaysp09  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
