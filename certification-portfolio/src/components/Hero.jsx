import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGlobe, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/30 blur-3xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <motion.img
          src="https://avatars.githubusercontent.com/u/102298183?v=4"
          alt="Aniket Kamble Avatar"
          className="w-28 h-28 rounded-full shadow-xl mb-5 ring-4 ring-blue-500/40"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
            Aniket Kamble
          </span>
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Full Stack Developer crafting performant web apps. Passionate about AI, data, and beautiful UX.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {['React','Node.js','Python','AI/ML','Design'].map((chip) => (
            <motion.span
              key={chip}
              whileHover={{ y: -2 }}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border border-black/5 dark:border-white/10"
            >
              {chip}
            </motion.span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="https://aniketk-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition"
          >
            <FaGlobe /> Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-kamble-873613221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-200 hover:scale-[1.02] active:scale-[0.99] transition border border-blue-200 dark:border-blue-800"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="certificates/Advanced React by Meta.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-200 hover:scale-[1.02] active:scale-[0.99] transition border border-emerald-200 dark:border-emerald-800"
          >
            <FaDownload /> Download Sample Cert
          </a>
        </div>
      </motion.div>
    </section>
  );
} 