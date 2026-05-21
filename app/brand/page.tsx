"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1v9M5 7l3 3 3-3M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function downloadSVG() {
  const link = document.createElement("a");
  link.href = "/orzjc-logo.svg";
  link.download = "orzjc-prime-logo.svg";
  link.click();
}

function downloadPNG(size: number) {
  const img = new window.Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, size, size);
    const link = document.createElement("a");
    link.download = `orzjc-prime-logo-${size}x${size}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  img.crossOrigin = "anonymous";
  img.src = "/orzjc-logo.svg";
}

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-blue-deep pt-28 pb-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="block text-xs font-bold tracking-widest2 uppercase text-brown-light mb-4">
            Brand Assets
          </span>
          <h1
            className="font-bold uppercase tracking-wide text-white-pure leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Logo &amp; <span className="text-brown-light">Identity</span>
          </h1>
          <p className="text-white-muted mt-4 max-w-lg text-sm leading-relaxed">
            Official ORZJC Prime logo files for use across digital and print media.
          </p>
        </motion.div>

        {/* Logo preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Dark background preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-xl p-10 flex flex-col items-center gap-6 border border-brown-warm/20"
            style={{ background: "var(--blue-deep)" }}
          >
            <Image
              src="/orzjc-logo.svg"
              alt="ORZJC Prime Logo"
              width={200}
              height={200}
              className="rounded-full"
            />
            <span className="text-white-muted/50 text-xs tracking-widest uppercase">Dark background</span>
          </motion.div>

          {/* Light background preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="rounded-xl p-10 flex flex-col items-center gap-6 border border-white-muted/20"
            style={{ background: "var(--white-soft)" }}
          >
            <Image
              src="/orzjc-logo.svg"
              alt="ORZJC Prime Logo"
              width={200}
              height={200}
              className="rounded-full shadow-xl"
            />
            <span className="text-blue-mid/50 text-xs tracking-widest uppercase">Light background</span>
          </motion.div>
        </div>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="rounded-xl border border-brown-warm/20 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="px-7 py-5 border-b border-brown-warm/20">
            <h2 className="text-white-pure font-bold text-sm tracking-widest uppercase">Download Files</h2>
          </div>

          <div className="divide-y divide-brown-warm/10">

            {/* SVG */}
            <div className="flex items-center justify-between px-7 py-5">
              <div>
                <p className="text-white-pure font-semibold text-sm">SVG — Vector</p>
                <p className="text-white-muted/50 text-xs mt-0.5">Scalable, lossless — best for web &amp; print</p>
              </div>
              <button
                onClick={downloadSVG}
                className="flex items-center gap-2 px-5 py-2.5 bg-brown-warm hover:bg-brown-light text-white-pure font-semibold text-xs tracking-widest uppercase rounded transition-all duration-200"
              >
                <DownloadIcon />
                SVG
              </button>
            </div>

            {/* PNG 512 */}
            <div className="flex items-center justify-between px-7 py-5">
              <div>
                <p className="text-white-pure font-semibold text-sm">PNG — 512 × 512</p>
                <p className="text-white-muted/50 text-xs mt-0.5">Profile picture, social media avatar</p>
              </div>
              <button
                onClick={() => downloadPNG(512)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-accent hover:bg-blue-mid text-white-pure font-semibold text-xs tracking-widest uppercase rounded transition-all duration-200"
              >
                <DownloadIcon />
                512px
              </button>
            </div>

            {/* PNG 1024 */}
            <div className="flex items-center justify-between px-7 py-5">
              <div>
                <p className="text-white-pure font-semibold text-sm">PNG — 1024 × 1024</p>
                <p className="text-white-muted/50 text-xs mt-0.5">High-res print, presentations</p>
              </div>
              <button
                onClick={() => downloadPNG(1024)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-accent hover:bg-blue-mid text-white-pure font-semibold text-xs tracking-widest uppercase rounded transition-all duration-200"
              >
                <DownloadIcon />
                1024px
              </button>
            </div>

            {/* PNG 256 */}
            <div className="flex items-center justify-between px-7 py-5">
              <div>
                <p className="text-white-pure font-semibold text-sm">PNG — 256 × 256</p>
                <p className="text-white-muted/50 text-xs mt-0.5">Favicon, app icon, small placements</p>
              </div>
              <button
                onClick={() => downloadPNG(256)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-accent hover:bg-blue-mid text-white-pure font-semibold text-xs tracking-widest uppercase rounded transition-all duration-200"
              >
                <DownloadIcon />
                256px
              </button>
            </div>
          </div>
        </motion.div>

        {/* Colour palette reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 rounded-xl border border-brown-warm/20 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="px-7 py-5 border-b border-brown-warm/20">
            <h2 className="text-white-pure font-bold text-sm tracking-widest uppercase">Brand Colours</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-brown-warm/10">
            {[
              { name: "Navy", hex: "#0A1628", bg: "#0A1628", light: true },
              { name: "Cobalt", hex: "#1B3A6B", bg: "#1B3A6B", light: true },
              { name: "Gold", hex: "#C49A6C", bg: "#C49A6C", light: false },
              { name: "Cognac", hex: "#8B5E3C", bg: "#8B5E3C", light: true },
            ].map((c) => (
              <div key={c.name} className="flex flex-col">
                <div className="h-16 w-full" style={{ background: c.bg }} />
                <div className="px-4 py-3">
                  <p className="text-white-pure font-semibold text-xs">{c.name}</p>
                  <p className="text-white-muted/50 text-xs font-mono mt-0.5">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
