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

      {/* Animated gradient orbs - positioned across entire page */}
      <motion.div
        className="fixed top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 80, 0],
          x: [0, 40, 0],
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -100, 0],
          x: [0, 60, 0],
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="fixed top-2/3 left-20 w-[400px] h-[400px] bg-blue-500/18 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 90, 0],
          x: [0, -50, 0],
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="fixed bottom-40 right-1/4 w-[450px] h-[450px] bg-purple-400/18 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -75, 0],
          x: [0, 55, 0],
          opacity: [0.15, 0.26, 0.15],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
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