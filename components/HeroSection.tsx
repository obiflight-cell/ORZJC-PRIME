"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const headline1 = "WHERE THE WORLD".split(" ");
const headline2 = "BECOMES YOUR STAGE".split(" ");

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Dramatic aerial mountain landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/80 via-blue-deep/50 to-blue-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/60 via-transparent to-blue-deep/30" />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Pre-headline label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-brown-light opacity-70" />
          <span className="text-brown-light text-xs font-semibold tracking-widest2 uppercase">
            Award-Winning Luxury Travel
          </span>
          <span className="w-12 h-px bg-brown-light opacity-70" />
        </motion.div>

        {/* Main Headline */}
        <h1 className="font-bold uppercase leading-none mb-6" style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}>
          <div className="flex flex-wrap justify-center gap-x-6 mb-2">
            {headline1.map((word, i) => (
              <motion.span
                key={word + i}
                custom={i}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                className="text-white-pure tracking-wide inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6">
            {headline2.map((word, i) => (
              <motion.span
                key={word + i}
                custom={i + headline1.length}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                className={word === "STAGE" ? "text-brown-light" : "text-white-pure"}
                style={{ display: "inline-block", letterSpacing: "0.02em" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white-muted text-lg md:text-xl font-normal max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Award-winning luxury journeys, curated for the extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/destinations"
            className="px-8 py-4 bg-blue-accent hover:bg-blue-mid text-white-pure font-semibold tracking-wider uppercase text-sm transition-all duration-300 rounded hover:shadow-lg hover:shadow-blue-accent/30"
          >
            Explore Destinations
          </Link>
          <Link
            href="/awards"
            className="px-8 py-4 border border-brown-warm text-brown-light hover:bg-brown-warm hover:text-white-pure font-semibold tracking-wider uppercase text-sm transition-all duration-300 rounded"
          >
            Our Awards
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator"
      >
        <span className="text-white-muted/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brown-light/60 to-transparent" />
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
        className="absolute bottom-10 right-8 md:right-12 z-10"
      >
        <div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 flex flex-col items-center justify-center text-center p-2"
          style={{
            borderColor: "var(--brown-light)",
            background: "rgba(10,22,40,0.7)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="text-brown-light font-bold text-xs leading-tight tracking-wide">ORZJC</span>
          <span className="text-brown-light font-bold text-xs leading-tight tracking-wide">PRIME</span>
          <div className="w-8 h-px bg-brown-warm/50 my-1" />
          <span className="text-white-muted/70 text-[9px] leading-tight">Est. 2024</span>
          <span className="text-white-muted/70 text-[9px] leading-tight">Award Winners</span>
        </div>
      </motion.div>
    </section>
  );
}
