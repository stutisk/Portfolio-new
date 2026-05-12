import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";

export const About = () => {
  const experiences = [
    {
      id: "openSource",
      company: "Team Shiksha",
      position: "Open Source Contributor",
      date: "June 2025 - Present",
      isCurrent: true,
      description:
        "Building accessible components for education platforms. Implemented OAuth authentication and integrated APIs for seamless user login. Revamped dashboard pages to improve UI/UX. Developed a mock interview module for booking and managing sessions. Created Admin and user dashboards to help new members onboard quickly.",
      skills: ["React", "TypeScript", "OAuth", "UI/UX"],
    },
    {
      id: "tap",
      company: "Tap Invest",
      position: "Frontend Engineer",
      date: "Apr 2024 - Nov 2024",
      description:
        "Built a self-service partner onboarding system, eliminating manual processes. Developed a frontend-driven multi-deal pool management system, removing backend dependencies and boosting operational efficiency by 35%. Built a secure blank cheque management system, cutting fraud risk by 30% and safeguarding over 500,000 in transactions. Launched a dynamic Leaderboard for referral challenges, increasing user engagement by 50%.",
      skills: ["React", "TypeScript", "Dashboard", "OAuth"],
    },
    {
      id: "gamerji",
      company: "Gamerji",
      position: "Frontend Engineer",
      date: "Nov 2022 - Feb 2024",
      description:
        "Developed ad features for Vodafone mobile app using React-based components, contributing to 15% increase in engagement and ad revenue. Integrated 50+ backend APIs. Delivered core features including Scrim Tournaments and User Profiles, boosting user retention. Managed projects using Jira, communication via Slack, and version control with Bitbucket.",
      skills: ["React", "JavaScript", "Jira", "Bitbucket"],
    },
  ];

  const viewResume = () => {
    window.open("https://drive.google.com/file/d/1wDZPPW30t0rD6ugPHflcwGVUr4I5_g2A/view?usp=sharing", "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Experience
        </h2>
        <p className="text-gray-400">My professional journey</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-gray-700 transform md:-translate-x-1/2" />

        {/* Experience Items */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                  className={`w-3 h-3 rounded-full ${
                    exp.isCurrent
                      ? "bg-pink-500 shadow-lg shadow-pink-500/50"
                      : "bg-neutral-700 border-2 border-gray-600"
                  }`}
                />
              </div>

              {/* Content Card */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300"
                >
                  {/* Date Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      {exp.date}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Company & Position */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-neutral-800 rounded-lg">
                      <FaBriefcase className="w-4 h-4 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.position}
                      </h3>
                      <p className="text-pink-400 text-sm font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <motion.button
          onClick={viewResume}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-pink-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 flex items-center gap-3 mx-auto"
        >
          View Resume
          <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
};
