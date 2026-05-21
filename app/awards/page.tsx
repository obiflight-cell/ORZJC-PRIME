"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface TimelineAward {
  year: string;
  awards: { name: string; body: string; category: string }[];
}

const timeline: TimelineAward[] = [
  {
    year: "2024",
    awards: [
      { name: "World Travel Excellence Award", body: "World Travel Alliance", category: "Luxury Curation" },
      { name: "Luxury Journey Gold Seal", body: "International Hospitality Council", category: "Premium Hospitality" },
      { name: "Best Luxury Travel Agency — Europe", body: "Condé Nast Traveller Awards", category: "Regional Excellence" },
    ],
  },
  {
    year: "2023",
    awards: [
      { name: "5-Star Destination Curator", body: "Global Travel Quality Board", category: "Destination Excellence" },
      { name: "Best in Class — Global Travel Summit", body: "Global Travel Summit Jury", category: "Industry Recognition" },
      { name: "Innovation in Luxury Travel", body: "Travel + Leisure Awards", category: "Innovation" },
    ],
  },
  {
    year: "2022",
    awards: [
      { name: "Prestige Hospitality Excellence Award", body: "Luxury Hospitality Magazine", category: "Concierge Service" },
      { name: "International Travel Awards — Gold", body: "ITA Foundation", category: "Overall Excellence" },
    ],
  },
  {
    year: "2021",
    awards: [
      { name: "Emerging Force in Luxury Travel", body: "Harper's Bazaar Travel Awards", category: "Rising Distinction" },
      { name: "Sustainability & Luxury Pioneer", body: "Green Travel Forum", category: "Responsible Luxury" },
    ],
  },
  {
    year: "2020",
    awards: [
      { name: "Outstanding Debut — Luxury Travel Category", body: "World Travel Awards Jury", category: "Debut Recognition" },
    ],
  },
];

const whyWeWin = [
  {
    title: "Unparalleled Curation",
    icon: "✦",
    description:
      "Our destination portfolio is built over years of first-hand research, personal relationships, and a refusal to compromise. Every property, experience, and guide we recommend has been experienced by our own team — often multiple times. We list nothing we would not book ourselves.",
  },
  {
    title: "White-Glove Service",
    icon: "◆",
    description:
      "Our senior concierge team operates 24 hours a day, seven days a week, across every time zone our clients travel in. Each client is assigned a dedicated journey manager who knows their preferences, anticipates their needs, and is reachable by direct line throughout the journey.",
  },
  {
    title: "Transformative Experience",
    icon: "★",
    description:
      "We measure our success not by bookings filled but by lives genuinely changed. Our journeys are designed to deliver moments of real wonder — encounters with cultures, landscapes, and people that shift perspective. That is what earns awards. More importantly, it is what earns trust.",
  },
];

function TrophyLarge() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 40C19.163 40 12 32.837 12 24V8H44V24C44 32.837 36.837 40 28 40Z" stroke="#C49A6C" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M12 13H6C6 13 6 25 12 25" stroke="#C49A6C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 13H50C50 13 50 25 44 25" stroke="#C49A6C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 40V48" stroke="#C49A6C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 48H38" stroke="#C49A6C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="22" r="4" fill="#C49A6C" opacity="0.6"/>
    </svg>
  );
}

function TimelineEntry({ entry, index }: { entry: TimelineAward; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start`}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
        <div
          className="rounded-xl p-6 inline-block w-full max-w-md"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(196,154,108,0.15)",
          }}
        >
          {entry.awards.map((award, i) => (
            <div key={i} className={`${i > 0 ? "mt-4 pt-4 border-t border-white-pure/10" : ""}`}>
              <span className="text-brown-light text-[10px] font-bold tracking-widest uppercase">
                {award.category}
              </span>
              <h4 className="text-white-pure font-bold text-sm mt-0.5 mb-1 leading-snug">{award.name}</h4>
              <p className="text-white-muted/60 text-xs">{award.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline centre */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-16 h-16 rounded-full border-2 border-brown-light flex items-center justify-center font-bold text-brown-light text-sm tracking-wider"
          style={{ background: "rgba(10,22,40,0.9)" }}
        >
          {entry.year}
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-brown-light/40 to-transparent mt-2" />
      </div>

      {/* Empty opposite side spacer */}
      <div className="flex-1" />
    </motion.div>
  );
}

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-blue-deep">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
            alt="Award-winning luxury hotel"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/75 via-blue-deep/60 to-blue-deep" />
          <div className="absolute inset-0 bg-blue-deep/40" />
        </div>

        <div
          className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-brown-light opacity-60" />
            <span className="text-brown-light text-xs font-bold tracking-widest2 uppercase">
              Our Recognition
            </span>
            <span className="w-10 h-px bg-brown-light opacity-60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold uppercase tracking-wide text-white-pure leading-tight"
            style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}
          >
            Award-Winning in{" "}
            <span className="text-brown-light">Every Detail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="text-white-muted mt-5 text-base max-w-2xl mx-auto leading-relaxed"
          >
            Since 2020, ORZJC Prime has been consistently recognised by the world&apos;s most respected travel and hospitality institutions for redefining what luxury travel can be.
          </motion.p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
              2020 — 2024
            </span>
            <h2
              className="font-bold uppercase tracking-wide text-white-pure"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Five Years of{" "}
              <span className="text-brown-light">Excellence</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-10">
            {timeline.map((entry, i) => (
              <TimelineEntry key={entry.year} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section
        className="py-24 px-6 lg:px-10"
        style={{ background: "var(--white-soft)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-warm mb-4">
              By Category
            </span>
            <h2
              className="font-bold uppercase tracking-wide text-blue-deep"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Awards <span className="text-brown-warm">Categories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { category: "Luxury Curation", count: 4, description: "For the quality and depth of our curated destination portfolio, vetted annually by independent assessors." },
              { category: "Concierge & Service", count: 6, description: "Recognising our 24/7 white-glove concierge service and the exceptional NPS scores from our clients." },
              { category: "Sustainability", count: 3, description: "Pioneering responsible luxury — high-impact experiences with the lightest possible ecological footprint." },
              { category: "Innovation", count: 4, description: "For introducing technologies and approaches that redefined expectation in the premium travel sector." },
              { category: "Regional Excellence", count: 5, description: "Best luxury operator across Europe, Asia-Pacific, Africa, and the Americas — as voted by industry peers." },
              { category: "Client Experience", count: 7, description: "The hardest award to win: consistent five-star post-journey ratings from discerning, well-travelled clients." },
            ].map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-blue-deep rounded-xl p-7 border border-brown-warm/20 hover:border-brown-light/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <TrophyLarge />
                  <span className="font-bold text-4xl text-brown-light/20 group-hover:text-brown-light/40 transition-colors">
                    {String(cat.count).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-white-pure text-base tracking-wide mb-2">{cat.category}</h3>
                <p className="text-white-muted/70 text-sm leading-relaxed">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Win */}
      <section className="grain-overlay py-24 px-6 lg:px-10" style={{ background: "var(--blue-mid)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
              Our Philosophy
            </span>
            <h2
              className="font-bold uppercase tracking-wide text-white-pure"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Why We <span className="text-brown-light">Win</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyWeWin.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="glass-card rounded-xl p-8 text-center"
              >
                <div className="text-4xl text-brown-light mb-5 block">{item.icon}</div>
                <h3 className="font-bold text-white-pure text-xl tracking-wide mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-white-muted/80 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom stats bar */}
      <section className="py-14 px-6 lg:px-10 bg-blue-deep border-t border-brown-warm/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "29", label: "Awards Received", suffix: "+" },
              { value: "5", label: "Years of Recognition", suffix: "" },
              { value: "12", label: "Awarding Bodies", suffix: "" },
              { value: "100", label: "Client Satisfaction", suffix: "%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="font-bold text-white-pure" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  <span className="text-brown-light">{stat.value}</span>
                  <span className="text-brown-warm/70 text-2xl">{stat.suffix}</span>
                </div>
                <p className="text-white-muted/60 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
