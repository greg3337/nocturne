"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js";
import "flatpickr/dist/themes/dark.css";

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, delay: i * 0.16, ease: EASE },
  }),
};

export default function Hero() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!dateInputRef.current) return;
    const fp = flatpickr(dateInputRef.current, {
      locale: French,
      dateFormat: "d/m/Y",
      disableMobile: true,
      minDate: "today",
      onChange: (_dates: Date[], dateStr: string) => setDate(dateStr),
    });
    return () => {
      if (Array.isArray(fp)) fp.forEach((f) => f.destroy());
      else fp.destroy();
    };
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layers */}
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,rgba(201,168,76,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(201,168,76,0.025),transparent)]" />

      {/* Fine gold grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-[5.5rem] left-10 w-12 h-12 border-l border-t border-gold/20" />
      <div className="absolute top-[5.5rem] right-10 w-12 h-12 border-r border-t border-gold/20" />
      <div className="absolute bottom-20 left-10 w-12 h-12 border-l border-b border-gold/20" />
      <div className="absolute bottom-20 right-10 w-12 h-12 border-r border-b border-gold/20" />

      {/* Vertical side text */}
      <p
        className="hidden lg:block absolute left-9 top-1/2 -translate-y-1/2 font-raleway text-[9px] tracking-[0.5em] uppercase text-gold/25 select-none"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        Ouvert du Mardi au Samedi
      </p>
      <p
        className="hidden lg:block absolute right-9 top-1/2 -translate-y-1/2 font-raleway text-[9px] tracking-[0.5em] uppercase text-gold/25 select-none"
        style={{ writingMode: "vertical-rl" }}
      >
        19h30 — 23h30
      </p>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-raleway text-[10px] tracking-[0.48em] uppercase text-gold/65 mb-10"
        >
          Paris · Depuis 1998
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full flex justify-center mb-6"
        >
          <span className="font-cormorant font-light leading-none text-cream text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] tracking-[0.05em] sm:tracking-[0.18em]">
            NOCTURNE
          </span>
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center gap-5 mb-8"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold/45 to-gold/45" />
          <svg className="text-gold/65 flex-shrink-0" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <polygon points="6.5,0 7.8,5 13,6.5 7.8,8 6.5,13 5.2,8 0,6.5 5.2,5" />
          </svg>
          <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold/45 to-gold/45" />
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-cormorant italic text-xl md:text-2xl text-cream/50 mb-16 tracking-wide"
        >
          L&apos;obscurité révèle ce que la lumière dissimule
        </motion.p>

        {/* Reservation widget */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-stretch max-w-lg mx-auto border border-gold/22 overflow-hidden"
        >
          <input
            ref={dateInputRef}
            type="text"
            placeholder="JJ/MM/AAAA"
            defaultValue={date}
            readOnly
            className="flex-1 bg-obsidian/85 px-5 py-4 font-raleway text-xs tracking-wider text-cream outline-none border-b sm:border-b-0 sm:border-r border-gold/18 backdrop-blur-sm cursor-pointer"
          />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="bg-obsidian/85 px-5 py-4 font-raleway text-xs tracking-wider text-cream outline-none border-b sm:border-b-0 sm:border-r border-gold/18 cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="bg-charcoal text-cream">
                {n} {n === 1 ? "couvert" : "couverts"}
              </option>
            ))}
          </select>
          <button className="px-8 py-4 bg-gold text-obsidian font-raleway text-[10px] tracking-[0.26em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300 whitespace-nowrap">
            Réserver
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-raleway text-[9px] tracking-[0.38em] uppercase text-gold/32">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold/38 to-transparent"
        />
      </motion.div>
    </section>
  );
}
