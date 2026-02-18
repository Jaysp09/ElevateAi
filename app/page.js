// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ArrowRight,
//   Trophy,
//   Target,
//   Sparkles,
//   CheckCircle2,
// } from "lucide-react";
// import HeroSection from "@/components/hero";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import { features } from "@/data/features";
// import { testimonial } from "@/data/testimonial";
// import { faqs } from "@/data/faqs";
// import { howItWorks } from "@/data/howItWorks";

// export default function LandingPage() {
//   return (
//     <>
//       <div className="grid-background"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Features Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features for Your Career Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="border-2 hover:border-primary transition-colors duration-300"
//               >
//                 <CardContent className="pt-6 text-center flex flex-col items-center">
//                   <div className="flex flex-col items-center justify-center">
//                     {feature.icon}
//                     <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                     <p className="text-muted-foreground">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four simple steps to accelerate your career growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//        <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {testimonial.map((testimonial, index) => (
//               <Card key={index} className="bg-background">
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col space-y-4">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="relative h-12 w-12 flex-shrink-0">
//                         <Image
//                           width={40}
//                           height={40}
//                           src={testimonial.image}
//                           alt={testimonial.author}
//                           className="rounded-full object-cover border-2 border-primary/20"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-semibold">{testimonial.author}</p>
//                         <p className="text-sm text-muted-foreground">
//                           {testimonial.role}
//                         </p>
//                         <p className="text-sm text-primary">
//                           {testimonial.company}
//                         </p>
//                       </div>
//                     </div>
//                     <blockquote>
//                       <p className="text-muted-foreground italic relative">
//                         <span className="text-3xl text-primary absolute -top-4 -left-2">
//                           &quot;
//                         </span>
//                         {testimonial.quote}
//                         <span className="text-3xl text-primary absolute -bottom-4">
//                           &quot;
//                         </span>
//                       </p>
//                     </blockquote>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section> 

      
//       {/* CTA Section */}
//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
//               Ready to Accelerate Your Career?
//             </h2>
//             <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
//               Join thousands of professionals who are advancing their careers
//               with AI-powered guidance.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-5 animate-bounce"
//               >
//                 Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }








"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ArrowRight, User } from "lucide-react";
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";

const teamMembers = [
  { name: "Jatin Patil", role: "AI Enthusiast", srn: "SRN: 02FE22BCI020" },
  { name: "Abinandan Onajol", role: "AI Researcher", srn: "SRN: 02FE22BCI002" },
  { name: "Sakshi Hooli", role: "AI Developer", srn: "SRN: 02FE22BCI039" },
  { name: "Shreya Kutre", role: "AI Designer", srn: "SRN: 02FE22BCI043" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <motion.section
        className="w-full py-20 bg-gradient-to-br from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            variants={fadeUp}
          >
            Powerful Features for Your Career Growth
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className="bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md p-6 text-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <CardContent className="text-white flex flex-col items-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                  <p className="text-sm text-white/80 mt-2">{feature.description}</p>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="w-full py-20 bg-gradient-to-br from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-white/70">Four simple steps to accelerate your career growth</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className="flex flex-col items-center text-center bg-white/10 border border-white/10 rounded-xl p-6 shadow-md backdrop-blur-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-600/30 text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-white/80 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="w-full py-24 bg-gradient-to-br from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-16 drop-shadow-lg"
            variants={fadeUp}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl backdrop-blur-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center text-4xl mb-4 border-4 border-white/20">
                  <User />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-200 text-sm">{member.role}</p>
                <p className="text-purple-300 text-xs mt-1">{member.srn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section
        className="relative py-24 bg-gradient-to-br from-[#0e0b14] via-[#1f1c2c] to-[#0e0b14] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in">
            🚀 Ready to Accelerate Your Career with AI?
          </h2>
          <p className="text-white/80 text-lg mb-8 animate-slide-up">
            Step into the future with powerful tools, expert guidance, and a community of forward-thinkers.
          </p>
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform shadow-lg"
            >
              Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-spin-slower"></div>
      </motion.section>
    </>
  );
}
