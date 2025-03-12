"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Media", path: "/media" },
  { title: "Contact", path: "/contact" },
  { title: "Registration", path: "/registration" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="py-4.5 border-b border-black/40 fixed top-0 left-0 w-full bg-white dark:bg-black z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="#">
          <h1 className="font-bold text-2xl dark:text-white">
            Maksi<span className="font-logo font-normal">fy</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-black dark:text-white border-b-2 border-darken dark:border-white"
              } text-gray text-[16px] hover:text-black  dark:hover:text-white transition-all duration-200`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:flex items-center justify-center gap-5">
          <Link href="/signup">
            <Button className="py-3 px-8" variant="darken">
              Sign Up
            </Button>
          </Link>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t mt-4 border-black/20">
          <div className="flex flex-col items-center gap-4 py-4">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-black border-b-2 border-darken"
                } text-gray text-[16px] hover:text-black transition-all duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link href="/signup">
              <Button className="py-3 px-8 w-full" variant="darken">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
