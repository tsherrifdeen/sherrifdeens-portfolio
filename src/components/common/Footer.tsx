import Link from "next/link";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className=" border-t topo-bg border-complementary">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-ubuntu font-light text-white text-base text-center md:text-left">
            ©2026 Sherrifdeen. All rights reserved.
          </p>

          {/* Policy links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="font-ubuntu font-light text-white text-base hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-ubuntu font-light text-white text-base hover:text-secondary transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          {/* Social icons */}
          <Icons hidden={false} primary={false} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
