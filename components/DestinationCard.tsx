"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface Destination {
  name: string;
  country: string;
  image: string;
  description: string;
  tags: string[];
  priceFrom?: string;
}

interface Props {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({ destination, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/20 to-transparent" />
      </div>

      {/* Brown border glow on hover */}
      <div
        className="absolute inset-0 z-[1] rounded-lg border-2 border-transparent group-hover:border-brown-light/50 transition-all duration-500"
        style={{
          boxShadow: "0 0 0 0 transparent",
        }}
      />

      {/* Bottom content — always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 transform">
        <div className="flex items-center gap-2 mb-2">
          {destination.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded bg-brown-warm/30 text-brown-light border border-brown-warm/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-white-pure font-bold text-xl tracking-wide mb-0.5">{destination.name}</h3>
        <p className="text-white-muted/80 text-sm">{destination.country}</p>
        {destination.priceFrom && (
          <p className="text-brown-light text-xs font-semibold mt-1">From {destination.priceFrom}</p>
        )}
      </div>

      {/* Hover overlay content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <div
          className="rounded-lg p-4 mb-4"
          style={{
            background: "rgba(10,22,40,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(196,154,108,0.2)",
          }}
        >
          <p className="text-white-muted text-sm leading-relaxed mb-4">{destination.description}</p>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-brown-light font-semibold text-sm tracking-wider uppercase hover:text-white-pure transition-colors"
          >
            Explore
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
