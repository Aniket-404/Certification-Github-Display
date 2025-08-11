import React, { useEffect, useState } from "react";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("/src/data/certificates.json")
      .then((res) => res.json())
      .then(setCertificates);
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Certificates
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col border-l-4 border-blue-500 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{cert.badge}</span>
              <div>
                <div className="font-semibold text-lg text-gray-900 dark:text-white">
                  {cert.title}
                </div>
                <div className="text-blue-600 text-sm font-medium">{cert.provider}</div>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {cert.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {cert.skills.map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>{cert.category}</span>
              <span>{cert.difficulty}</span>
              <span>{cert.duration}</span>
            </div>
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} 