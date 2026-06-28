import { cn } from "@/lib/cn";
import styles from "./CtaButton.module.css";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Full-width on its container (useful in stacked mobile layouts). */
  block?: boolean;
};

/**
 * Primary call-to-action. A solid gold face that "lights up" on hover: a warm
 * glow radiates from the corner, the button lifts slightly, and the inner edge
 * brightens — driven by a single --active custom property (see the CSS module).
 * Sober and on-brand. Pure CSS, stays a Server Component.
 */
export function CtaButton({ href, children, className, block }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(styles.button, block && styles.block, className)}
    >
      {children}
    </a>
  );
}
