import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

export default function Main() {
  return (
    <section className="text-[#CBDCEB] body-font md:max-w-6xl sm:w-2xl sm:max-w-2xl">
      <section className="max-w-7xl mx-auto  mt-10 mb-10">
        <About />
        <Resume />
        <Projects />
      </section>
    </section>
  );
}
