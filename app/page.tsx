import About from "./components/about";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Main from "./components/main";
import Nav from "./components/nav";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <Nav />
        <Main />
      </div>
      <About />
      <Projects />
      <Courses />
      <Footer />
    </>
  );
}