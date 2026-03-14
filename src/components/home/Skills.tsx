"use client";

import { Icon } from "@iconify/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import SectionTitle from "@/components/common/SectionTitle";

const ServiceCard = ({
  icon,
  title,
  subtitle,
  leftColor,
}: {
  icon: string;
  title: string;
  subtitle: string;
  leftColor: string;
}) => (
  <div className="flex items-stretch overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-default">
    <div
      className="w-2 shrink-0"
      style={{ backgroundColor: leftColor, borderRadius: "8px 0 0 8px" }}
    />
    <div
      className="flex-1 flex flex-col gap-2 px-6 py-5"
      style={{ backgroundColor: "#98faec", borderRadius: "0 8px 8px 0" }}
    >
      <div
        className="w-8 h-8 flex items-center justify-center rounded"
        style={{ backgroundColor: "#292f36" }}
      >
        <Icon icon={icon} width={18} height={18} color="white" />
      </div>
      <div>
        <p
          className="font-ibm-plex-mono font-normal capitalize"
          style={{ fontSize: "24px", color: "#292f36" }}
        >
          {title}
        </p>
        <p
          className="font-ibm-plex-mono text-base"
          style={{ color: "#43454d" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

const TechIcon = ({
  icon,
  label,
  labelColor,
  bg,
}: {
  icon: string;
  label: string;
  labelColor: string;
  bg: string;
}) => (
  <div className="flex flex-col items-center gap-4">
    <div
      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
      style={{ backgroundColor: bg }}
    >
      <Icon icon={icon} width={52} height={52} />
    </div>
    <span
      className="font-ibm-plex-mono font-medium capitalize"
      style={{ fontSize: "clamp(24px, 2vw, 32px)", color: labelColor }}
    >
      {label}
    </span>
  </div>
);

const Skills = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative code-bg overflow-hidden"
    >
      {/* Desktop decorative </> */}
      <div
        className="hidden lg:block absolute right-16 top-16 font-ubuntu text-secondary select-none pointer-events-none"
        style={{ fontSize: "168px", opacity: 0.55, lineHeight: 1 }}
      >
        &lt;/&gt;
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pt-16 pb-4">
        <ScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle
          title="Skills"
          subtitle="I am striving to never stop learning and improving"
          className="mb-16"
        />

        {/* Service cards */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-32 mb-20">
          <div className="flex-1">
            <ServiceCard
              icon="ph:monitor-fill"
              title="Web Developement"
              subtitle="MERN·MEVN Stack"
              leftColor="#0c73b8"
            />
          </div>
          <div className="flex-1">
            <ServiceCard
              icon="ph:device-mobile-fill"
              title="App Developement"
              subtitle="REACT NATIVE"
              leftColor="#28a9e0"
            />
          </div>
        </div>

        {/* Tech icons */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          <TechIcon
            icon="logos:javascript"
            label="JS"
            labelColor="#e7a020"
            bg="#e7a020"
          />
          <TechIcon
            icon="logos:typescript-icon"
            label="TypeScript"
            labelColor="#3079c6"
            bg="white"
          />
          <TechIcon
            icon="logos:tailwindcss-icon"
            label="Tailwind"
            labelColor="#17b5bc"
            bg="white"
          />
          <TechIcon
            icon="logos:react"
            label="React"
            labelColor="#28a9e0"
            bg="#28a9e0"
          />
          <TechIcon
            icon="logos:nextjs"
            label="NextJS"
            labelColor="white"
            bg="white"
          />
          <TechIcon
            icon="logos:nodejs"
            label="NodeJS"
            labelColor="#5db54f"
            bg="white"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
