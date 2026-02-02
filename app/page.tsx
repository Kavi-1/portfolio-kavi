"use client";
import About from "./components/about";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Main from "./components/main";
import Nav from "./components/nav";
import Projects from "./components/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#0F0F0F] min-h-screen">
      {/* Unified gradient mesh overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'var(--gradient-mesh)' }} />

      {/* Noise texture */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
      }} />

      {/* Animated gradient orbs - floating across entire screen */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"
        initial={false}
        animate={{
          y: ["0vh", "60vh", "20vh", "80vh", "0vh"],
          x: ["0vw", "70vw", "30vw", "60vw", "0vw"],
          opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
          scale: [1, 1.4, 1.2, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed top-0 right-0 w-[320px] h-[320px] bg-purple-500/40 rounded-full blur-3xl pointer-events-none"
        initial={false}
        animate={{
          y: ["10vh", "70vh", "40vh", "5vh", "10vh"],
          x: ["0vw", "-50vw", "-70vw", "-20vw", "0vw"],
          opacity: [0.3, 0.65, 0.4, 0.55, 0.3],
          scale: [1, 1.3, 1.1, 1.25, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="fixed bottom-0 left-0 w-[350px] h-[350px] bg-cyan-500/35 rounded-full blur-3xl pointer-events-none"
        initial={false}
        animate={{
          y: ["0vh", "-60vh", "-30vh", "-70vh", "0vh"],
          x: ["0vw", "60vw", "80vw", "20vw", "0vw"],
          opacity: [0.25, 0.55, 0.35, 0.5, 0.25],
          scale: [1, 1.4, 1.15, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="fixed bottom-0 right-0 w-[280px] h-[280px] bg-purple-400/35 rounded-full blur-3xl pointer-events-none"
        initial={false}
        animate={{
          y: ["0vh", "-50vh", "-80vh", "-20vh", "0vh"],
          x: ["0vw", "-60vw", "-30vw", "-70vw", "0vw"],
          opacity: [0.25, 0.5, 0.35, 0.45, 0.25],
          scale: [1, 1.25, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/25 rounded-full blur-3xl pointer-events-none"
        initial={false}
        animate={{
          y: ["-20vh", "30vh", "-10vh", "20vh", "-20vh"],
          x: ["-30vw", "20vw", "30vw", "-20vw", "-30vw"],
          opacity: [0.2, 0.45, 0.3, 0.4, 0.2],
          scale: [1, 1.3, 1.1, 1.25, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Nav />
        <Main />
        <About />
        <Projects />
        <Courses />
        <Footer />
      </div>
    </div>
  );
}