"use client";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
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


// Unified gradient for all tech tags - BRIGHT neon colors
const getTechColor = (tech: string) => {
    return "from-blue-500 to-purple-400";
};

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="w-full max-w-4xl mx-auto py-20 px-4" id="projects" ref={ref}>
                <motion.h2
                    className="text-3xl mb-12 text-center font-poppins font-bold gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Projects
                </motion.h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <motion.div
                            className="group relative rounded-xl overflow-hidden glass-card shadow-lg hover:shadow-glow border border-white/10"
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                opacity: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
                                y: { duration: 0.2, ease: "easeOut" }
                            }}
                            whileHover={{
                                y: -12,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                        >
                            {/* Animated gradient border on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />

                            <div className="w-full aspect-video overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="relative p-6 pt-4 bg-[#1A1A1A]/60 backdrop-blur-sm border-t-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300">
                                <div className="flex flex-row justify-between items-center mb-2 mt-0">
                                    <h3 className="font-poppins text-xl text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-300 transition-all duration-300">{project.title}</h3>
                                    <div className="flex flex-row gap-1">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg text-gray-400 hover:text-purple-300 hover:bg-purple-400/10 transition-all duration-300"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="font-poppins text-sm text-gray-300 mb-4">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech?.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 text-xs font-mono text-gray-400 border border-gray-700 rounded hover:border-blue-500/50 hover:text-gray-300 transition-all duration-200"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
        </section>
    );
}
