"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/lib/icon";

const skills = [
  { name: "React & React Native", icon: "react", href: "https://react.dev/" },
  { name: "Next.js", icon: "next", href: "https://nextjs.org/" },
  { name: "TypeScript", icon: "typescript", href: "https://www.typescriptlang.org/" },
  { name: "GraphQL", icon: "graphql", href: "https://graphql.org/" },
  { name: "Tailwind CSS", icon: "tailwind", href: "https://tailwindcss.com/" },
  { name: "Laravel", icon: "laravel", href: "https://laravel.com/" },
  { name: "Node.js", icon: "node", href: "https://nodejs.org/" },
  { name: "Git", icon: "git", href: "https://git-scm.com/" },
  { name: "GitHub", icon: "github", href: "https://github.com/" },
  { name: "GitLab", icon: "gitlab", href: "https://about.gitlab.com/" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="glass rounded-2xl p-8 sm:p-12">
        <p className="section-tag">{`</> ABOUT ME`}</p>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-gradient">Arjohn Ely</span>
            </h2>
            <p className="text-lg text-muted-foreground font-mono">
              Full Stack Developer
            </p>
            <p className="text-muted-foreground/80 leading-relaxed">
              My expertise includes utilizing React.js with the Next.js
              framework for building robust and scalable web applications, along
              with Tailwind CSS for creating responsive and visually appealing
              designs. For mobile development, I specialize in React Native,
              crafting seamless applications for both Android and iOS platforms.
              Additionally, I possess intermediate proficiency in developing
              RESTful APIs using PHP Laravel and NodeJS, enabling efficient
              backend integration and data management.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">4+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gradient-alt mb-1">
                  20+
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Projects Delivered
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">90%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Frontend
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gradient-alt mb-1">
                  70%
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Backend
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-border">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-5">
            Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map(({ name, icon, href }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <span className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors">
                  {Icon(icon)}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
