"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="w-full max-w-4xl mx-auto py-20 px-4 flex flex-col justify-center items-center" id="about" ref={ref}>
            <motion.h2
                className="text-3xl mb-12 text-center font-poppins font-bold gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
            >
                About
            </motion.h2>

            <motion.div
                className="relative max-w-2xl rounded-2xl p-8 glass-card shadow-lg hover:shadow-glow transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
            >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 to-purple-400 opacity-30 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                    <div className="w-full h-full bg-[#1A1A1A]/90 backdrop-blur-xl rounded-2xl" />
                </div>

                <div className="relative w-full">
                    <h3 className="font-poppins text-2xl text-center font-bold mb-3 gradient-text">Kavi Lu</h3>
                    <p className="font-poppins text-sm text-center text-gray-300 leading-relaxed">
                        I'm a Computer Science student at Boston University, interested in software engineering
                        and full stack development. I enjoy building projects, learning new technologies,
                        and solving real-world problems. Currently, I intern at Salary.com working in IT,
                        and I'm excited to pursue a career as a software engineer.
                        <br /><br />
                        <span className="block mt-2">
                            Outside of tech, I enjoy creative video editing with Adobe After Effects, weightlifting at the gym, drawing, and taking walks by the pond.
                        </span>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
