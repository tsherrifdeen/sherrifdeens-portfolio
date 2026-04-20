"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollIndicator from "@/components/common/ScrollIndicator";

const About = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-background-dark topo-bg relative"
    >
      {/* Scroll Indicator */}
      <div className="flex justify-center pt-10 md:pt-16 pb-4">
        <ScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        {/* Heading */}
        <h2 className="font-ubuntu font-normal rounded-br-4xl w-fit px-6 py-1 mx-auto border-4 rounded-tl-4xl bg-background-2 md:text-6xl text-4xl text-secondary text-center capitalize mb-10 md:mb-16">
          About me
        </h2>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Code-styled text box */}
          <div
            className="bg-background-3 flex-1 p-6 md:p-10"
            style={{
              borderRadius: "40px 0 40px 0",
              border: "4px solid #12f7d6",
            }}
          >
            <span className="font-ibm-plex-mono text-primary text-sm block mb-4">
              &lt;p&gt;
            </span>

            <div className="font-ibm-plex-mono text-white text-base leading-7 space-y-4">
              <p>
                <span className="text-secondary font-medium">Hello!</span>
              </p>

              <p>
                My name is Sherrifdeen Tijani. I am software engineer focused on
                building fast, scalable, and user-centered web and mobile
                applications. I primarily work with{" "}
                <span className="text-secondary">JavaScript</span>,{" "}
                <span className="text-secondary">TypeScript</span>,{" "}
                <span className="text-secondary">React</span>,{" "}
                <span className="text-secondary">Node</span> and{" "}
                <span className="text-secondary">React Native</span> to create
                modern digital products with clean architecture and thoughtful
                user experiences.
              </p>

              <p>
                I enjoy turning complex ideas into intuitive interfaces and
                reliable systems. My work spans the full development lifecycle,
                from designing responsive frontends to integrating APIs, content
                systems, and backend services that power real-world
                applications.
              </p>
              <p>
                Beyond coding, I enjoy{" "}
                <span className="text-secondary">research</span>, exploring new
                ideas through videos, books and getting immersed in hobbies such
                as <span className="text-secondary">Formula 1</span>.
              </p>

              <p>
                I am always learning, building, and refining my craft while
                collaborating with teams and organizations to create technology
                that delivers meaningful impact.
              </p>
            </div>

            <span className="font-ibm-plex-mono text-primary text-sm block mt-4">
              &lt;/p&gt;
            </span>
          </div>

          {/* Image - desktop/tablet only */}
          <div className="hidden md:block w-full lg:w-105 shrink-0">
            <Image
              src="/images/about_sherrifdeen.jpg"
              alt="Sherrifdeen coding on a laptop"
              width={420}
              height={560}
              className="rounded-2xl w-full object-cover"
              style={{ maxHeight: "560px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
