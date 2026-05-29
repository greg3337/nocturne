"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const panels = [
  {
    number: "01",
    subtitle: "Une scène réservée",
    title: "L'Intimité",
    body: "Trente-deux couverts seulement. Chaque table est un théâtre privé où le service disparaît pour mieux réapparaître. Le temps suspend son cours, et la nuit appartient à ceux qui savent l'apprécier.",
  },
  {
    number: "02",
    subtitle: "La matière première",
    title: "L'Excellence",
    body: "Chaque ingrédient est choisi pour ce qu'il raconte. La Saint-Jacques pêchée à la tombée du jour, la truffe cueillie avant l'aube, le bœuf élevé dans le silence des prairies normandes.",
  },
  {
    number: "03",
    subtitle: "L'art de la nuit",
    title: "Le Mystère",
    body: "Nocturne s'invente chaque soir. La carte change avec les saisons, avec l'humeur du chef, avec les rêves que l'on décide de servir. Revenez — ce ne sera jamais tout à fait le même restaurant.",
  },
];

export default function Ambiance() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ambiance" className="relative py-32 bg-obsidian overflow-hidden">
      {/* Vertical decorative lines */}
      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      <div className="absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <p className="font-raleway text-[10px] tracking-[0.48em] uppercase text-gold/58 mb-4">
            L&apos;Expérience
          </p>
          <h2 className="font-cormorant font-light text-[clamp(3.5rem,7vw,5.5rem)] text-cream tracking-[0.12em] mb-6">
            Ambiance
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/48" />
            <span className="text-gold/55 text-base leading-none">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/48" />
          </div>
        </motion.div>

        {/* Panels */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/8">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.16, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative bg-obsidian px-8 py-12 group hover:bg-surface transition-colors duration-500 cursor-default"
            >
              {/* Ghost number */}
              <span
                className="font-cormorant font-light leading-none text-gold/[0.055] absolute top-6 right-6 select-none group-hover:text-gold/[0.1] transition-colors duration-500"
                style={{ fontSize: "5.5rem" }}
              >
                {panel.number}
              </span>

              {/* Top accent line on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="relative z-10">
                <p className="font-raleway text-[9px] tracking-[0.42em] uppercase text-gold/48 mb-5">
                  {panel.subtitle}
                </p>
                <h3 className="font-cormorant text-[2.2rem] text-cream mb-5 group-hover:text-gold/90 transition-colors duration-300 leading-tight">
                  {panel.title}
                </h3>
                <div className="h-px w-10 bg-gold/38 mb-6 group-hover:w-16 transition-all duration-500" />
                <p className="font-raleway text-[11.5px] text-cream/42 leading-relaxed tracking-wide">
                  {panel.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.65 }}
          className="mt-24 text-center"
        >
          <p className="font-cormorant italic text-[1.6rem] md:text-[1.9rem] text-cream/35 leading-relaxed max-w-2xl mx-auto">
            &ldquo;La gastronomie est l&apos;art de se nourrir du beau autant que du bon.&rdquo;
          </p>
          <footer className="mt-5 font-raleway text-[9px] tracking-[0.35em] uppercase text-gold/38">
            — Jean-Michel Cartier, Chef Exécutif
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
