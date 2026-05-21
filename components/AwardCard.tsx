"use client";

import { motion } from "framer-motion";

export interface Award {
  name: string;
  year: string;
  category: string;
  description: string;
}

interface Props {
  award: Award;
  index?: number;
}

function TrophyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 22C11.582 22 8 18.418 8 14V4H24V14C24 18.418 20.418 22 16 22Z" stroke="#C49A6C" strokeWidth="1.5" fill="none"/>
      <path d="M8 7H4C4 7 4 13 8 13" stroke="#C49A6C" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 7H28C28 7 28 13 24 13" stroke="#C49A6C" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 22V27" stroke="#C49A6C" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 27H21" stroke="#C49A6C" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="12" r="2" fill="#C49A6C"/>
    </svg>
  );
}

export default function AwardCard({ award, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="relative group bg-white-soft rounded-lg p-6 border-2 border-brown-warm/30 hover:border-brown-light/60 transition-all duration-300 hover:shadow-xl"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brown-light to-transparent opacity-60" />

      <div className="flex items-start justify-between mb-4">
        <TrophyIcon />
        <span className="font-bold text-3xl text-blue-accent/20 select-none">{award.year}</span>
      </div>

      <div className="mb-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-brown-warm/70">
          {award.category}
        </span>
      </div>

      <h3 className="font-bold text-blue-deep text-base leading-snug mb-2 tracking-wide">
        {award.name}
      </h3>
      <p className="text-blue-mid/70 text-xs leading-relaxed">{award.description}</p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brown-warm/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
