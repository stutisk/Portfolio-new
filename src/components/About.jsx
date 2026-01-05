import { useState } from "react";

export const About = () => {
  const [activeCompany, setActiveCompany] = useState(null);

  const experiences = [
    {
      id: "openSource",
      company: "Team Shiksha",
      position: "Open Source Contributor",
      date: "June 2025 - present",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      id: "tap",
      company: "Tap",
      position: "Frontend Engineer",
      date: "Apr 2024 - Sept 2024",
      description:
        "Built an independent partner onboarding system,Developed multi-deal pool management, eliminating backend dependency ,worked on creative templates and email templates for tap invest and tap partner",
    },
    {
      id: "gamerji",
      company: "Gamerji",
      position: "Frontend Engineer",
      date: "Nov 2022 - March 2024",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
  ];

  const handleToggle = (id) => {
    setActiveCompany((prev) => (prev === id ? null : id));
  };
  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1RLo95eHD2JB_nOL7lvLZZdzox9OOxz1P/view?usp=drive_link")

  };
  return (
    <div className="mt-10">
      <div className="text-2xl font-bold text-neutral-300 mb-6">Experience</div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp) => (
          <li key={exp.id} className="mb-10 ms-4 cursor-pointer">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.date}
            </time>

            <h3
              onClick={() => handleToggle(exp.id)}
              className="text-lg font-semibold text-white hover:text-pink-500 transition-colors"
            >
              {exp.position} @ {exp.company}
            </h3>

            {activeCompany === exp.id && (
              <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.description}
              </p>
            )}
          </li>
        ))}
      </ol>
      <button onClick={downloadResume} className=  " text-white border-gray-700 hover:border-pink-500 ">View Resume</button>
    </div>
  );
};
