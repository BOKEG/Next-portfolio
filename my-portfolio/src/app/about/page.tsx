import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">About Me</h1>
      <p className="mt-4 text-lg">
        Hello! I'm <strong>Grace Boke</strong>, a passionate and self-driven computer science professional. 
        I am skilled in software development, database management, and IT infrastructure. 
        My goal is to apply my expertise in a competitive work environment, ensuring efficiency and productivity.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Background</h2>
      <p className="mt-2">
        I hold a Bachelor's degree in Computer Science from Kiriri Women’s University of Science and Technology. 
        Currently, I am expanding my skills in software development at GOMYCODE School of Technology.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Work Experience</h2>
      <ul className="mt-2 list-disc list-inside">
        <li>Examination Assistant at Kiriri Women’s University of Science and Technology (2022 - Present)</li>
        <li>IT Attaché at National Health Insurance Fund (May 2022 - July 2022)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Interests & Hobbies</h2>
      <p className="mt-2">
        I enjoy researching new technologies, reading to expand my knowledge, and troubleshooting 
        software/hardware issues to improve efficiency.
      </p>
    </div>
  );
};

export default About;
