import React from "react";
import { motion } from "framer-motion";
import certificates from "../data/certificates.json";

export default function Certificates() {
  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-300"
      >
        Certifications
      </motion.h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-black/5 dark:border-white/10 hover:shadow-xl transition"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl select-none">{cert.badge}</span>
              <div>
                <div className="font-bold text-lg text-gray-900 dark:text-white leading-snug">
                  {cert.title}
                </div>
                <div className="text-blue-600 text-sm font-medium">{cert.provider}</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {cert.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
              <span>{cert.category}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>{cert.difficulty}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>{cert.duration}</span>
            </div>
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition"
            >
              View PDF
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 