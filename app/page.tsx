"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AwardsTicker from "@/components/AwardsTicker";
import DestinationCard, { Destination } from "@/components/DestinationCard";
import AwardCard, { Award } from "@/components/AwardCard";
import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";
import ExperienceBlock, { Experience } from "@/components/ExperienceBlock";

const destinations: Destination[] = [
  {
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    description: "Sun-bleached whitewashed villages perched above the wine-dark Aegean. Private villas, volcanic beaches, and unforgettable Caldera sunsets.",
    tags: ["Beach", "Cultural"],
    priceFrom: "$4,200 / person",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description: "Overwater bungalows floating above crystal lagoons. Bioluminescent nights, coral reefs teeming with life, and absolute seclusion.",
    tags: ["Beach", "Luxury"],
    priceFrom: "$6,800 / person",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    description: "Ancient temples wrapped in cherry blossoms and maple fire. Tea ceremonies, ryokan hospitality, and the timeless soul of Japan.",
    tags: ["Cultural", "Heritage"],
    priceFrom: "$3,500 / person",
  },
  {
    name: "Patagonia",
    country: "Argentina & Chile",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    description: "Jagged granite towers, turquoise glacial lakes, and vast pampas stretching to the horizon. The world's last true wilderness.",
    tags: ["Adventure", "Mountain"],
    priceFrom: "$5,100 / person",
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80",
    description: "Pastel villages cascading down sun-scorched cliffs to cerulean Mediterranean waters. La dolce vita, elevated to an art form.",
    tags: ["Beach", "Cultural"],
    priceFrom: "$4,900 / person",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1489493512598-d08130f49bea?w=800&q=80",
    description: "A riot of colour, spice, and ancient craft behind ornate riads. Sahara stargazing, hammams, and bazaars that defy time.",
    tags: ["Cultural", "Heritage"],
    priceFrom: "$2,800 / person",
  },
];

const experiences: Experience[] = [
  {
    number: "01",
    title: "Private Island Retreats",
    description: "Exclusive access to secluded island sanctuaries where the only footprints on the sand are yours. Our private island portfolio spans 14 nations across four oceans.",
    detail: "Each retreat includes a dedicated island concierge, private chef, water sports, and 24-hour charter flight coordination. We negotiate direct access to islands not available through any public booking channel.",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80",
    imageAlt: "Luxury private island retreat with crystal clear waters",
  },
  {
    number: "02",
    title: "Cultural Immersion Journeys",
    description: "Move beyond the postcard. Our cultural journeys grant rare access — private museum after-hours, dinners with local artisans, master classes with living heritage masters.",
    detail: "From a private noh theatre performance in Kyoto to a dawn Sufi ceremony in Fez, we curate experiences that connect you to living culture at its most authentic and profound.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80",
    imageAlt: "Cultural immersion journey in ancient temple",
  },
  {
    number: "03",
    title: "Wilderness Expeditions",
    description: "The planet's most remote and magnificent landscapes, approached with intelligence and impact in mind. Expert guides, unparalleled access, zero ecological footprint.",
    detail: "Whether crossing Antarctic sea ice aboard a private vessel or traversing Borneo's interior with indigenous guides, our wilderness expeditions redefine what it means to explore.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    imageAlt: "Dramatic wilderness expedition landscape",
  },
];

const awards: Award[] = [
  {
    name: "World Travel Excellence Award",
    year: "2024",
    category: "Luxury Curation",
    description: "Recognised as the world's foremost luxury travel curator for unparalleled destination expertise and client experience.",
  },
  {
    name: "Luxury Journey Gold Seal",
    year: "2024",
    category: "Premium Hospitality",
    description: "The Gold Seal, awarded to fewer than 12 travel companies globally, for consistent five-star delivery across all touchpoints.",
  },
  {
    name: "5-Star Destination Curator",
    year: "2023",
    category: "Destination Excellence",
    description: "Five consecutive stars in destination curation, client satisfaction, and post-journey NPS scoring across 800+ reviews.",
  },
  {
    name: "Global Travel Summit — Best in Class",
    year: "2023",
    category: "Industry Recognition",
    description: "The summit's most prestigious individual award, voted by a panel of 200 travel industry leaders and journalists.",
  },
  {
    name: "Prestige Hospitality Excellence",
    year: "2022",
    category: "Concierge Service",
    description: "Outstanding concierge and personalisation service, rated highest among all luxury travel companies in Europe and Asia.",
  },
  {
    name: "International Travel Awards — Gold",
    year: "2022",
    category: "Innovation",
    description: "Gold recognition for pioneering the integration of sustainability and luxury in high-end travel programming.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "ORZJC Prime orchestrated something that didn't feel like travel — it felt like living an entirely different, better life for three weeks. Every detail was considered before I could consider it myself.",
    author: "Victoria Ashworth",
    destination: "Maldives & Sri Lanka",
    rating: 5,
  },
  {
    quote: "We've used a dozen luxury travel companies. None come close. The private access they negotiated for our Kyoto journey — a private tea ceremony in a 400-year-old garden — is the kind of thing you simply cannot arrange yourself.",
    author: "James & Eloise Pemberton",
    destination: "Japan — Bespoke Circuit",
    rating: 5,
  },
  {
    quote: "When I said I wanted to see Patagonia 'properly', I didn't know what I meant. They did. I was on a private research vessel, camping at the base of Torres del Paine, and dining under the Milky Way. That's what 'properly' means.",
    author: "Dr. Rahul Mehta",
    destination: "Patagonia Wilderness",
    rating: 5,
  },
];

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Awards Ticker */}
      <AwardsTicker />

      {/* Featured Destinations */}
      <section id="destinations" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
            Hand-Selected by Our Curators
          </span>
          <h2
            className="font-bold uppercase tracking-wide text-white-pure leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Signature{" "}
            <span className="text-brown-light">Destinations</span>
          </h2>
          <p className="text-white-muted mt-4 max-w-xl text-base leading-relaxed">
            Each destination in our collection has been personally vetted, negotiated, and curated — ensuring access and experiences unavailable anywhere else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.name} destination={dest} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 px-8 py-4 border border-brown-warm/50 text-brown-light font-semibold tracking-wider uppercase text-sm rounded hover:bg-brown-warm hover:text-white-pure transition-all duration-300"
          >
            View All Destinations
            <span>→</span>
          </Link>
        </motion.div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="grain-overlay py-20 px-6 lg:px-10"
        style={{ background: "var(--blue-deep)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
              Curated for the Extraordinary
            </span>
            <h2
              className="font-bold uppercase tracking-wide text-white-pure leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              The <span className="text-brown-light">Experiences</span>
            </h2>
          </motion.div>

          {experiences.map((exp, i) => (
            <ExperienceBlock
              key={exp.number}
              experience={exp}
              reversed={i % 2 === 1}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Awards Showcase */}
      <section
        id="about"
        className="py-24 px-6 lg:px-10"
        style={{ background: "var(--white-soft)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-warm mb-4">
              Industry Validation
            </span>
            <h2
              className="font-bold uppercase tracking-wide text-blue-deep leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Recognised{" "}
              <span className="text-brown-warm">Excellence</span>
            </h2>
            <p className="text-blue-mid/70 mt-4 max-w-xl text-base leading-relaxed">
              Our work is measured not just by the journeys we deliver, but by the recognition of those who judge excellence in travel worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <AwardCard key={award.name} award={award} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/awards"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-deep text-white-pure font-semibold tracking-wider uppercase text-sm rounded hover:bg-blue-mid transition-all duration-300"
            >
              View All Awards
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="grain-overlay py-24 px-6 lg:px-10"
        style={{ background: "var(--blue-mid)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 relative"
          >
            <div
              className="absolute -top-8 -left-4 font-bold select-none pointer-events-none"
              style={{ fontSize: "12rem", color: "rgba(196,154,108,0.07)", zIndex: 0, lineHeight: 1 }}
            >
              &ldquo;
            </div>

            <div className="relative z-10">
              <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
                From Our Clients
              </span>
              <h2
                className="font-bold uppercase tracking-wide text-white-pure leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                Those Who Know,{" "}
                <span className="text-brown-light">Know</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        id="contact"
        className="relative py-28 px-6 lg:px-10 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
            alt="Luxury travel destination"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/95 via-blue-deep/80 to-blue-deep/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-6">
              Begin Your Journey
            </span>
            <h2
              className="font-bold uppercase tracking-wide text-white-pure leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Ready for Your{" "}
              <span className="text-brown-light">Prime Journey?</span>
            </h2>
            <p className="text-white-muted text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Share your email and one of our senior journey curators will be in touch within 24 hours to begin crafting your bespoke experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative p-px rounded overflow-hidden shimmer-border">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-blue-deep text-white-pure placeholder-white-muted/40 text-sm font-medium focus:outline-none rounded"
                />
              </div>
              <button className="px-7 py-3.5 bg-brown-warm hover:bg-brown-light text-white-pure font-bold tracking-wider uppercase text-sm rounded transition-all duration-300 whitespace-nowrap">
                Begin
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
