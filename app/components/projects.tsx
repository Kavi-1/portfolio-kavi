"use client";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "SRT-Generator",
        desc: "FastAPI app that uses faster-whisper AI to transcribe video/audio files into subtitles.",
        link: "https://srt-generator-kavi.vercel.app/",
        tech: ["Python", "AWS EC2", "faster-whisper AI", "React", "TypeScript", "Tailwind CSS"],
        image: "/srt.jpg",
        github: "https://github.com/Kavi-1/SRT-Generator"
    },
    {
        title: "Personal Expense Tracker",
        desc: "A real-time personal finance dashboard used to track expenses.",
        link: "https://finance-dashboard-kavi.vercel.app/",
        tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Chart.js", "Google Oauth"],
        image: "/finance.jpg",
        github: "https://github.com/Kavi-1/personal-finance-dashboard"
    },
    {
        title: "House of China",
        desc: "A full-stack restaurant ordering platform with user authentication and Stripe-powered payments.",
        link: "https://house-of-china-lutz.vercel.app/",
        tech: ["React", "TypeScript", "Next.js", "Supabase", "Tailwind CSS", "Stripe"],
        image: "/house.jpg",
        github: "https://github.com/Kavi-1/house-of-china"
    },
    {
        title: "AI Connect Four",
        desc: "Connect Four powered by deterministic algorithms (Minimax/Alpha-Beta Pruning) to simulate AI.",
        image: "/connect4.jpg",
        github: "https://github.com/Kavi-1/ai-connect-four",
        tech: ["Python", "Pygame"]
    },
];


const iconButtonStyle = {
    transition: 'transform 0.2s, color 0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    },
};

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="bg-white w-full dark:bg-gray-800">
            <section className="bg-white w-full max-w-4xl mx-auto py-20  px-4 dark:bg-gray-800" id="projects" ref={ref}>
                <motion.h2
                    className="text-2xl mb-12 text-center font-poppins text-gray-600 dark:text-zinc-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Projects
                </motion.h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <motion.div
                            className="rounded-xl border border-zinc-200 dark:bg-gray-700 shadow-md hover:shadow-xl transition-all hover:scale-102 transition-transform duration-200 dark:border-0"
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: i * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <div className="w-full aspect-video overflow-hidden relative rounded-t-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="p-6 pt-4">
                                <div className="flex flex-row justify-between items-center mb-2 mt-0">
                                    <h3 className={"font-poppins text-xl text-black font-semibold dark:text-white"}>{project.title}</h3>
                                    <div className="flex flex-row gap-0">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <IconButton sx={iconButtonStyle}>
                                                <GitHubIcon sx={{ color: "gray" }} />
                                            </IconButton>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.link && <IconButton sx={iconButtonStyle}>
                                                <LaunchIcon sx={{ color: "gray" }} />
                                            </IconButton>}
                                        </a>
                                    </div>
                                </div>
                                <p className={"font-poppins text-sm text-zinc-600 mb-4 dark:text-zinc-300"}>{project.desc}</p>
                                {project.tech?.map((t) => (
                                    <span
                                        key={t}
                                        className="bg-white border border-zinc-200 text-black text-xs px-2 py-1 rounded-xl font-mono inline-block mr-2 mt-2 dark:bg-gray-700 dark:border-gray-800 dark:text-zinc-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
