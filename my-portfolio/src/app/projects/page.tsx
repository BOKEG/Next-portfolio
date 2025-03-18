import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using Next.js, featuring project showcases, animations, and dark mode.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Movie App",
    description: "A React-based application that allows users to browse, filter, and watch movie trailers.",
    technologies: ["React", "Hooks", "React Router"],
  },
  {
    title: "To-Do Application",
    description: "A task management app built with React and Redux for state management.",
    technologies: ["React", "Redux", "CSS Modules"],
  },
  {
    title: "Student Cafeteria System",
    description: "A MERN stack application that allows students to order food online and receive real-time order updates.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
  },
  {
    title: "Weather App",
    description: "A web application that fetches and displays real-time weather data using an API.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
  },
];

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <div className="mt-6 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
