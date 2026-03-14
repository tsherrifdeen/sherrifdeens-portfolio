import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      {/* Mouse icon */}
      <div className="w-7 h-10 rounded-full border-2 border-secondary flex items-start justify-center pt-1.5">
        <div
          className="w-1 h-2 rounded-full bg-secondary"
          style={{ animation: "scrollDot 1.5s ease-in-out infinite" }}
        />
      </div>
      {/* Dashed line */}
      <div className="flex flex-col items-center gap-1">
        <span className="block w-0.5 h-2 bg-secondary/60 rounded-full" />
        <span className="block w-0.5 h-2 bg-secondary/40 rounded-full" />
        <span className="block w-0.5 h-2 bg-secondary/20 rounded-full" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
