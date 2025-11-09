"use client"
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="font-poppins fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-800/40 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
                <div className="text-lg text-black dark:text-white font-medium">
                    <Link href="/#home">Kavi Lu</Link>
                </div>

                <div className="hidden md:flex gap-6 text-base text-black dark:text-white font-medium">
                    <Link href="/#about">About</Link>
                    <Link href="/#projects">Projects</Link>
                    <Link href="/#courses">Courses</Link>
                </div>

                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                    <MenuIcon />
                </button>
            </div>

            <div className={`${open ? 'block' : 'hidden'} text-black md:hidden border-t border-gray-100 bg-white/95`}>
                <div className="px-6 py-4 flex flex-col gap-3">
                    <Link href="/#about" onClick={() => setOpen(false)} className="block">About</Link>
                    <Link href="/#projects" onClick={() => setOpen(false)} className="block">Projects</Link>
                    <Link href="/#courses" onClick={() => setOpen(false)} className="block">Courses</Link>
                    <Link href="/#interests" onClick={() => setOpen(false)} className="block">Interests</Link>
                </div>
            </div>
        </nav>
    );
}