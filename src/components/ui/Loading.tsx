"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Staggers the animation of child elements by 0.3 seconds each
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SceneAnimation = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center h-screen animate-spin"
  >
    <motion.div
      className="w-24 h-24 bg-slate-500 rounded-full p-1 m-2"
      variants={itemVariants}
    />
    <motion.div
      className="w-24 h-24 bg-rose-500 rounded-full p-1 m-2"
      variants={itemVariants}
    />
    <motion.div
      className="w-24 h-24 bg-slate-500 rounded-full p-1 m-2"
      variants={itemVariants}
    />
  </motion.div>
);

export default SceneAnimation;
