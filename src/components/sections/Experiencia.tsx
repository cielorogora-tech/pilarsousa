"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldText } from "@/components/ui/GoldText";
import { cn } from "@/lib/cn";
import styles from "./Experiencia.module.css";
import img1 from "@/../public/img1.jpg";
import img2 from "@/../public/img2.jpg";
import img3 from "@/../public/img3.jpg";

// The three days — copy verbatim. Each image is a sacred-geometry portal that
// mirrors the day's intention (seeing, recognizing, ascending out).
const DAYS: Array<{ n: string; label: string; text: string; image: StaticImageData }> = [
  { n: "01", label: "Día 1", text: "Ver la identidad actual que está creando tu realidad.", image: img1 },
  { n: "02", label: "Día 2", text: "Reconocer el patrón que sigues protegiendo inconscientemente.", image: img2 },
  { n: "03", label: "Día 3", text: "Salir con claridad interna y un plan de acción concreto.", image: img3 },
];

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

// 3D entrance: each card swings up and forward from a deeper lean + slight
// rotateY, so it reads as turning toward you. Staggered via the parent.
const card: Variants = {
  hidden: { opacity: 0, y: 64, rotateX: 18, rotateY: -6, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Section 4 — What you will experience inside.
 *
 * The three-day journey as three portal cards. Each shows a sacred-geometry
 * image with the day number in gold over it; a dark bottom inset shadow grounds
 * the image into the card and carries the copy. Cards enter with a sober 3D
 * tilt, staggered. Three columns on desktop, stacked on mobile.
 */
export function Experiencia() {
  return (
    <section id="experiencia" className="bg-background py-[clamp(4rem,2rem+8vh,7rem)]">
      <Container>
        <SectionTitle tone="dark">Lo que experimentarás dentro</SectionTitle>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-foreground/60"
        >
          Una experiencia para verte con honestidad, reconocer la verdad que
          llevas tiempo evitando y dejar de alimentar aquello que ya no
          representa quién eres.
        </motion.p>

        {/* Three-column grid on desktop, stacked cleanly on mobile.
            perspective on the container makes the 3D entrance read in space. */}
        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 perspective-distant md:grid-cols-3"
        >
          {DAYS.map(({ n, label, text, image }) => (
            <motion.li
              key={n}
              variants={card}
              whileHover={{ rotateX: -4, rotateY: 4, y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={cn(
                styles.card,
                "group overflow-hidden rounded-2xl border border-accent/15 bg-surface/30 transform-3d",
              )}
            >
              {/* Portal image */}
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                />
                {/* Dark bottom inset: grounds the image and seats the copy. */}
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-transparent" />

                {/* Day number — large, with a continuous luxury gold drift. */}
                <GoldText className="absolute left-6 top-5 font-display text-5xl font-semibold drop-shadow-[0_2px_10px_rgba(8,8,8,0.7)]">
                  {n}
                </GoldText>

                {/* Copy seated on the dark base of the image. */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-accent text-lg italic text-accent-soft">
                    {label}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/90">
                    {text}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
