import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(activeDark);
    document.documentElement.classList.toggle('dark', activeDark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 bg-white/80 dark:bg-gray-900/80 border-b border-black/10 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <a href="/" className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
          Aniket • Certifications & Projects
        </a>
        <a href="https://github.com/Aniket-404" target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">
          <FaGithub className="text-xl" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <button onClick={toggleTheme} className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
} 