import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex w-full font-ibm-plex-mono">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto py-8 px-4 ">
        <h5 className="font-bold text-xl">
          <span className=" text-secondary">&lt;Html/&gt;</span> Sherrifdeen
        </h5>
        <div className="flex gap-8">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Blogs</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"#"}>
            <Icon
              icon="ion:logo-github"
              width="24px"
              height="24px"
              color="#12F7D6"
            />
          </Link>
          <Link href={"#"}>
            <Icon
              icon="ion:logo-linkedin"
              width="24px"
              height="24px"
              color="#12F7D6"
            />
          </Link>
          <a href="#">Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
