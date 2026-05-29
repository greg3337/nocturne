"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Dish = { name: string; description: string; price: string; tag?: string };
type Category = { title: string; dishes: Dish[] };

const menuData: Category[] = [
  {
    title: "Entrées",
    dishes: [
      {
        name: "Tartare de Saint-Jacques",
        description: "Noix de Saint-Jacques de Bretagne, caviar Osciètre, émulsion de noisette, micro-pousses",
        price: "38",
        tag: "Signature",
      },
      {
        name: "Velouté de Truffe Noire",
        description: "Truffe noire du Périgord, crème de céleri rave, chips de topinambour dorées",
        price: "42",
      },
      {
        name: "Foie Gras en Terrine",
        description: "Foie gras de canard mi-cuit, chutney de figues, brioche aux céréales, fleur de sel",
        price: "36",
      },
    ],
  },
  {
    title: "Plats",
    dishes: [
      {
        name: "Filet de Bœuf Rossini",
        description: "Bœuf Wagyu A5, escalope de foie gras poêlée, sauce Périgueux à la truffe",
        price: "78",
        tag: "Chef",
      },
      {
        name: "Homard Bleu Rôti",
        description: "Homard entier, beurre aux herbes de Provence, risotto à l'encre de seiche, bisque légère",
        price: "72",
      },
      {
        name: "Pigeon en Croûte d'Herbes",
        description: "Pigeon de Bresse, farce à la truffe, jus réduit au Sauternes, légumes racines confits",
        price: "58",
      },
    ],
  },
  {
    title: "Desserts",
    dishes: [
      {
        name: "Sphère Obsidienne",
        description: "Chocolat Valrhona Guanaja 70%, cœur coulant caramel beurre salé, sablé breton",
        price: "22",
        tag: "Signature",
      },
      {
        name: "Soufflé au Grand Marnier",
        description: "Soufflé chaud à la fleur d'oranger, glace vanille Bourbon, tuile dentelle dorée",
        price: "18",
      },
      {
        name: "Vacherin Nocturne",
        description: "Meringue légère, sorbet yuzu, crème montée vanille, zestes confits, coulis agrumes",
        price: "19",
      },
    ],
  },
];

function DishRow({ dish, index }: { dish: Dish; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="group py-6 border-b border-gold/[0.12] hover:border-gold/28 transition-colors duration-500 cursor-default"
    >
      <div className="flex items-start justify-between gap-4 mb-1.5">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <h4 className="font-cormorant text-[1.2rem] text-cream group-hover:text-gold transition-colors duration-300 leading-snug">
            {dish.name}
          </h4>
          {dish.tag && (
            <span className="font-raleway text-[8px] tracking-[0.32em] uppercase text-gold/55 border border-gold/22 px-2 py-0.5 flex-shrink-0">
              {dish.tag}
            </span>
          )}
        </div>
        <span className="font-cormorant text-xl text-gold/75 whitespace-nowrap flex-shrink-0 mt-0.5">
          {dish.price} €
        </span>
      </div>
      <p className="font-raleway text-[11px] text-cream/38 leading-relaxed tracking-wide">
        {dish.description}
      </p>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="relative py-32 bg-charcoal overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(201,168,76,0.025),transparent)]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-raleway text-[10px] tracking-[0.48em] uppercase text-gold/58 mb-4">
            Création du Chef
          </p>
          <h2 className="font-cormorant font-light text-[clamp(3.5rem,7vw,5.5rem)] text-cream tracking-[0.12em] mb-6">
            La Carte
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/48" />
            <span className="text-gold/55 text-base leading-none">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/48" />
          </div>
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {menuData.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.14 }}
            >
              <div className="mb-7">
                <h3 className="font-cormorant italic text-[1.75rem] text-gold mb-3 tracking-wide">
                  {cat.title}
                </h3>
                <div className="h-px bg-gradient-to-r from-gold/38 to-transparent" />
              </div>
              {cat.dishes.map((dish, di) => (
                <DishRow key={dish.name} dish={dish} index={ci * 3 + di} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-16 font-cormorant italic text-cream/28 text-lg"
        >
          Menu dégustation 7 services disponible sur réservation · 195 € par personne
        </motion.p>
      </div>
    </section>
  );
}
