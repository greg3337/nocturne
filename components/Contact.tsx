"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const inputCls =
  "w-full bg-obsidian border border-gold/15 px-5 py-4 font-raleway text-[13px] text-cream/75 placeholder:text-cream/25 focus:outline-none focus:border-gold/45 transition-colors duration-300 [color-scheme:dark]";

const info = [
  { label: "Adresse", value: "12 Rue des Ombres\n75008 Paris, France" },
  { label: "Horaires", value: "Mardi — Samedi\n19h30 — 23h30" },
  { label: "Téléphone", value: "+33 1 40 00 19 98", href: "tel:+33140001998" },
  { label: "E-mail", value: "reservation@nocturne-paris.fr", href: "mailto:reservation@nocturne-paris.fr" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "2", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 bg-charcoal overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(201,168,76,0.04),transparent_65%)]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-raleway text-[10px] tracking-[0.48em] uppercase text-gold/58 mb-4">
              Nous Contacter
            </p>
            <h2 className="font-cormorant font-light text-[clamp(3.5rem,7vw,5.5rem)] text-cream tracking-[0.12em] mb-8 leading-none">
              Réserver
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-gold/55 to-transparent mb-12" />

            <div className="space-y-9">
              {info.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="font-raleway text-[9px] tracking-[0.38em] uppercase text-gold/48 mb-2">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-cormorant text-[1.3rem] text-cream/78 hover:text-gold transition-colors duration-300 whitespace-pre-line"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-cormorant text-[1.3rem] text-cream/78 whitespace-pre-line leading-snug">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gold/10">
              <p className="font-raleway text-[9px] tracking-[0.32em] uppercase text-cream/28 mb-4">
                Suivez-nous
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-cream/35 hover:text-gold transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-cream/35 hover:text-gold transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-gold/22 p-14 text-center mt-8"
              >
                <div className="text-gold text-3xl mb-5 leading-none">✦</div>
                <h3 className="font-cormorant text-3xl text-cream mb-3">
                  Demande envoyée
                </h3>
                <p className="font-raleway text-sm text-cream/45 leading-relaxed">
                  Nous vous confirmerons votre réservation dans les 24 heures.
                  <br />
                  Au plaisir de vous accueillir à Nocturne.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 mt-8">
                <div className="grid grid-cols-2 gap-3.5">
                  <input
                    required
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Votre e-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputCls}
                  />
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className={inputCls + " cursor-pointer"}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-charcoal text-cream">
                        {n} {n === 1 ? "couvert" : "couverts"}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Occasions spéciales, allergies, préférences…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputCls + " resize-none"}
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-obsidian font-raleway text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300 mt-1"
                >
                  Envoyer la Demande
                </button>
                <p className="font-raleway text-[9px] text-cream/22 tracking-wide text-center pt-1">
                  Réponse sous 24h · Confirmation par e-mail
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.85 }}
        className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p className="font-cormorant text-xl tracking-[0.22em] text-cream/28">
          NOCTURNE
        </p>
        <p className="font-raleway text-[9px] tracking-[0.22em] uppercase text-cream/18">
          © 2024 Nocturne · Restaurant Gastronomique · Paris · Tous droits réservés
        </p>
      </motion.div>
    </section>
  );
}
