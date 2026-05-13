import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SideNavbar } from "./SideNavbar";
import { socialLinks } from "../constants/navitems";
import { FaPlay } from "react-icons/fa";

export const Home = () => {
  const roles = ["Frontend Developer","Exploring Backend", "UI Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 300], [0, 30]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        if (displayedRole === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        if (displayedRole === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="mt-24 mb-10">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.p
            variants={itemVariants}
            className="text-pink-400 font-medium mb-2 tracking-wide"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Stuti 
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="h-8 overflow-hidden"
          >
            <motion.span
              key={displayedRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="text-2xl text-gray-400 font-light"
            >
              {displayedRole}
              <span className="inline-block w-[3px] h-6 bg-pink-400 ml-1 animate-pulse" />
            </motion.span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I transform ideas into intuitive and engaging web experiences.
            Passionate about clean code, beautiful interfaces, and continuous learning.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mt-8 justify-center md:justify-start"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-2"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ y: avatarY }}
          className="flex justify-center"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl opacity-40"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1752225324/drgxmgwd2hwdhdpddpgc.jpg"
                alt="Stuti Kumari"
                className="w-64 h-72 object-cover border-2 border-gray-800"
                whileHover={{ borderColor: "rgba(236, 72, 153, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-neutral-900 border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-neutral-800/80 rounded-full text-gray-400 hover:text-white hover:bg-neutral-700 transition-all"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video">
                <iframe
                  src="https://www.loom.com/embed/8adbad177161430d88a754b55e09446c?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Tabs */}
      <SideNavbar />
    </div>
  );
};
