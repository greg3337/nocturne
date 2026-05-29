"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    initials: "EB",
    name: "Élise Beaumont",
    title: "Directrice Artistique",
    date: "Décembre 2024",
    rating: 5,
    text: "Une expérience qui transcende la simple notion de repas. Chaque assiette est une œuvre d'art que l'on hésite à déguster. Le filet Rossini reste gravé dans ma mémoire comme l'une des plus grandes émotions gastronomiques de ma vie.",
  },
  {
    initials: "TV",
    name: "Thomas Verlaine",
    title: "Critique Gastronomique",
    date: "Novembre 2024",
    rating: 5,
    text: "Dans un Paris saturé d'adresses qui se prétendent gastronomiques, Nocturne fait figure d'exception absolue. Le service est d'une discrétion parfaite, le cadre d'une élégance rare, et la cuisine d'une précision qui touche au sublime.",
  },
  {
    initials: "SM",
    name: "Sophia Marchand",
    title: "Architecte",
    date: "Octobre 2024",
    rating: 5,
    text: "Nous y avons célébré notre anniversaire. Le chef nous a préparé un menu surprise entièrement personnalisé. Des larmes aux yeux au moment du dessert — cette sphère au chocolat obsidienne est une expérience mystique.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} étoiles`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill="#C9A84C">
          <polygon points="5.5,0 6.7,3.8 10.7,3.8 7.5,6.1 8.7,9.9 5.5,7.6 2.3,9.9 3.5,6.1 0.3,3.8 4.3,3.8" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="avis" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,168,76,0.025),transparent)]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-raleway text-[10px] tracking-[0.48em] uppercase text-gold/58 mb-4">
            Témoignages
          </p>
          <h2 className="font-cormorant font-light text-[clamp(3.5rem,7vw,5.5rem)] text-cream tracking-[0.12em] mb-6">
            Avis
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/48" />
            <span className="text-gold/55 text-base leading-none">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/48" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative bg-obsidian border border-gold/10 p-8 group hover:border-gold/22 transition-colors duration-500"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div
                className="font-cormorant text-[5rem] text-gold/12 leading-none mb-3 select-none group-hover:text-gold/20 transition-colors duration-300"
                aria-hidden
              >
                &ldquo;
              </div>

              <Stars count={r.rating} />

              <p className="font-cormorant italic text-[1.08rem] text-cream/65 leading-relaxed my-5">
                {r.text}
              </p>

              <div className="border-t border-gold/[0.1] pt-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-raised border border-gold/18 flex items-center justify-center font-cormorant text-sm text-gold flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="font-raleway text-[12.5px] text-cream/75 font-medium leading-snug">
                    {r.name}
                  </p>
                  <p className="font-raleway text-[9px] tracking-wider uppercase text-cream/32 mt-0.5">
                    {r.title} · {r.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Score */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-16 text-center"
        >
          <p className="font-cormorant text-5xl text-gold mb-2 leading-none">5.0</p>
          <div className="flex justify-center mb-3">
            <Stars count={5} />
          </div>
          <p className="font-raleway text-[9px] tracking-[0.32em] uppercase text-cream/28">
            Noté par 847 clients · Google Reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
