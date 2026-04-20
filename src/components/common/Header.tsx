"use client";

import Link from "next/link";
import { useState } from "react";
import Icons from "./Icons";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-5 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-ibm-plex-mono">
          <span className="text-secondary text-base md:text-xl font-medium">
            &lt;html/&gt;
          </span>
          <span className="text-white text-base md:text-xl font-medium">
            Sherrifdeen
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-ibm-plex-mono text-white text-base hover:text-secondary transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Social Icons - hidden on mobile */}
          <div className="hidden md:flex">
            <Icons primary />
          </div>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-5 border-t border-white/5">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-ibm-plex-mono text-white text-base hover:text-secondary transition-colors cursor-pointer text-left"
            >
              {label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/5">
            <Icons primary />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Icon } from "@iconify/react";
// import Icons from "./Icons";

// const Header = () => {
//   const [searchOpen, setSearchOpen] = useState(false);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5">
//       <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-5 px-6">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 font-ibm-plex-mono">
//           <span className="text-secondary text-base md:text-xl font-medium">
//             &lt;Html/&gt;
//           </span>
//           <span className="text-white text-base md:text-xl font-medium">
//             Sherrifdeen
//           </span>
//         </Link>

//         {/* Nav links */}
//         <nav className="flex items-center gap-6 md:gap-10">
//           <button
//             onClick={() => scrollTo("hero")}
//             className="hidden font-ibm-plex-mono text-secondary text-sm md:text-base hover:opacity-80 transition-opacity cursor-pointer"
//           >
//             Home
//           </button>
//           {/* Desktop only - About link */}
//           <button
//             onClick={() => scrollTo("about")}
//             className="hidden sm:block font-ibm-plex-mono text-white text-sm md:text-base hover:text-secondary transition-colors cursor-pointer"
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollTo("projects")}
//             className="hidden font-ibm-plex-mono text-white text-sm md:text-base hover:text-secondary transition-colors cursor-pointer"
//           >
//             Projects
//           </button>
//           <button
//             onClick={() => scrollTo("contact")}
//             className="hidden font-ibm-plex-mono text-white text-sm md:text-base hover:text-secondary transition-colors cursor-pointer"
//           >
//             Contact
//           </button>
//         </nav>

//         {/* Right side: search + social */}
//         <div className="flex items-center gap-3 md:gap-5">
//           {/* Search
//           <div className="flex items-center gap-2 ">
//             {searchOpen && (
//               <input
//                 type="text"
//                 autoFocus
//                 placeholder="Search..."
//                 onBlur={() => setSearchOpen(false)}
//                 className="bg-background-2 text-white text-sm px-3 py-1 transition-all duration-1000 rounded-full outline-none border border-secondary/30 w-32 md:w-48"
//               />
//             )}
//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="text-white hover:text-secondary transition-colors"
//               aria-label="Search"
//             >
//               <Icon icon="ph:magnifying-glass" width={18} height={18} />
//             </button>
//           </div> */}
//           {/* Social Icons */}
//           <Icons primary hidden />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
