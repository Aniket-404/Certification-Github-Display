import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">
      <img
        src="https://avatars.githubusercontent.com/u/102298183?v=4"
        alt="Aniket Kamble Avatar"
        className="w-28 h-28 rounded-full shadow-lg mb-4 border-4 border-blue-500"
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
        Aniket Kamble
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
        Full Stack Developer | AI & Data Science Student
      </p>
      <div className="flex gap-4 justify-center mt-2">
        <a href="https://github.com/Aniket-404" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-gray-700 dark:text-gray-200 text-2xl">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        <a href="https://aniketk-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-gray-700 dark:text-gray-200 text-2xl">
          <i className="fa-solid fa-globe"></i> Portfolio
        </a>
        <a href="https://www.linkedin.com/in/aniket-kamble-873613221" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-gray-700 dark:text-gray-200 text-2xl">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">React</span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">AI/ML</span>
        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">Design</span>
      </div>
    </section>
  );
} 