"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";
import { Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MatrixRain } from "@/components/ui/MatrixRain";
import sistema from "@/../public/sistema.png";
import roadmap from "@/../public/roadmap.png";
import planEjecucion from "@/../public/plan de ejecucion.png";

// Bonus ebooks — the 3D mockups carry the branding. Each card shows the ebook
// over a subtle matrix backdrop. Day 3 copy is written to match the other two.
const BONUSES: Array<{ tag: string; title: string; text: string; image: StaticImageData }> = [
  {
    tag: "Bono 01",
    title: "Sistema",
    text: "El método paso a paso para reprogramar tu identidad y bajar la espiritualidad a lo práctico.",
    image: sistema,
  },
  {
    tag: "Bono 02",
    title: "Roadmap",
    text: "Un mapa claro de decisiones estratégicas para sostener tu nueva identidad después del bootcamp.",
    image: roadmap,
  },
  {
    tag: "Bono 03",
    title: "Plan de ejecución",
    text: "Un plan concreto para pasar a la acción y manifestar resultados tangibles en tu vida real.",
    image: planEjecucion,
  },
];

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Bonus section — framed as a gift. After the three days, Pilar adds three
 * practical ebooks (Sistema, Roadmap, Plan de ejecución). Each card features
 * the 3D ebook mockup over a subtle matrix-green backdrop, sealed-present feel.
 */
export function Bonos() {
  return (
    <section id="bonos" className="bg-background py-[clamp(4rem,2rem+8vh,7rem)]">
      <Container>
        {/* Gift label above the title. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-surface/40 px-4 py-2 text-sm text-accent"
        >
          <Gift size={16} />
          <span className="font-display uppercase tracking-[0.2em]">
            Regalos para ti
          </span>
        </motion.div>

        <SectionTitle tone="dark">
          Diseñado para generar{" "}
          <em className="font-accent font-medium italic text-accent-soft">
            resultados tangibles
          </em>
        </SectionTitle>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-foreground/60"
        >
          Este bootcamp es práctico, pensado para generar resultados tangibles
          en las áreas más importantes de tu vida. Para que salgas con claridad,
          visión y un mapa de decisiones estratégicas que sostengan tu nueva
          identidad, decidí regalarte estos bonos.
        </motion.p>

        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {BONUSES.map(({ tag, title, text, image }) => (
            <motion.li
              key={tag}
              variants={card}
              onMouseMove={(e) => {
                // Track the cursor as CSS vars for the spotlight glow.
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-accent/15 bg-surface/30 p-8 text-center shadow-[inset_0_1px_0_0_rgba(243,226,176,0.06),inset_0_0_40px_0_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-accent/40"
            >
              {/* Matrix backdrop — subtle, behind everything. */}
              <MatrixRain />

              {/* Spotlight glow that follows the cursor (fades in on hover). */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,50%),rgba(126,157,99,0.22),transparent_70%)]"
              />

              {/* Ebook mockup — the protagonist. */}
              <div className="relative">
                <Image
                  src={image}
                  alt={`Ebook ${title}`}
                  sizes="(min-width: 768px) 280px, 60vw"
                  className="h-auto w-44 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1"
                  placeholder="blur"
                />
              </div>

              <p className="relative font-display text-sm uppercase tracking-[0.2em] text-accent">
                {tag}
              </p>
              <p className="relative font-accent text-2xl italic text-foreground">
                {title}
              </p>
              <p className="relative text-base leading-relaxed text-foreground/70">
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
