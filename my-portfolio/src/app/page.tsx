"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      {/* Profile Image with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Grace Boke"
          width={150}
          height={150}
          className="rounded-full shadow-lg mb-6"
        />
        Grace Boke
      </motion.div>

      {/* Welcome Message with Slide-in Effect */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
      Welcome to My Portfolio
      </motion.h1>

      {/* Description with Fade-in Effect */}
      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explore my projects, skills, and professional journey.
      </motion.p>

      {/* Buttons with Bounce Effect */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link href="/projects">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
