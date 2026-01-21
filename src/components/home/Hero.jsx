import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-10 px-4">
      <div className="mb-10">
        <h1 className="text-7xl text-primary text-center">Software Engineer</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="py-8 flex w-3/4 flex-col space-y-6">
          <span className="text-base leading-0 font-ibm-plex-mono text-primary">
            &lt;h1&gt;
          </span>
          <h3 className="text-5xl leading-tight">
            Hey, Konichiwa! <br />
            I'm <span className="text-secondary">Sherrifdeen,</span>
            <br /> A Software Engineer.
            <span className="text-base text-primary font-ibm-plex-mono">
              &lt;/h1&gt;
            </span>
          </h3>
          <span className="font-ibm-plex-mono text-primary ">&lt;p&gt;</span>
          <p>
            I specialize in building high-quality web applications and have a
            passion for creating efficient and scalable solutions.
          </p>
          <span className="font-ibm-plex-mono text-primary ">&lt;p&gt;</span>
        </div>
        <div className="rounded-[80px] flex flex-col justify-between px-8 py-12 bg-background-2 font-ibm-plex-mono">
          <div className="">
            <div className="flex gap-2 items-center">   
              <h5 className="text-secondary text-5xl font-semibold">4</h5>
              <p className="text-">
                Years of <br /> Experience
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h5 className="text-secondary text-5xl font-semibold">6</h5>
              <p className="text-">
                Development <br /> tools
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h5 className="text-secondary text-5xl font-semibold">3</h5>
              <p className="text-">
                Programming <br /> Languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
