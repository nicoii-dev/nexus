"use client";

import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import Main from "./components/Main";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top, rgba(99,102,241,0.08), transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div
          className={`relative max-w-4xl mx-auto text-center ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs text-muted-foreground tracking-wide">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
            Available for work
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Arjohn Ely</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            Full Stack Developer
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground/80 leading-relaxed mb-10">
            Building modern, scalable web and mobile applications with React,
            Next.js, TypeScript, and Laravel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all glow"
            >
              View Projects
              <GoArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/ARJOHN_ELY_RESUME.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium text-sm hover:bg-card transition-all"
            >
              Download CV
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium text-sm hover:bg-card transition-all"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Main />
    </div>
  );
}
