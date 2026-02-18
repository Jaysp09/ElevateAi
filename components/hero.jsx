// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full pt-36 md:pt-48 pb-10">
//       <div className="space-y-6 text-center">
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
//             Your AI Career Coach for
//             <br />
//             {/* Professional Success */}
//             Smart Career Progression
//           </h1>
//           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//             Advance your career with personalized guidance, interview prep, and
//             AI-powered tools for job success.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
          
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/banner1.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Typewriter } from "react-simple-typewriter";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 80;

//       if (scrollPosition > scrollThreshold && imageElement) {
//         imageElement.classList.add("scale-105", "shadow-2xl");
//       } else if (imageElement) {
//         imageElement.classList.remove("scale-105", "shadow-2xl");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full pt-32 md:pt-44 pb-16 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-700 dark:from-[#0e0e0e] dark:to-[#1a1a1a] transition-all duration-700 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1] opacity-60" style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}></div>
      
//       <div className="container mx-auto text-center px-4 space-y-8">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text animate-fade-up">
//           <Typewriter
//             words={["Your AI Career Coach", "Smarter Career Growth", "Ace Interviews", "Elevate Your Career"]}
//             loop={0}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={2000}
//           />
//         </h1>

//         <p className="mx-auto max-w-xl text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-3xl font-bold animate-scale-up animation-delay-200">
//           ElevateAi  <span className="block">Your Smart Career Progression</span>
//         </p>

//         <div className="flex justify-center space-x-4 animate-fade-up animation-delay-500">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8 hover:scale-110 transition-transform duration-300">
//               🚀 Get Started
//             </Button>
//           </Link>
//         </div>

//         <div className="mt-10 animate-fade-up animation-delay-600">
//           <div ref={imageRef} className="transition-transform duration-500 ease-in-out hover:scale-105">
//             <Image
//               src="/banner1.jpeg"
//               alt="AI Career Coach Preview"
//               width={1280}
//               height={720}
//               className="rounded-3xl border border-border shadow-xl mx-auto max-w-full h-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .animate-scale-up {
//           animation: scaleUp 1s ease-out forwards;
//         }
//         @keyframes scaleUp {
//           0% {
//             transform: scale(0.8);
//             opacity: 0;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         .animate-fade-up {
//           animation: fadeUp 1s ease-out forwards;
//         }

//         @keyframes fadeUp {
//           0% {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;








"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 80;

      if (scrollPosition > scrollThreshold && imageElement) {
        imageElement.classList.add("scale-105", "shadow-2xl");
      } else if (imageElement) {
        imageElement.classList.remove("scale-105", "shadow-2xl");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full pt-32 md:pt-44 pb-24 bg-gradient-to-br from-[#0e0b14] via-[#1f1c2c] to-[#0e0b14] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-spin-slow z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-spin-slower z-0"></div>

      <div className="container mx-auto text-center px-4 space-y-8 relative z-10">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-fade-up">
          <Typewriter
            words={[
              "Your AI Career Coach",
              "Smarter Career Growth",
              "Ace Interviews",
              "Elevate Your Career",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-xl text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl md:text-3xl font-semibold animate-fade-up animation-delay-200">
          ElevateAi <span className="block">Your Smart Career Progression</span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center space-x-4 animate-fade-up animation-delay-500">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform shadow-lg">
              🚀 Get Started
            </Button>
          </Link>
        </div>

        {/* Image Preview */}
        <div className="mt-10 animate-fade-up animation-delay-600">
          {/* <div
            ref={imageRef}
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <Image
              src="/banner1.jpeg"
              alt="AI Career Coach Preview"
              width={1280}
              height={720}
              className="rounded-3xl border border-white/20 shadow-xl mx-auto max-w-full h-auto"
              priority
            />
          </div> */}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-scale-up {
          animation: scaleUp 1s ease-out forwards;
        }
        @keyframes scaleUp {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }

        @keyframes fadeUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }

        .animate-spin-slower {
          animation: spin 24s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
