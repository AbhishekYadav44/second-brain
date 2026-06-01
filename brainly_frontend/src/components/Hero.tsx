import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-1">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm bg-zinc-200 flex items-center rounded-full px-5 py-2 gap-3 border border-zinc-300 hover:bg-zinc-300 cursor-pointer"
      >
        <span>Your External Brain For The Internet</span>

        <svg width="18" height="18" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-6xl md:text-7xl font-serif leading-[1.05] tracking-tight max-w-5xl mt-8"
      >
        Remember Everything
        <br />
        You Discover Online.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-zinc-700 text-lg max-w-2xl mt-6"
      >
        Save YouTube videos, tweets, articles, notes and resources in one
        place. Organize your knowledge and instantly find anything with
        AI-powered search.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        
        className="mt-10"
      >
        <button className="bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300">
          Get Started Free
        </button>
      </motion.div>
    </section>
  );
}