"use client";

import { motion } from "framer-motion";

export interface Testimonial {
  quote: string;
  author: string;
  destination: string;
  rating: number;
}

interface Props {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
      className="glass-card rounded-xl p-7 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-brown-light text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white-muted leading-relaxed text-sm italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-auto pt-4 border-t border-white-pure/10">
        <p className="text-white-pure font-semibold text-sm tracking-wide">{testimonial.author}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-4 h-px bg-brown-light" />
          <p className="text-brown-light text-xs tracking-wider uppercase">{testimonial.destination}</p>
        </div>
      </div>
    </motion.div>
  );
}
