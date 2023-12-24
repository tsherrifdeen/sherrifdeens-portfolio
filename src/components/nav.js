import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded className="px-0 py-24">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">
          st.
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          Projects
        </NavbarLink>
        <NavbarLink href="#">Resume</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
