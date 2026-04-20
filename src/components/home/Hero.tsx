"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";

const StatsBox = () => (
  <div
    className="bg-background-2 rounded-[80px] flex flex-col gap-12 px-8 py-12 font-ibm-plex-mono shadow-md"
    style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.25)" }}
  >
    {[
      { num: "4", label1: "Programming", label2: "Languages" },
      { num: "15", label1: "Development", label2: "Tools" },
      { num: "5+", label1: "Years of", label2: "Experience" },
    ].map(({ num, label1, label2 }) => (
      <div key={label1} className="flex items-center gap-4">
        <CountUp
          className="text-secondary font-medium"
          style={{ fontSize: "48px", lineHeight: "62px" }}
          start={0}
          duration={3}
          end={parseInt(num)}
        />

        <p className="text-white text-base leading-5">
          {label1}
          <br />
          {label2}
        </p>
      </div>
    ))}
  </div>
);

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section
      id="hero"
      className="bg-background min-h-screen pt-20 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        {/* Desktop: giant "Developer" heading */}
        <div className="hidden lg:block text-center font-manrope text-primary font-normal text-8xl leading-32">
          Software Engineer
        </div>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-0 mt-4 lg:mt-0">
          {/* Left: Info */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-[62%]">
            {/* HTML code decorators */}
            <span className="font-ibm-plex-mono text-primary text-sm md:text-base">
              &lt;h1&gt;
            </span>

            <div className="flex flex-col gap-1">
              <h1
                className="text-white font-manrope font-normal leading-none"
                style={{
                  fontSize: "clamp(32px, 5vw, 64px)",
                }}
              >
                Hi,
              </h1>
              <h1
                className="font-manrope font-normal"
                style={{
                  fontSize: "clamp(32px, 5vw, 64px)",
                  lineHeight: "1.125",
                  color: "white",
                }}
              >
                I&apos;m <span className="text-secondary">Sherrifdeen</span>,
              </h1>
              <h1
                className="text-white font-manrope font-normal"
                style={{
                  fontSize: "clamp(32px, 5vw, 64px)",
                  lineHeight: "1.125",
                }}
              >
                A Software Engineer.
              </h1>
            </div>

            <span className="font-ibm-plex-mono text-primary text-sm md:text-base">
              &lt;/h1&gt;
            </span>

            {/* Paragraph */}
            <div className="flex flex-col gap-4">
              <span className="font-ibm-plex-mono text-primary text-sm">
                &lt;p&gt;
              </span>
              <p className="font-outfit text-white text-base leading-6 ml-4 max-w-150">
                I help businesses grow by building high-quality web experiences.
                If you’re looking for a developer who focuses on delivering
                results and getting things done, I can help.
              </p>
              <span className="font-ibm-plex-mono text-primary text-sm">
                &lt;/p&gt;
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToContact}
                className="font-manrope font-medium text-secondary hover:opacity-80 transition-opacity"
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: "42px",
                }}
              >
                Let&apos;s talk
              </button>
              <span className="w-8 h-8 flex items-center justify-center bg-secondary rounded text-background">
                <Icon icon="bx:chat" width="24" height="24" />
              </span>
            </div>
          </div>

          {/* Right: Stats pill */}
          <div className="flex justify-center lg:justify-end">
            <StatsBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
