import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "This Is Not What You Think It Is",
    excerpt:
      "Exploring the hidden layers behind common assumptions and diving deep into what really goes on under the surface.",
    url: "https://open.substack.com/pub/stuti1720/p/this-is-not-what-you-think-it-is?r=3pcwhm&utm_campaign=post&utm_medium=web",
    date: "New",
  },
];

export const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Blog
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-gray-400"
        >
          Thoughts, tutorials, and insights
        </motion.p>
      </div>

      <div className="grid gap-6">
        {blogs.map((blog, index) => (
          <motion.a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="block bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/10 rounded-xl">
                <FaMedium className="w-6 h-6 text-pink-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{blog.excerpt}</p>
                <div className="mt-4 text-pink-400 text-sm font-medium flex items-center gap-2">
                  Read more
                  <span>→</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
