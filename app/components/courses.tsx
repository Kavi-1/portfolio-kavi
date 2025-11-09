const courses = [
    { number: "CS 440", name: "Artificial Intelligence", term: "Fall 2025" },
    { number: "CS 411", name: "Software Engineering", term: "Fall 2025" },
    { number: "CS 460", name: "Intro to Databases", term: "Fall 2024" },
    { number: "CS 350", name: "Distributed Systems", term: "Fall 2024" },
    { number: "CS 330", name: "Analysis of Algorithms", term: "Spring 2024" },
    { number: "CS 365", name: "Foundations of Data Science", term: "Spring 2025" },
    { number: "CS 391", name: "Topics in Computer Science", term: "Spring 2025" },
    { number: "CS 210", name: "Computer Systems", term: "Fall 2023" },
    { number: "CS 237", name: "Probability in Computing", term: "Fall 2023" },
    { number: "CS 320", name: "Concepts Programming Languages", term: "Spring 2024" },
    { number: "CS 332", name: "Elements Theory of Computation", term: "Spring 2026" },
    { number: "CS 131", name: "Combinatorial Structures", term: "Fall 2022" },
    { number: "CS 132", name: "Geometric Algorithms", term: "Spring 2023" },
    { number: "CS 112", name: "Intro Computer Science 2", term: "Spring 2023" },
    { number: "CS 111", name: "Intro Computer Science 1", term: "Fall 2022" },
    { number: "MA 115", name: "Statistics 1", term: "Fall 2022" },
];

export default function Courses() {
    return (
        <div className="bg-gray-50 w-full dark:bg-gray-800">
            <section className="bg-gray-50 w-full max-w-4xl mx-auto py-20 px-4 dark:bg-gray-800" id="courses">
                <h2 className="text-gray-600 text-2xl mb-12 text-center font-poppins dark:text-zinc-300">Courses</h2>
                <div className="grid gap-5 md:grid-cols-2">
                    {courses.map((course) => (
                        <div
                            key={course.number + course.term}
                            className="rounded-xl border dark:border-0 border-zinc-200 bg-white dark:bg-gray-700 shadow-md hover:shadow-xl transition-all hover:scale-101 transition-transform duration-200 p-6 flex flex-col"
                        >
                            <div className="flex flex-row justify-between items-center mb-1">
                                <span className="text-black font-mono text-xs dark:text-zinc-300">{course.number}</span>
                                <span className="text-xs font-poppins text-zinc-400 ml-2 dark:text-zinc-300">{course.term}</span>
                            </div>
                            <span className="font-poppins text-black text-base font-semibold mb-1 dark:text-white">{course.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}