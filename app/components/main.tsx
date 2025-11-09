"use client";

import { useState, useEffect } from "react";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from "@mui/material";

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
        <div className="text-4xl text-black dark:text-white font-semibold font-mono">
            {displayed}
            <span className={"inline-block w-2" + (showCursor ? " opacity-100" : " opacity-0")}>|</span>
        </div>
    );
}

const iconButtonStyle = {
    transition: 'transform 0.2s, color 0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    },
};

export default function Main() {
    return (
        <main className="flex flex-col h-screen w-full items-center justify-center relative">
            <div className="flex flex-col items-center gap-6 justify-center h-full">
                {/* <h1 className="font-poppins text-5xl text-black">Kavi Lu</h1> */}
                <Typewriter />
                <a
                    href="/kavi-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins hover:bg-blue-50 hover:scale-105 px-6 py-2 rounded-full bg-white text-zinc-500 shadow-md transition ease-in-out duration-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 dark:border-gray-400 dark:border-2"
                >
                    <DownloadIcon className="mr-1" />
                    Resume
                </a>
            </div>
            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2">
                <a href="https://www.github.com/Kavi-1" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={iconButtonStyle}>
                        <GitHubIcon className="text-gray-50 text-lg  hover:text-blue-300 font-mono" style={{ fontSize: 26 }} />
                    </IconButton>
                </a>
                <a href="mailto:kavilu127@gmail.com">
                    <IconButton sx={iconButtonStyle}>
                        <EmailIcon className="text-gray-50 text-lg hover:text-red-300 font-mono" style={{ fontSize: 26 }} />
                    </IconButton>
                </a>
            </div>
        </main >
    );
}