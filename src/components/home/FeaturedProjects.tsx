"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import SectionTitle from "@/components/common/SectionTitle";

interface ProjectLink {
  label: string;
  href: string;
  type: "demo" | "github" | "view";
}

interface ProjectInfo {
  label: string;
  value: string;
}

interface Project {
  id: number;
  tag?: string;
  title: string;
  description: string;
  info: ProjectInfo[];
  links: ProjectLink[];
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    tag: "Conceptual Work",
    title: "Promotional landing page for our favorite show",
    description:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    info: [
      { label: "Year", value: "2023" },
      { label: "Role", value: "Front-end Developer" },
    ],
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "See on Github", href: "#", type: "github" },
    ],
    image: "/images/project-adventure-time.png",
  },
  {
    id: 2,
    title: "Blog site for World News",
    description:
      "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
    info: [
      { label: "Client", value: "World News" },
      { label: "Year", value: "2022" },
      { label: "Role", value: "Front-end Developer" },
    ],
    links: [{ label: "View Project", href: "#", type: "view" }],
    image: "/images/project-world-news.png",
  },
  {
    id: 3,
    tag: "Challenge",
    title: "E-commerce product page",
    description:
      "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
    info: [
      { label: "Year", value: "2022" },
      { label: "Role", value: "Front-end Developer" },
    ],
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "See on Github", href: "#", type: "github" },
    ],
    image: "/images/project-ecommerce.png",
  },
];

const LinkIcon = ({ type }: { type: ProjectLink["type"] }) => {
  if (type === "github")
    return <Icon icon="ph:github-logo" width={18} height={18} />;
  return <Icon icon="ph:arrow-up-right-bold" width={18} height={18} />;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start group">
    {/* Image */}
    {project.image && (
      <div className="w-full lg:w-105 shrink-0 relative">
        {project.tag && (
          <span className="absolute top-4 left-4 z-10 bg-background-2/90 text-white font-manrope text-xs font-medium px-3 py-1.5 rounded-full">
            {project.tag}
          </span>
        )}
        <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-secondary/20 transition-shadow duration-300">
          <Image
            src={project.image}
            alt={project.title}
            width={420}
            height={340}
            className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            style={{ maxHeight: "340px" }}
          />
        </div>
      </div>
    )}

    {/* Content */}
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex flex-col gap-4">
        <h3
          className="font-space-grotesk font-normal text-secondary"
          style={{ fontSize: "clamp(22px, 2.8vw, 36px)", lineHeight: "1.3" }}
        >
          {project.title}
        </h3>
        <p className="font-space-grotesk text-muted text-base leading-7">
          {project.description}
        </p>
      </div>

      {/* Info table */}
      <div>
        <p className="font-manrope font-semibold text-white text-base uppercase mb-2">
          Project Info
        </p>
        <div style={{ borderBottom: "1px solid #484848" }}>
          {project.info.map(({ label, value }, i) => (
            <div
              key={label}
              className="flex justify-between items-center py-3.5"
              style={{ borderTop: i === 0 ? "none" : "1px solid #484848" }}
            >
              <span className="font-manrope font-medium text-white text-base">
                {label}
              </span>
              <span className="font-manrope font-medium text-muted text-base">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-8">
        {project.links.map((link) => (
          <div key={link.label} className="flex flex-col gap-1">
            <a
              href={link.href}
              className="flex items-center gap-1.5 text-secondary font-manrope font-bold text-sm uppercase hover:opacity-75 transition-opacity"
            >
              {link.label}
              <LinkIcon type={link.type} />
            </a>
            <div className="h-0.5 bg-secondary rounded-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedProjects = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-background-dark topo-bg"
    >
      <div className="flex justify-center pt-16 pb-4">
        <ScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle
          title="Featured Projects"
          subtitle="Here are some of the selected projects that showcase my passion for software development."
          className="mb-20"
        />

        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
