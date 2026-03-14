"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const BlogHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const socialIconClass =
    "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-background-dark hover:bg-primary transition-all duration-300";

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/5">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-4 lg:py-5 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-ibm-plex-mono shrink-0">
          <span className="text-secondary text-base md:text-xl lg:text-[32px] font-medium">
            &lt;Html/&gt;
          </span>
          <span className="text-white text-base md:text-xl lg:text-[32px] font-medium">
            Sheriff
          </span>
        </Link>

        {/* Nav + Right section */}
        <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
          {/* Nav links */}
          <nav className="flex items-center gap-6 md:gap-8">
            <Link
              href="/"
              className="font-ibm-plex-mono text-white text-sm md:text-base lg:text-2xl capitalize hover:text-secondary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="font-ibm-plex-mono text-secondary text-sm md:text-base lg:text-2xl capitalize"
            >
              Blogs
            </Link>
          </nav>

          {/* Right: Search + Social */}
          <div className="flex items-center gap-4 lg:gap-16">
            {/* Search — pill on xl+, icon on smaller */}
            <div className="flex items-center">
              <div className="hidden xl:flex items-center gap-2 bg-white rounded-full px-4 py-1.5 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-gray-700 text-sm outline-none flex-1 placeholder:text-gray-400"
                />
                <Icon
                  icon="ph:magnifying-glass"
                  width={18}
                  height={18}
                  className="text-gray-500 shrink-0"
                />
              </div>
              {/* Icon only for mobile/tablet */}
              <button
                className="xl:hidden text-white hover:text-secondary transition-colors duration-200"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Icon icon="ph:magnifying-glass" width={20} height={20} />
              </button>
            </div>

            {/* Social icons — hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#" className={socialIconClass} aria-label="Instagram">
                <Icon icon="mdi:instagram" width={18} height={18} />
              </a>
              <a href="#" className={socialIconClass} aria-label="Discord">
                <Icon icon="mdi:discord" width={18} height={18} />
              </a>
              <a href="#" className={socialIconClass} aria-label="GitHub">
                <Icon icon="mdi:github" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search dropdown */}
      {searchOpen && (
        <div className="xl:hidden px-6 pb-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5">
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              onBlur={() => setSearchOpen(false)}
              className="bg-transparent text-gray-700 text-sm outline-none flex-1 placeholder:text-gray-400"
            />
            <Icon
              icon="ph:magnifying-glass"
              width={16}
              height={16}
              className="text-gray-500"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;
