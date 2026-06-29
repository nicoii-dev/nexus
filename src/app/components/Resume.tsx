"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";

interface TimelineItem {
  type: "education" | "experience";
  icon: typeof FaUserGraduate;
  title: string;
  subtitle: string;
  period: string;
  details?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "education",
    icon: FaUserGraduate,
    title: "Bachelor of Science in Information Technology",
    subtitle: "Cagayan de Oro College, Philippines",
    period: "2014 - 2019",
  },
  {
    type: "experience",
    icon: FaBriefcase,
    title: "Fligno Software Philippines, Inc",
    subtitle: "Software Engineer",
    period: "Sep 2021 - Feb 2025",
    details: [
      "Built and maintained web applications using React, Next.js, and Laravel",
      "Developed mobile applications with React Native",
      "Collaborated with cross-functional teams on agile projects",
    ],
  },
  {
    type: "experience",
    icon: FaBriefcase,
    title: "Freelance",
    subtitle: "Fullstack Developer",
    period: "March 2025 - Present",
    details: [
      "Delivering end-to-end web and mobile solutions for clients",
      "Architecting scalable systems with modern tech stacks",
    ],
  },
];

export default function Resume() {
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
      id="resume"
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="glass rounded-2xl p-8 sm:p-12">
        <p className="section-tag">{`</> RESUME`}</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
          Education &{" "}
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary/20" />

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative pl-12 transition-all duration-500 delay-[${
                  idx * 150
                }ms] ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-xl glass flex items-center justify-center border border-border/50">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>

                <div className="glass rounded-xl p-5 hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  {item.details && (
                    <ul className="mt-3 space-y-1.5">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/ARJOHN_ELY_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all glow group"
          >
            Download CV
            <GoArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
