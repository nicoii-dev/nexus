"use client";

import Link from "next/link";
import { GoHomeFill, GoPerson, GoBriefcase } from "react-icons/go";
import clsx from "clsx";
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "Home", icon: GoHomeFill },
  { id: "about", label: "About", icon: GoPerson },
  { id: "resume", label: "Resume", icon: GoPerson },
  { id: "projects", label: "Projects", icon: GoBriefcase },
];

export const NavBar = () => {
  const [currentNav, setCurrentNav] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 400) {
          setCurrentNav(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:z-50 lg:left-8">
        <div
          className={clsx(
            "flex flex-col gap-3 p-2 rounded-2xl transition-all duration-500",
            scrolled ? "glass" : "glass"
          )}
        >
          {navItems.map(({ id, label, icon: Icon }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setCurrentNav(id)}
              className={clsx(
                "relative group flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300",
                currentNav === id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute left-full ml-4 px-3 py-1.5 rounded-lg glass text-xs font-medium whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl glass shadow-xl shadow-black/20">
          {navItems.map(({ id, icon: Icon }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setCurrentNav(id)}
              className={clsx(
                "flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300",
                currentNav === id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
