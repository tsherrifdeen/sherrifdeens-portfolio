import Link from "next/link";
import { Icon } from "@iconify/react";

const BlogFooter = () => {
  const iconBtnClass =
    "w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-background-dark hover:bg-primary transition-all duration-300";

  return (
    <footer className="bg-background border-t border-complementary">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Social icons — always centered */}
        <div className="flex items-center gap-8">
          <a href="#" className={iconBtnClass} aria-label="Instagram">
            <Icon icon="mdi:instagram" width={20} height={20} />
          </a>
          <a href="#" className={iconBtnClass} aria-label="Discord">
            <Icon icon="mdi:discord" width={20} height={20} />
          </a>
          <a href="#" className={iconBtnClass} aria-label="GitHub">
            <Icon icon="mdi:github" width={20} height={20} />
          </a>
        </div>

        {/* Info: copyright + policy */}
        {/* Mobile: centered column | md+: space-between row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3">
          <p className="font-ubuntu font-light text-white text-base text-center md:text-left">
            © 2023 Sheriff. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="font-ubuntu font-light text-white text-base hover:text-secondary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-ubuntu font-light text-white text-base hover:text-secondary transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
