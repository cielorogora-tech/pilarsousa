"use client";

import { motion, type Variants } from "framer-motion";
import {
  EyeOff,
  HandHeart,
  Users,
  Shield,
  ScrollText,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

// The six unconscious patterns — copy verbatim from the client. Icons are
// abstract (never literal): each suggests the wound without illustrating it.
const PATTERNS: Array<{ icon: LucideIcon; text: string }> = [
  { icon: EyeOff, text: "Cree que ser vista no es seguro." },
  { icon: HandHeart, text: "Asocia el amor con el sacrificio." },
  { icon: Users, text: "Necesita la aprobación de los demás." },
  { icon: Shield, text: "Encuentra protección en seguir siendo víctima." },
  { icon: ScrollText, text: "Utiliza su historia para justificar por qué todavía no puede." },
  { icon: Lock, text: "Prefiere el dolor conocido antes que la incertidumbre de cambiar." },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
 * Section 3 — Problem / Unconscious pattern.
 *
 * The emotional core, on a warm-cream stage (a deliberate light break between
 * dark sections). A gold divider opens it. Emphasis comes from Cormorant
 * italic on short phrases — never Cinzel on long copy. Six carved cards name
 * the patterns; the closing truth lands in plain, readable body type.
 */
export function Patron() {
  return (
    <section
      id="patron"
      className="bg-cream text-forest-900 py-[clamp(4rem,2rem+8vh,7rem)]"
    >
      <Container>
        {/* Reframing headline — shared title pattern, light tone. Emphasis via
            Cormorant italic, never Cinzel caps. */}
        <SectionTitle tone="light">
          Quieres una realidad nueva, pero{" "}
          <em className="font-accent font-medium italic text-earth-gold">una parte de ti</em>{" "}
          todavía protege la anterior.
        </SectionTitle>

        {/* Lead-in to the list. */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-forest-900/70"
        >
          Conscientemente quieres cambiar. Pero una parte de tu identidad
          todavía:
        </motion.p>

        {/* The six patterns as carved cards — inset shadows on a light face. */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PATTERNS.map(({ icon: Icon, text }) => (
            <motion.li
              key={text}
              variants={card}
              className="group relative flex flex-col gap-5 rounded-2xl border border-earth-gold/20 bg-white/50 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),inset_0_0_24px_0_rgba(122,100,66,0.07)] transition-colors duration-500 hover:border-earth-gold/45"
            >
              {/* Icon medallion — carved seal on the light face. */}
              <span className="flex size-12 items-center justify-center rounded-full border border-earth-gold/30 bg-cream text-earth-gold shadow-[inset_0_0_12px_0_rgba(122,100,66,0.12)]">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <p className="text-base leading-relaxed text-forest-900/85">
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Closing truth — plain readable body type, emphasis via italic only. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-lg leading-relaxed text-forest-900/85">
            Por eso no basta con desear algo diferente.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-forest-900">
            Mientras una parte de ti siga necesitando el patrón,{" "}
            <em className="font-accent text-2xl italic text-earth-gold sm:text-3xl">
              continuarás reproduciéndolo
            </em>{" "}
            aunque conscientemente quieras dejarlo atrás.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
