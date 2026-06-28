"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Section 2 — Central phrase / Reframe.
 *
 * A cinematic beat. On a near-black stage the manifesto reveals itself as you
 * scroll in: line one rises word by word, a hairline of gold draws across,
 * then the reframe ("Manifiestas quien eres.") lands in gold Cinzel — the
 * truth that stays. Driven by GSAP ScrollTrigger + SplitText.
 */
export function Manifiesto() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // If the user prefers reduced motion, leave the text fully visible
      // (it renders opaque by default) and skip the animation entirely.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const lineOne = root.current!.querySelector<HTMLElement>("[data-line='1']")!;
      const lineTwo = root.current!.querySelector<HTMLElement>("[data-line='2']")!;
      const mark = root.current!.querySelector<HTMLElement>("[data-mark]")!;

      // Split both lines into words for staggered reveals.
      const splitOne = new SplitText(lineOne, { type: "words", wordsClass: "mf-word" });
      const splitTwo = new SplitText(lineTwo, { type: "words", wordsClass: "mf-word" });

      // Start hidden + blurred (BlurText-style). Covers the reduced-motion
      // fallback too, which returns before this runs so text stays visible.
      gsap.set([splitOne.words, splitTwo.words], {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
      });
      gsap.set(mark, { scale: 0, opacity: 0, rotate: 45 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1, // tie the reveal to the scroll position — film-like.
        },
      });

      tl.to(splitOne.words, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
      })
        .to(mark, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.2")
        .to(
          splitTwo.words,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.18,
          },
          "+=0.1",
        );

      return () => {
        splitOne.revert();
        splitTwo.revert();
      };
    },
    { scope: root },
  );

  return (
    <section
      id="manifiesto"
      ref={root}
      className="flex items-center bg-[#0A0908] py-[clamp(7rem,4rem+12vh,12rem)]"
    >
      <Container narrow className="text-center">
        {/* No overflow clip here: the blur halo needs room to breathe as each
            word rises and de-blurs into place. */}
        <p
          data-line="1"
          className="font-sans text-2xl font-light leading-tight text-foreground/85 sm:text-3xl lg:text-4xl"
        >
          No manifiestas lo que deseas.
        </p>

        {/* Subtle sacred-geometry diamond instead of a rule line. */}
        <span
          data-mark
          aria-hidden
          className="mx-auto my-12 block size-2 rotate-45 bg-accent/80"
        />

        <p
          data-line="2"
          className="font-display text-4xl font-semibold leading-tight text-accent sm:text-5xl lg:text-6xl"
        >
          Manifiestas quien eres.
        </p>
      </Container>
    </section>
  );
}
