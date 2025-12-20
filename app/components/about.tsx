"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 w-full dark:bg-gray-800">
            <section className="bg-gray-50 w-full max-w-4xl mx-auto py-20 px-4 flex flex-col justify-center items-center dark:bg-gray-800" id="about" ref={ref}>
                <motion.h2
                    className="text-2xl mb-12 text-center font-poppins text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About
                </motion.h2>

                <motion.div
                    className="rounded-xl border dark:border-0 border-zinc-200 bg-white shadow-md hover:shadow-xl transition-all hover:scale-101 transition-transform duration-200 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="w-full p-6 dark:bg-gray-800">
                        <h3 className="font-poppins text-xl text-center text-black font-semibold mb-2 dark:text-white">Kavi Lu</h3>
                        <p className="font-poppins text-sm text-center text-zinc-600 mb-4 dark:text-zinc-200">
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
        </div>
    );
}
