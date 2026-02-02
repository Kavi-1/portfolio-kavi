"use client"
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            className="font-poppins fixed top-0 left-0 z-50 w-full bg-[#1A1A1A]/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-blue-500/5"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
                <div className="text-lg">
                    <Link href="/#home" className="text-white font-normal">Kavi Lu</Link>
                </div>

                <div className="hidden md:flex gap-6 text-base text-white font-medium">
                    <Link href="/#about" className="relative hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300">About</Link>
                    <Link href="/#projects" className="relative hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300">Projects</Link>
                    <Link href="/#courses" className="relative hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300">Courses</Link>
                </div>

                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="text-gray-400 md:hidden border-t border-blue-500/20 bg-[#1A1A1A]/80 backdrop-blur-md"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 py-4 flex flex-col gap-3">
                            <Link href="/#about" onClick={() => setOpen(false)} className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300">About</Link>
                            <Link href="/#projects" onClick={() => setOpen(false)} className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300">Projects</Link>
                            <Link href="/#courses" onClick={() => setOpen(false)} className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300">Courses</Link>
                            <Link href="/#interests" onClick={() => setOpen(false)} className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition-all duration-300">Interests</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}