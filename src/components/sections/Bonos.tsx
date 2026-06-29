"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import banner from "@/../public/banner-web-bonos.jpg";
import bannerMobile from "@/../public/banner-web-bonos-mobile.jpg";

// The three bonuses, named as a compact list below the artwork.
const BONUSES = ["Sistema", "Roadmap", "Plan de ejecución"];

/**
 * Section 5 — Bonuses, reframed as a compact banner (not a full section).
 *
 * Per client direction: a single ~1140×500 banner with a background image of
 * the three packaged bonuses (centered, reading toward the top). Copy sits in a
 * gradient strip along the bottom so it stays legible over any artwork. Kept
 * small on purpose so it doesn't outweigh the primary CTA above.
 */
export function Bonos() {
  return (
    <section
      id="bonos"
      className="bg-background pt-2 pb-[clamp(4rem,2rem+8vh,7rem)]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-115 max-w-285 overflow-hidden rounded-3xl border border-accent/20 bg-surface/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(243,226,176,0.08)] sm:h-100"
        >
          {/* Background artwork — responsive: a vertical crop on mobile, the
              wide web banner on sm+. Each layer shows only at its breakpoint. */}
          <div
            aria-hidden
            style={{ backgroundImage: `url(${bannerMobile.src})` }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          />
          <div
            aria-hidden
            style={{ backgroundImage: `url(${banner.src})` }}
            className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat sm:block"
          />

          {/* Bottom gradient strip — guarantees the copy reads over any image. */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,var(--color-ink)_10%,color-mix(in_oklab,var(--color-ink)_70%,transparent)_45%,transparent)]"
          />

          {/* Copy, seated in the bottom strip. */}
          <div className="absolute inset-x-0 bottom-0 p-8 text-center sm:p-10">
            {/* Gift label — frosted glass over the artwork, white text+icon. */}
            <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur-md">
              <Gift size={14} />
              <span className="font-display font-semibold uppercase tracking-[0.2em]">
                Regalos para ti
              </span>
            </span>

            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Diseñado para generar{" "}
              <em className="font-accent font-medium italic text-accent-soft">
                resultados tangibles
              </em>
            </h2>

            {/* The three bonuses as a single row of gold-separated labels. */}
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {BONUSES.map((name, i) => (
                <li key={name} className="flex items-center gap-4">
                  <span className="font-accent text-lg italic text-foreground sm:text-xl">
                    {name}
                  </span>
                  {i < BONUSES.length - 1 && (
                    <span aria-hidden className="text-accent/50">
                      ✶
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
