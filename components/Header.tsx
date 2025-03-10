"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { IoSunny, IoMoon, IoClose } from "react-icons/io5";
import { useState, memo } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderLink {
  label: string;
  href: string;
  isActive: boolean;
}

const links: HeaderLink[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "About", href: "/about", isActive: false },
  { label: "Works", href: "/works", isActive: false },
  { label: "Contact", href: "/contact", isActive: false },
];

const NavLinks = memo(function NavLinks() {
  return (
    <ul className="md:flex items-center gap-12 hidden">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 text-base"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
});

const ThemeButton = memo(function ThemeButton({ 
  theme, 
  toggleTheme 
}: { 
  theme: string; 
  toggleTheme: () => void;
}) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <IoMoon className="w-5 h-5" />
      ) : (
        <IoSunny className="w-5 h-5" />
      )}
    </button>
  );
});

const Sidebar = memo(function Sidebar({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 bg-black/20 z-40 md:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="fixed inset-y-0 right-0 w-[90%] bg-white dark:bg-gray-900 shadow-lg z-50 p-4"
      >
        <div className="flex items-center justify-end">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer md:hidden"
          >
            <IoClose className="w-10 h-10" />
          </button>
        </div>
        <nav className="mt-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 text-lg"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
});

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-3xl fonts-semibold">KovaX</h1>
      <NavLinks />

      <div className="md:flex items-center gap-4 hidden">
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <Link
          href="/contact"
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-full hover:opacity-90"
        >
          Let's Talk
        </Link>
      </div>

      <button
        onClick={() => setIsSidebarOpen(true)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer md:hidden"
      >
        <CgMenuRight className="w-10 h-10" />
      </button>

      <AnimatePresence mode="wait">
        {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      </AnimatePresence>
    </header>
  );
}
