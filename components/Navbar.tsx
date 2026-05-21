"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Awards", href: "/awards" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-blue-deep/95 backdrop-blur-md shadow-2xl border-b border-brown-warm/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-poppins font-bold text-2xl text-white-pure tracking-wide">
              ORZJC
            </span>
            <span
              className="font-poppins font-bold text-2xl tracking-widest2 ml-1"
              style={{ color: "var(--brown-light)" }}
            >
              PRIME
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold tracking-wider text-white-muted hover:text-white-pure transition-colors duration-200 group uppercase"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brown-light group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="relative px-6 py-2.5 text-sm font-semibold tracking-wider uppercase text-brown-light border border-brown-warm rounded hover:bg-brown-warm hover:text-white-pure transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Plan Journey</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brown-warm to-brown-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white-pure transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white-pure transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white-pure transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-blue-deep/98 backdrop-blur-md border-t border-brown-warm/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white-muted hover:text-brown-light font-semibold tracking-wider uppercase text-sm py-2 border-b border-white-muted/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-2 text-center px-6 py-3 text-sm font-semibold tracking-wider uppercase text-brown-light border border-brown-warm rounded hover:bg-brown-warm hover:text-white-pure transition-all duration-300"
              >
                Plan Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
