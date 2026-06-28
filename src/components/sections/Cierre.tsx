"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldText } from "@/components/ui/GoldText";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/cn";
import styles from "./Cierre.module.css";

// Testimonials are placeholders — NEVER invent social proof. Replace each entry
// with a real quote + name (and an optional photo) once the client provides it.
const TESTIMONIALS = [
  { quote: "[ Testimonio pendiente ]", name: "[ Nombre ]" },
  { quote: "[ Testimonio pendiente ]", name: "[ Nombre ]" },
  { quote: "[ Testimonio pendiente ]", name: "[ Nombre ]" },
];

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Section 6 — Testimonials + opening of 100 spaces + final CTA.
 *
 * The close. Premium testimonial cards (placeholders until real quotes exist),
 * then the emotional peak: a dark panel announcing the 100 spaces with the
 * number "100" in living gold, framed as an invitation — not aggressive
 * scarcity. Ends on the primary CTA.
 */
export function Cierre() {
  return (
    <section id="cierre" className="bg-surface py-[clamp(4rem,2rem+8vh,7rem)]">
      <Container>
        <SectionTitle tone="dark">Historias de transformación</SectionTitle>

        {/* Testimonials — placeholder cards, structure ready for real content. */}
        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.li
              key={i}
              variants={card}
              className="flex flex-col gap-5 rounded-2xl border border-accent/15 bg-ink/40 p-7 shadow-[inset_0_1px_0_0_rgba(243,226,176,0.05),inset_0_0_30px_0_rgba(0,0,0,0.5)]"
            >
              <Quote size={28} className="text-accent/70" strokeWidth={1.5} />
              <p className="grow text-base italic leading-relaxed text-foreground/60">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="size-10 rounded-full border border-accent/25 bg-surface/60" />
                <span className="font-accent text-lg italic text-accent-soft">
                  {t.name}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* The 100 spaces — emotional peak, framed as an invitation. */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            styles.frame,
            // Square corners + visible overflow so the deco brackets can sit
            // outside the panel edges.
            "relative mt-20 bg-ink/60 px-6 py-16 text-center shadow-[inset_0_1px_0_0_rgba(243,226,176,0.06),inset_0_-40px_80px_-40px_rgba(0,0,0,0.7)] sm:px-12",
          )}
        >
          {/* Art Deco corner frame — ceremonial portal. */}
          <span aria-hidden className={cn(styles.corner, styles.top, styles.left)} />
          <span aria-hidden className={cn(styles.corner, styles.top, styles.right)} />
          <span aria-hidden className={cn(styles.corner, styles.bottom, styles.left)} />
          <span aria-hidden className={cn(styles.corner, styles.bottom, styles.right)} />

          <p className="font-display text-sm uppercase tracking-[0.35em] text-accent">
            Al terminar el bootcamp
          </p>

          <p className="mx-auto mt-8 max-w-3xl font-sans text-2xl font-light leading-snug text-foreground sm:text-3xl lg:text-4xl">
            Abriré{" "}
            <GoldText className="font-display font-semibold">100</GoldText>{" "}
            espacios para trabajar conmigo en mi{" "}
            <em className="font-accent text-[1.2em] italic text-accent-soft">
              programa principal
            </em>
            .
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/70">
            Este bootcamp será la puerta de entrada para quienes quieran
            profundizar el proceso y continuar trabajando su identidad,
            manifestación y acción consciente en una experiencia más profunda.
          </p>

          <div className="mt-12 flex justify-center">
            <CtaButton href="#inscripcion">Quiero entrar al bootcamp</CtaButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
