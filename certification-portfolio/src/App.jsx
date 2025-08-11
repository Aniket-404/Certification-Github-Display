import React from "react";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Hero />
      <div className="max-w-6xl mx-auto px-4">
        <Certificates />
        <Projects />
      </div>
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Aniket Kamble. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
