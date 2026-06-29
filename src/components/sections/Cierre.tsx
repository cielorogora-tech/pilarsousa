"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldText } from "@/components/ui/GoldText";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { cn } from "@/lib/cn";
import styles from "./Cierre.module.css";
// New testimonials — IMG_5250 leads, then the rest, ahead of the originals.
import img5250 from "@/../public/Testimonios/IMG_5250.PNG";
import img5243 from "@/../public/Testimonios/IMG_5243.PNG";
import img5244 from "@/../public/Testimonios/IMG_5244.PNG";
import img5245 from "@/../public/Testimonios/IMG_5245.PNG";
import img5246 from "@/../public/Testimonios/IMG_5246.PNG";
import img5247 from "@/../public/Testimonios/IMG_5247.PNG";
import img5248 from "@/../public/Testimonios/IMG_5248.PNG";
import img5249 from "@/../public/Testimonios/IMG_5249.PNG";
import t0 from "@/../public/Testimonios/testimonio.png";
import t1 from "@/../public/Testimonios/testimonio1.png";
import t2 from "@/../public/Testimonios/testimonio2.png";
import t3 from "@/../public/Testimonios/testimonio3.png";
import t4 from "@/../public/Testimonios/testimonio4.png";
import t5 from "@/../public/Testimonios/testimonio5.png";
import t6 from "@/../public/Testimonios/testimonio6.png";
import t7 from "@/../public/Testimonios/testimonio7.png";
import t8 from "@/../public/Testimonios/testimonio8.png";
import t9 from "@/../public/Testimonios/testimonio9.png";
import t10 from "@/../public/Testimonios/testimonio10.png";

// Real Trustpilot review screenshots — verifiable social proof. IMG_5250 leads,
// followed by the rest of the new batch, then the original screenshots.
const TESTIMONIALS = [
  img5250,
  img5243,
  img5244,
  img5245,
  img5246,
  img5247,
  img5248,
  img5249,
  t0,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
];

/**
 * Section 6 — Testimonials + opening of 100 spaces + final CTA.
 *
 * The close. A horizontal carousel of real Trustpilot review screenshots, then
 * the emotional peak: a dark panel announcing the 100 spaces with the number
 * "100" in living gold, framed as an invitation — not aggressive scarcity.
 */
export function Cierre() {
  return (
    <section id="cierre" className="bg-surface py-[clamp(4rem,2rem+8vh,7rem)]">
      <Container>
        <SectionTitle tone="dark">
          Historias de{" "}
          <em className="font-accent font-medium italic text-accent-soft">
            transformación
          </em>
        </SectionTitle>

        {/* Intro body — distilled from the client's notes. The "+60%" metric and
            Trustpilot integration are intentionally left out until verified. */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-foreground/70"
        >
          Volver al Origen nació para bajar la espiritualidad a lo práctico: un
          sistema para reprogramar tu identidad y usarlo en la vida real. Y no lo
          decimos nosotros — lo dicen las personas que ya hicieron el proceso.
        </motion.p>

        {/* Real Trustpilot review screenshots in a horizontal carousel. */}
        <div className="mt-14">
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>

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
            Este bootcamp es el filtro: de aquí elijo a quienes estén realmente
            comprometidas para acceder a la Academia Volver al Origen, una
            experiencia transformacional de 40 días para profundizar tu
            identidad, manifestación y acción consciente.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
