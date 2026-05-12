import { motion } from "framer-motion";
import { FaJs, FaGitAlt, FaFigma, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SiJirasoftware, SiSlack, SiBitbucket } from "react-icons/si";

const skills = [
  // Core
  { name: "JavaScript", icon: <FaJs className="w-8 h-8" />, color: "text-yellow-400", bg: "hover:bg-yellow-500/10" },
  { name: "TypeScript", icon: <BiLogoTypescript className="w-8 h-8" />, color: "text-blue-400", bg: "hover:bg-blue-500/10" },
  { name: "HTML", icon: <FaHtml5 className="w-8 h-8" />, color: "text-orange-400", bg: "hover:bg-orange-500/10" },
  { name: "CSS", icon: <FaCss3 className="w-8 h-8" />, color: "text-blue-400", bg: "hover:bg-blue-500/10" },
  // Frameworks & Libraries
  { name: "React.js", icon: <FaReact className="w-8 h-8" />, color: "text-cyan-400", bg: "hover:bg-cyan-500/10" },
  { name: "Next.js", icon: <TbBrandNextjs className="w-8 h-8" />, color: "text-white", bg: "hover:bg-white/10" },
  { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="w-8 h-8" />, color: "text-sky-400", bg: "hover:bg-sky-500/10" },
  { name: "Redux Toolkit", icon: <TbBrandRedux className="w-8 h-8" />, color: "text-purple-400", bg: "hover:bg-purple-500/10" },
  { name: "Material UI", icon: <FaReact className="w-8 h-8" />, color: "text-blue-300", bg: "hover:bg-blue-300/10" },
  { name: "React Query", icon: <FaReact className="w-8 h-8" />, color: "text-red-400", bg: "hover:bg-red-500/10" },
  { name: "Framer Motion", icon: <motion.span className="text-pink-400 text-2xl font-bold">Fm</motion.span>, color: "text-pink-400", bg: "hover:bg-pink-500/10" },
  // Tools
  { name: "Git/GitHub", icon: <FaGitAlt className="w-8 h-8" />, color: "text-orange-500", bg: "hover:bg-orange-500/10" },
  { name: "Jira", icon: <SiJirasoftware className="w-8 h-8" />, color: "text-blue-500", bg: "hover:bg-blue-500/10" },
  { name: "Slack", icon: <SiSlack className="w-8 h-8" />, color: "text-green-400", bg: "hover:bg-green-500/10" },
  // Design
  { name: "Figma", icon: <FaFigma className="w-8 h-8" />, color: "text-pink-400", bg: "hover:bg-pink-500/10" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-gray-400"
        >
          Technologies I work with
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center gap-3 p-4 rounded-xl bg-neutral-900/80 border border-gray-800 ${skill.bg} transition-all duration-300 cursor-default group`}
          >
            <motion.div
              className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
