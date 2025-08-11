import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Certificates />
        <Projects />
      </main>
      <footer className="text-center py-10 text-sm text-gray-500 dark:text-gray-400 border-t border-black/5 dark:border-white/10 mt-6">
        © {new Date().getFullYear()} Aniket Kamble • Built with React, Vite, Tailwind & Framer Motion
      </footer>
    </div>
  );
}

export default App;
