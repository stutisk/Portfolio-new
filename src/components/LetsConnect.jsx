import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mojpvevg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const socials = [
    { icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/stutisk", label: "GitHub" },
    { icon: <FaXTwitter className="w-6 h-6" />, href: "https://x.com/StutiKumari13", label: "X" },
    { icon: <FaLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/stuti-kumari-8b03a9193/", label: "LinkedIn" },
    { icon: <MdEmail className="w-6 h-6" />, href: "mailto:stuti1720@gmail.com", label: "Email" },
  ];

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-gray-400"
        >
          Have a project in mind? Let's talk!
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        className="space-y-5"
      >
        <motion.div custom={0} variants={inputVariants}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            whileFocus={{ scale: 1.01, borderColor: "rgba(236, 72, 153, 0.5)" }}
            className="w-full px-5 py-4 bg-neutral-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
            required
          />
        </motion.div>
        <motion.div custom={1} variants={inputVariants}>
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            whileFocus={{ scale: 1.01, borderColor: "rgba(236, 72, 153, 0.5)" }}
            className="w-full px-5 py-4 bg-neutral-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
            required
          />
        </motion.div>
        <motion.div custom={2} variants={inputVariants}>
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            whileFocus={{ scale: 1.01, borderColor: "rgba(236, 72, 153, 0.5)" }}
            rows={4}
            className="w-full px-5 py-4 bg-neutral-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          custom={3}
          variants={inputVariants}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "sending"}
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            status === "sent"
              ? "bg-green-500 text-white"
              : status === "error"
              ? "bg-red-500 text-white"
              : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-400 hover:to-purple-400 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
          }`}
        >
          <AnimatePresence mode="wait">
            {status === "sending" ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="animate-pulse"
              >
                Sending...
              </motion.span>
            ) : status === "sent" ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                Message Sent!
              </motion.span>
            ) : status === "error" ? (
              <motion.span
                key="error"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                Failed to send
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                Send Message <FaPaperPlane />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <p className="text-center text-gray-500 mb-6">Or find me on</p>
        <div className="flex justify-center gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neutral-900/80 border border-gray-800 rounded-xl text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
