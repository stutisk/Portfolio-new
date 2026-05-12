import { motion, AnimatePresence } from "framer-motion";
import { useTab } from "../Context/navContext";
import { About } from "./About";
import { Project } from "./Projects";
import { Skills } from "./Skills";
import { Blog } from "./Blog";
import { LetsConnect } from "./LetsConnect";

const tabContent = {
  "About Me": <About />,
  "Projects": <Project />,
  "Skills": <Skills />,
  "Blog": <Blog />,
  "Contact": <LetsConnect />,
};

export const SideNavbar = () => {
  const { activeTab, setActiveTab } = useTab();

  const tabs = [
    { id: "About Me", label: "About Me", icon: "👤" },
    { id: "Projects", label: "Projects", icon: "🚀" },
    { id: "Skills", label: "Skills", icon: "⚡" },
    { id: "Blog", label: "Blog", icon: "📝" },
    { id: "Contact", label: "Contact", icon: "📬" },
  ];

  return (
    <div className="mt-16">
      {/* Tab Navigation - Pill Style */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.05 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25"
                : "bg-neutral-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Content with smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
