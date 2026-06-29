import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

export default function Main() {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-32 space-y-24">
      <About />
      <Resume />
      <Projects />
    </div>
  );
}
