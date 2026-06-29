import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GoldText } from "@/components/ui/GoldText";
import { WHATSAPP_GROUP_URL } from "@/lib/links";
import bgDesktop from "@/../public/bg-pilarsousa.jpg";
import bgMobile from "@/../public/bg-pilarsousa-mobile.jpg";
import logo from "@/../public/LOGO.png";

export const metadata: Metadata = {
  title: "¡Bienvenida! — Bootcamp RESET IDENTIDAD",
  description: "Tu lugar en el bootcamp está confirmado.",
  robots: { index: false }, // post-purchase page shouldn't be indexed
};

/**
 * Thank-you / confirmation page — reuses the Hero's full-bleed background and
 * structure. Congratulates the buyer, invites them to the private WhatsApp
 * group, and ends on a WhatsApp button.
 */
export default function GraciasPage() {
  return (
    <main>
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        {/* Same banner as the Hero, but darker for a calm confirmation mood. */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop.src} />
            <Image
              src={bgMobile}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top lg:object-center"
              placeholder="blur"
            />
          </picture>
          <div className="absolute inset-0 bg-ink/75" />
        </div>

        <Container className="py-20 text-center">
          <Reveal>
            <Image
              src={logo}
              alt="Volver al Origen — Bootcamp"
              priority
              sizes="200px"
              className="mx-auto h-auto w-[180px] lg:w-[220px]"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-xs uppercase tracking-[0.35em] text-accent sm:text-sm">
              Tu lugar está confirmado
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="mx-auto mt-5 max-w-3xl font-sans text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Bienvenida al{" "}
              <GoldText className="font-display font-semibold">
                Bootcamp RESET IDENTIDAD
              </GoldText>
            </h1>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-foreground/85">
              Diste el primer paso. Ahora únete al grupo privado de WhatsApp: ahí
              recibirás los accesos, las fechas y todo lo que necesitas para
              comenzar el proceso.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-accent px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_10px_30px_-10px_rgba(200,164,90,0.7)] transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <MessageCircle size={18} />
              Unirme al grupo privado
            </a>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
