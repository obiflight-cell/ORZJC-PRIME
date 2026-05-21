"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export interface Experience {
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
}

interface Props {
  experience: Experience;
  reversed?: boolean;
  index?: number;
}

export default function ExperienceBlock({ experience, reversed = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center py-16 lg:py-20 border-b border-white-pure/5 last:border-0`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2 relative rounded-xl overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={experience.image}
          alt={experience.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-deep/30 to-transparent" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2 relative"
      >
        {/* Big faded number */}
        <div
          className="absolute -top-6 -left-4 font-bold select-none pointer-events-none leading-none"
          style={{
            fontSize: "clamp(5rem, 12vw, 11rem)",
            color: "rgba(46, 109, 180, 0.08)",
            zIndex: 0,
          }}
        >
          {experience.number}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-brown-light font-bold text-sm tracking-widest uppercase">
              {experience.number}
            </span>
            <span className="flex-1 h-px bg-brown-warm/30" />
          </div>

          <h3
            className="font-bold uppercase tracking-wide text-white-pure mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            {experience.title}
          </h3>

          <p className="text-white-muted leading-relaxed mb-5 text-base">{experience.description}</p>
          <p className="text-white-muted/60 leading-relaxed text-sm">{experience.detail}</p>

          <div className="mt-8 flex items-center gap-3">
            <button className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-brown-light border border-brown-warm/50 rounded hover:bg-brown-warm hover:text-white-pure transition-all duration-300">
              Discover More
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
