import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
  text: string;
  href: string;
}

const NavbarLink = ({ text, href }: NavbarLinkProps) => {
  return (
    <Link
      className="group text-sky-600 transition duration-300 block py-2 pl-3 pr-4 font-primary font-bold leading-6 text-sw-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-sw-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      href={href}
    >
      {text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
    </Link>
  );
};

export default NavbarLink;
