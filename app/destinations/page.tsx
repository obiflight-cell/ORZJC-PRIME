"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Region = "All" | "Africa" | "Asia" | "Europe" | "Americas" | "Oceania";

interface Destination {
  name: string;
  country: string;
  region: Region;
  image: string;
  description: string;
  tags: string[];
  priceFrom: string;
  height: string;
}

const destinations: Destination[] = [
  {
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    description: "Whitewashed Cycladic villages suspended above the Aegean, volcanic beaches, and sunsets that paint the sky in flame.",
    tags: ["Beach", "Cultural", "Romantic"],
    priceFrom: "$4,200",
    height: "h-80",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description: "Overwater sanctuaries above translucent lagoons. Bioluminescent reefs and absolute silence.",
    tags: ["Beach", "Luxury", "Diving"],
    priceFrom: "$6,800",
    height: "h-96",
  },
  {
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    description: "Centuries of ritual, architecture, and craft distilled into one extraordinary city. Cherry blossom season is life-altering.",
    tags: ["Cultural", "Heritage", "Food"],
    priceFrom: "$3,500",
    height: "h-72",
  },
  {
    name: "Patagonia",
    country: "Argentina & Chile",
    region: "Americas",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    description: "Where granite spires pierce cloud and glaciers calve into silent lakes. The world unfiltered.",
    tags: ["Adventure", "Mountain", "Wildlife"],
    priceFrom: "$5,100",
    height: "h-64",
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80",
    description: "Pastel villages clinging to sunlit cliffs, lemon groves and the scent of the Mediterranean below.",
    tags: ["Beach", "Cultural", "Gastronomy"],
    priceFrom: "$4,900",
    height: "h-96",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    image: "https://images.unsplash.com/photo-1489493512598-d08130f49bea?w=800&q=80",
    description: "Ancient medina, Saharan nights, and a sensory landscape unlike anywhere on earth.",
    tags: ["Cultural", "Heritage", "Desert"],
    priceFrom: "$2,800",
    height: "h-80",
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    region: "Africa",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    description: "The greatest wildlife spectacle on Earth. The Great Migration witnessed from a private camp at the river crossing.",
    tags: ["Safari", "Wildlife", "Adventure"],
    priceFrom: "$7,200",
    height: "h-72",
  },
  {
    name: "Bora Bora",
    country: "French Polynesia",
    region: "Oceania",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    description: "Mount Otemanu rises from a lagoon of impossible blues. Paradise is not an overstatement.",
    tags: ["Beach", "Luxury", "Romantic"],
    priceFrom: "$8,400",
    height: "h-96",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    region: "Americas",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    description: "The Inca citadel at dawn, cloud-wreathed and empty of crowds — a private spiritual encounter with history.",
    tags: ["Heritage", "Adventure", "Mountain"],
    priceFrom: "$4,600",
    height: "h-80",
  },
  {
    name: "Norwegian Fjords",
    country: "Norway",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    description: "Dramatic glacial valleys plunging into mirror-still waters. Northern Lights from a private glass-roofed cabin.",
    tags: ["Adventure", "Nature", "Northern Lights"],
    priceFrom: "$5,600",
    height: "h-64",
  },
  {
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Rice terraces, temple ceremonies, and a spiritual landscape that grounds even the most restless traveller.",
    tags: ["Cultural", "Wellness", "Beach"],
    priceFrom: "$3,100",
    height: "h-72",
  },
  {
    name: "Queenstown",
    country: "New Zealand",
    region: "Oceania",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    description: "Lake Wakatipu and the Remarkables — a landscape so theatrical it feels curated by nature itself.",
    tags: ["Adventure", "Mountain", "Nature"],
    priceFrom: "$4,800",
    height: "h-80",
  },
];

const regions: Region[] = ["All", "Africa", "Asia", "Europe", "Americas", "Oceania"];

export default function DestinationsPage() {
  const [activeRegion, setActiveRegion] = useState<Region>("All");

  const filtered =
    activeRegion === "All"
      ? destinations
      : destinations.filter((d) => d.region === activeRegion);

  return (
    <div className="min-h-screen bg-blue-deep">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="World map destinations"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/60 via-blue-deep/50 to-blue-deep" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
              Our Complete Collection
            </span>
            <h1
              className="font-bold uppercase tracking-wide text-white-pure leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              The World,{" "}
              <span className="text-brown-light">Curated</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-blue-deep/95 backdrop-blur-md border-b border-brown-warm/20 py-4 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-white-muted/50 text-xs font-semibold tracking-widest uppercase shrink-0 mr-2">
              Filter:
            </span>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full border transition-all duration-250 shrink-0 ${
                  activeRegion === region
                    ? "bg-brown-warm border-brown-warm text-white-pure"
                    : "border-white-muted/20 text-white-muted hover:border-brown-light/40 hover:text-brown-light"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid — Masonry-style */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
            >
              {filtered.map((dest, i) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
                  style={{ aspectRatio: i % 3 === 1 ? "3/4" : "4/5" }}
                >
                  {/* Image */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/20 to-transparent" />
                  </div>

                  {/* Brown border glow on hover */}
                  <div className="absolute inset-0 z-[1] rounded-xl border-2 border-transparent group-hover:border-brown-light/40 transition-all duration-400" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {dest.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded bg-brown-warm/30 text-brown-light border border-brown-warm/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white-pure font-bold text-xl tracking-wide">{dest.name}</h3>
                    <p className="text-white-muted/80 text-sm mb-1">{dest.country}</p>
                    <p className="text-brown-light text-xs font-semibold">From {dest.priceFrom} / person</p>
                  </div>

                  {/* Hover detail */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="rounded-lg p-4 mb-4"
                      style={{
                        background: "rgba(10,22,40,0.88)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(196,154,108,0.2)",
                      }}
                    >
                      <p className="text-white-muted text-sm leading-relaxed mb-3">{dest.description}</p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-brown-light font-semibold text-sm tracking-wider uppercase hover:text-white-pure transition-colors"
                      >
                        Plan This Journey →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white-muted/50">
              No destinations in this region yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 px-6 lg:px-10 text-center"
        style={{ background: "var(--white-soft)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="font-bold uppercase tracking-wide text-blue-deep mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
          >
            Don&apos;t See Your Dream?
          </h2>
          <p className="text-blue-mid/70 mb-8 leading-relaxed">
            Our curators have access to destinations far beyond this list. If you have a vision, we have the connections to make it real.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-deep text-white-pure font-semibold tracking-wider uppercase text-sm rounded hover:bg-blue-mid transition-all duration-300"
          >
            Speak to a Curator
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
