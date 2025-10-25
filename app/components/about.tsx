export default function About() {
    return (
        <div className="bg-gray-50 w-full">
            <section className="bg-gray-50 w-full max-w-4xl mx-auto py-20 px-4 flex flex-col justify-center items-center" id="about">
                <h2 className="text-2xl mb-12 text-center font-poppins text-gray-600">About</h2>

                <div className="rounded-xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-all hover:scale-101 transition-transform duration-200 overflow-hidden">
                    <div className="w-full p-6">
                        <h3 className="font-poppins text-xl text-center text-black font-semibold mb-2">Kavi Lu</h3>
                        <p className="font-poppins text-sm text-center text-zinc-600 mb-4">
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
                </div>
            </section>
        </div>
    );
}
