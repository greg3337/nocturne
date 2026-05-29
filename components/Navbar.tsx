"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#ambiance", label: "Ambiance" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/96 backdrop-blur-md border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#accueil"
            className="font-cormorant font-light text-2xl tracking-[0.28em] text-cream hover:text-gold transition-colors duration-300"
          >
            NOCTURNE
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative font-raleway text-[11px] tracking-[0.28em] uppercase text-cream/55 hover:text-gold transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:block font-raleway text-[10px] tracking-[0.22em] uppercase px-6 py-2.5 border border-gold/35 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Réserver
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-cream/80 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-4 bg-cream/80 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px w-6 bg-cream/80 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center gap-1"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="font-cormorant font-light text-[2.8rem] tracking-[0.12em] text-cream hover:text-gold transition-colors duration-300 py-3"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-6 font-raleway text-[10px] tracking-[0.3em] uppercase px-8 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
            >
              Réserver une Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
