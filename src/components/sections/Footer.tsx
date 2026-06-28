import { Container } from "@/components/ui/Container";

/**
 * Minimal site footer — program name + copyright. Sober, on a deep ink base.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/10 bg-ink py-10">
      <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
          Bootcamp Reset Identidad
        </p>
        <p className="text-xs text-foreground/50">
          © {year} Pilar Sousa. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
