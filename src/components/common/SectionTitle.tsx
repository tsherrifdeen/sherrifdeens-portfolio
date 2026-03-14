import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
}: SectionTitleProps) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <h2
        className={`font-manrope font-normal text-secondary capitalize ${titleClassName}`}
        style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: "1.125" }}
      >
        {title}
      </h2>
      {/* Teal underline decoration */}
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <div className="h-0.5 w-24 bg-secondary" />
        <div className="w-2 h-2 rounded-full bg-secondary" />
      </div>
      {subtitle && (
        <p className="text-white font-ibm-plex-mono text-base text-center leading-5 max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
