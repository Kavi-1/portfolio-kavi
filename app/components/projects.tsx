
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from "@mui/material";

const projects = [
    {
        title: "SRT-Generator",
        desc: "A modern, responsive portfolio site built with Next.js, Tailwind CSS, and Framer Motion.",
        link: "https://srt-generator-kavi.vercel.app/",
        tech: ["Python", "AWS EC2", "faster-whisper AI", "React", "TypeScript", "Tailwind CSS"],
        image: "/srt.jpg",
        github: "https://github.com/Kavi-1/SRT-Generator"
    },
    {
        title: "Personal Expense Tracker",
        desc: "A real-time weather dashboard using OpenWeatherMap API and React.",
        link: "https://finance-dashboard-kavi.vercel.app/",
        tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Chart.js", "Google Oauth"],
        image: "/finance.jpg",
        github: "https://github.com/Kavi-1/personal-finance-dashboard"
    },
    {
        title: "House of China",
        desc: "A full-stack blog platform with authentication, markdown support, and comments.",
        link: "https://house-of-china-lutz.vercel.app/",
        tech: ["React", "TypeScript", "Next.js", "Supabase", "Tailwind CSS", "Stripe"],
        image: "/house.jpg",
        github: "https://github.com/Kavi-1/house-of-china"
    },
    {
        title: "AI Connect Four",
        desc: "A feature-rich e-commerce site with Stripe integration and product management.",
        image: "/connect4.jpg",
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
    return (
        <div className="bg-white w-full">
            <section className="bg-white w-full max-w-4xl mx-auto py-20  px-4" id="projects">
                <h2 className="text-2xl mb-12 text-center font-poppins text-gray-600">Projects</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <div className="rounded-xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-all hover:scale-102 transition-transform duration-200" key={i}>
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
                                    <h3 className={"font-poppins text-xl text-black font-semibold"}>{project.title}</h3>
                                    <div className="flex flex-row gap-0">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <IconButton sx={iconButtonStyle}>
                                                <GitHubIcon />
                                            </IconButton>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            {project.link && <IconButton sx={iconButtonStyle}>
                                                <LaunchIcon />
                                            </IconButton>}
                                        </a>
                                    </div>
                                </div>
                                <p className={"font-poppins text-sm text-zinc-600 mb-4"}>{project.desc}</p>
                                {project.tech?.map((t) => (
                                    <span
                                        key={t}
                                        className="bg-white border border-zinc-200 text-black text-xs px-2 py-1 rounded-xl font-mono inline-block mr-2 mt-2"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
