import React from "react";

const skills = {
  "Programming Languages": ["C++", "C", "Python"],
  "Front-End Development": ["HTML", "CSS (Bootstrap & Tailwind CSS)", "JavaScript"],
  "Back-End Development": ["Node.js", "API Development (Postman)"],
  "Database Management": ["MySQL", "MongoDB"],
  "Version Control": ["Git"],
  "Computer & IT Skills": [
    "Operating Systems (Windows, Linux)",
    "Graphic and Design Skills",
    "Technical Support",
    "Networking (TCP/IP, HTTP/HTTPS)",
    "System Troubleshooting",
  ],
  "Professional Skills": [
    "Strong Interpersonal Skills",
    "Excellent Communication",
    "Time Management",
    "Teamwork & Collaboration",
    "Problem-Solving",
  ],
};

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Skills</h1>
      <div className="mt-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="text-2xl font-semibold">{category}</h2>
            <ul className="mt-2 list-disc list-inside">
              {items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
