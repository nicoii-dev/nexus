import Icon from "@/lib/icon";
import Link from "next/link";
import { GoLinkExternal, GoRepo } from "react-icons/go";

interface GithubInterface {
  frontend: string;
  backend: string;
}

export interface ItemInterface {
  name: string;
  description: string;
  image: string;
  github: GithubInterface;
  madeWith: string[];
  type: "mobile" | "web";
  link: string;
}

interface ProjectInterface {
  item: ItemInterface;
  index: number;
}

export const ProjectItem = ({ item, index }: ProjectInterface) => {
  return (
    <div
      className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:glow-cyan"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {item.type === "mobile" ? (
            <Link
              href={item.link}
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <GoLinkExternal className="w-3.5 h-3.5" />
              App Store
            </Link>
          ) : (
            <Link
              href={item.link}
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <GoLinkExternal className="w-3.5 h-3.5" />
              Live Demo
            </Link>
          )}
        </div>

        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {item.madeWith.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg glass text-xs text-muted-foreground"
            >
              <span className="w-3.5 h-3.5">{Icon(tech)}</span>
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
          {item.github.frontend && (
            <Link
              href={item.github.frontend}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <GoRepo className="w-4 h-4" />
              Frontend
            </Link>
          )}
          {item.github.backend && (
            <Link
              href={item.github.backend}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <GoRepo className="w-4 h-4" />
              Backend
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
