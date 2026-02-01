"use client";
import { Copyright, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full border-t border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-400/10 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
                {/* Back to top button */}
                <motion.button
                    onClick={scrollToTop}
                    className="group p-3 rounded-full glass-card text-gray-400 hover:text-blue-400 transition-all duration-300 hover:shadow-glow border border-transparent hover:border-blue-500/30"
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5" />
                </motion.button>

                {/* Copyright */}
                <div className="font-poppins text-center text-sm text-gray-500 flex items-center gap-1">
                    <Copyright className="w-4 h-4 text-blue-500" />
                    <span>2025 Kavi Lu. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
