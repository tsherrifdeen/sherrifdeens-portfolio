import { Icon } from "@iconify/react";

const Icons = ({ hidden, primary }) => {
  // Logic to determine color schemes based on the 'primary' prop
  const bgClass = primary ? "bg-background-3" : "bg-primary";
  const iconColorClass = primary ? "text-secondary" : "text-background-dark";
  const hoverBgClass = primary
    ? "hover:bg-secondary"
    : "hover:bg-background-dark";
  const hoverIconClass = primary
    ? "hover:text-background-2"
    : "hover:text-primary";

  // Combined shared classes for cleaner code
  const buttonBase = `w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${bgClass} ${iconColorClass} ${hoverBgClass} ${hoverIconClass}`;

  return (
    <div className={`${hidden ? "hidden md:flex" : "flex"} items-center gap-3`}>
      {/* GitHub */}
      <a href="#" className={buttonBase} aria-label="GitHub">
        <Icon icon="mdi:github" width={18} height={18} />
      </a>

      {/* LinkedIn */}
      <a href="#" className={buttonBase} aria-label="LinkedIn">
        <Icon icon="ri:linkedin-fill" width={18} height={18} />
      </a>

      {/* Gmail */}
      <a
        href="mailto:tsherrifdeen@gmail.com"
        className={buttonBase}
        aria-label="Email"
      >
        <Icon icon="mdi:gmail" width={18} height={18} />
      </a>
    </div>
  );
};

export default Icons;
