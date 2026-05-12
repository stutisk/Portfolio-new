import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const projects = [
  {
    title: "Chrome Extension",
    description:
      "A browser extension that enhances your workflow with custom tools and automation features.",
    tags: ["JavaScript", "Chrome APIs", "CSS"],
    liveLink: "#",
    github: "https://github.com/stutisk/chromeextension",
    videoId: "9cc0653c26a44f4cb0a5371f23547b3a",
    hasVideo: true,
  },
  {
    title: "Formy Valentine",
    description:
      "A creative Valentine's Day themed form builder with customizable templates and shareable Valentine's cards.",
    tags: ["React", "JavaScript", "CSS"],
    liveLink: "https://formyvalentine-bn37-ixgvce6xe-stutisks-projects.vercel.app/",
    github: "https://github.com/stutisk/formyvalentine",
  },
  {
    title: "Galaxia Social Media",
    description:
      "A full-featured social media platform with real-time updates, user profiles, posts, likes, and comments.",
    tags: ["React", "React Router", "Material Ui", "Mockbee","Cloudinary","Redux"],
    liveLink: "https://galaxia.netlify.app/",
    github: "https://github.com/stutisk/galaxiaSocial_Media",
  },
  {
    title: "Video Library",
    description:
      "A video library application for browsing, searching, and managing your favorite videos with a sleek interface.",
    tags: ["React", "React Router", "Tailwind", "Mockbee","Cloudinary"],
    liveLink: "https://galaxiagana.netlify.app/",
    github: "https://github.com/stutisk/video-library",
  },
];

const VideoModal = ({ videoId, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-neutral-900 border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-neutral-800/80 rounded-full text-gray-400 hover:text-white hover:bg-neutral-700 transition-all"
              aria-label="Close modal"
            >
              <IoClose className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.loom.com/embed/${videoId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Project = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideoModal = (videoId) => {
    setActiveVideo(videoId);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-gray-400"
        >
          Things I've built
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300"
          >
            {/* Gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.hasVideo && (
                    <span className="text-xs text-pink-400">Demo Available</span>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Video Preview Thumbnail */}
              {project.hasVideo && (
                <motion.div
                  onClick={() => openVideoModal(project.videoId)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mb-4 rounded-xl overflow-hidden cursor-pointer group/video"
                >
                  <img
                    src={`https://cdn.loom.com/sessions/thumbnails/${project.videoId}-with-play.gif`}
                    alt="Video preview"
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="hidden w-full h-32 bg-neutral-800 items-center justify-center"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-pink-500/20 rounded-full">
                        <FaPlay className="w-6 h-6 text-pink-400" />
                      </div>
                      <span className="text-sm text-gray-400">Watch Demo</span>
                    </div>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/video:opacity-100 transition-opacity">
                    <div className="p-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/30">
                      <FaPlay className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.12 + i * 0.05 }}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-800">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-neutral-800"
                  aria-label="View on GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
                {project.liveLink !== "#" && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors px-3 py-2 rounded-lg hover:bg-neutral-800"
                    aria-label="View live"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live</span>
                  </motion.a>
                )}
                {project.hasVideo && (
                  <motion.button
                    onClick={() => openVideoModal(project.videoId)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors px-3 py-2 rounded-lg hover:bg-neutral-800"
                    aria-label="Watch video"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span>Video</span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        videoId={activeVideo}
        isOpen={!!activeVideo}
        onClose={closeVideoModal}
      />
    </div>
  );
};
