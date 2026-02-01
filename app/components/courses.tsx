"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
    { number: "CS 440", name: "Artificial Intelligence", term: "F25", category: "AI" },
    { number: "CS 411", name: "Software Engineering", term: "F25", category: "Systems" },
    { number: "CS 460", name: "Intro to Databases", term: "F24", category: "Systems" },
    { number: "CS 350", name: "Distributed Systems", term: "F24", category: "Systems" },
    { number: "CS 330", name: "Analysis of Algorithms", term: "S24", category: "Theory" },
    { number: "CS 365", name: "Foundations of Data Science", term: "S25", category: "AI" },
    { number: "CS 391", name: "Web Application Development", term: "S25", category: "Systems" },
    { number: "CS 210", name: "Computer Systems", term: "F23", category: "Systems" },
    { number: "CS 237", name: "Probability in Computing", term: "F23", category: "Math" },
    { number: "CS 320", name: "Concepts Programming Languages", term: "S24", category: "Theory" },
    { number: "CS 332", name: "Elements Theory of Computation", term: "S26", category: "Theory" },
    { number: "CS 131", name: "Combinatorial Structures", term: "F22", category: "Math" },
    { number: "CS 132", name: "Geometric Algorithms", term: "S23", category: "Theory" },
    { number: "CS 112", name: "Intro Computer Science 2", term: "S23", category: "Core" },
    { number: "CS 111", name: "Intro Computer Science 1", term: "F22", category: "Core" },
    { number: "MA 115", name: "Statistics 1", term: "F22", category: "Math" },
];

// Unified gradient for all categories - BRIGHT neon colors
const getCategoryColor = (category: string) => {
    return "border-blue-500";
};

const getCategoryGradient = (category: string) => {
    return "from-blue-500 to-purple-400";
};

export default function Courses() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="w-full max-w-4xl mx-auto py-20 px-4" id="courses" ref={ref}>
                <motion.h2
                    className="text-3xl mb-12 text-center font-poppins font-bold gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Courses
                </motion.h2>
                <div className="grid gap-5 md:grid-cols-2">
                    {courses.map((course, i) => (
                        <motion.div
                            key={course.number + course.term}
                            className={`group relative rounded-lg p-6 glass-card shadow-md hover:shadow-glow transition-all duration-300 flex flex-col border-l-4 ${getCategoryColor(course.category)} hover:border-0`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                            whileHover={{
                                y: -4,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                        >
                            {/* Gradient border on hover */}
                            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${getCategoryGradient(course.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '2px' }}>
                                <div className="w-full h-full bg-[#1A1A1A]/90 backdrop-blur-xl rounded-lg" />
                            </div>

                            <div className="flex flex-row justify-between items-center mb-2">
                                <span className={`font-mono text-sm font-semibold bg-gradient-to-r ${getCategoryGradient(course.category)} text-transparent bg-clip-text`}>{course.number}</span>
                                <span className="text-xs font-mono text-gray-500">{course.term}</span>
                            </div>
                            <span className="font-poppins text-white text-base font-semibold">{course.name}</span>
                        </motion.div>
                    ))}
                </div>
        </section>
    );
}