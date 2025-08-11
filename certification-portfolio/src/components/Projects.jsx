import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.json";
import { FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-300"
      >
        Top Projects
      </motion.h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-black/5 dark:border-white/10 hover:shadow-xl transition"
          >
            <div className="flex items-start gap-3 mb-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg text-gray-900 dark:text-white hover:underline"
              >
                {project.name}
              </a>
              <span className="ml-auto inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                <FaStar className="text-amber-400" /> {project.stars}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.topics.map((topic) => (
                <span key={topic} className="px-2 py-0.5 rounded-md text-[11px] bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  #{topic}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition"
            >
              View on GitHub <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 