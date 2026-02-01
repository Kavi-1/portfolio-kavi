"use client";

import { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Typewriter() {
    const texts = ["Welcome!", "I'm Kavi."];
    const [displayed, setDisplayed] = useState("");
    const [textIdx, setTextIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((c) => !c);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const current = texts[textIdx];

        if (!deleting && charIdx < current.length) {
            const timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx + 1));
                setCharIdx((c) => c + 1);
            }, 120);
            return () => clearTimeout(timeout);
        } else if (!deleting && charIdx === current.length) {
            const pause = setTimeout(() => {
                setDeleting(true);
            }, 1200);
            return () => clearTimeout(pause);
        } else if (deleting && charIdx > 0) {
            const timeout = setTimeout(() => {
                setDisplayed((prev) => prev.slice(0, -1));
                setCharIdx((c) => c - 1);
            }, 60);
            return () => clearTimeout(timeout);
        } else if (deleting && charIdx === 0) {
            const nextIdx = (textIdx + 1) % texts.length;
            setDeleting(false);
            setDisplayed("");
            setTextIdx(nextIdx);
            const startNext = setTimeout(() => setCharIdx(0), 80);
            return () => clearTimeout(startNext);
        }
    }, [charIdx, textIdx, deleting]);

    return (
        <div className="text-4xl md:text-5xl font-semibold font-mono gradient-text">
            {displayed}
            <span className={"inline-block w-2 gradient-text" + (showCursor ? " opacity-100" : " opacity-0")}>|</span>
        </div>
    );
}

export default function Main() {
    return (
        <main className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden">

            <motion.div
                className="relative flex flex-col items-center gap-6 justify-center h-full z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Typewriter />
                <motion.a
                    href="/kavi-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins group relative px-8 py-3 rounded-full glass-card text-gray-300 font-medium shadow-lg hover:shadow-glow transition-all duration-300 flex items-center gap-2 border border-purple-500/20 hover:border-purple-500/40"
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-300 transition-all duration-300">Resume</span>
                </motion.a>
            </motion.div>
            <motion.div
                className="absolute bottom-8 left-0 w-full flex justify-center gap-4 z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
                <motion.a
                    href="https://www.github.com/Kavi-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card text-gray-400 hover:text-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-transparent hover:border-purple-500/30"
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/kavilu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card text-gray-400 hover:text-purple-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-transparent hover:border-purple-400/30"
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                    href="mailto:kavilu127@gmail.com"
                    className="p-3 rounded-full glass-card text-gray-400 hover:text-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-transparent hover:border-purple-500/30"
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Mail className="w-6 h-6" />
                </motion.a>
            </motion.div>
        </main >
    );
}