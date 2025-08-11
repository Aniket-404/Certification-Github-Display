import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/src/data/projects.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Top Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col border-l-4 border-green-500 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg text-gray-900 dark:text-white hover:underline"
              >
                {project.name}
              </a>
              <span className="ml-auto text-gray-500 text-sm">⭐ {project.stars}</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.topics.map((topic) => (
                <span key={topic} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                  #{topic}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} 