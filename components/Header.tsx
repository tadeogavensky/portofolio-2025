"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { IoSunny, IoMoon } from "react-icons/io5";

interface HeaderLink {
  label: string;
  href: string;
  isActive: boolean;
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const links: HeaderLink[] = [
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/about", isActive: false },
    { label: "Works", href: "/works", isActive: false },
    { label: "Contact", href: "/contact", isActive: false },
  ];

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-3xl fonts-semibold">KovaX</h1>
      <ul className="flex items-center gap-12">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors text-base"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <IoMoon className="w-5 h-5" />
          ) : (
            <IoSunny className="w-5 h-5" />
          )}
        </button>
        <Link
          href="/contact"
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
}
