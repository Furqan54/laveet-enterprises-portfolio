import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".hero-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            duration: 1.2,
            stagger: 0.08,
          },
          "-=0.35",
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-[var(--color-bg)] px-5 pb-10 pt-32 md:px-10 md:pb-12"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col">
        <p className="hero-eyebrow text-label mb-8 text-[var(--color-text-muted)]">
          Civil & Electrical Engineers · Contractors · Constructors
        </p>

        <h1 className="font-display overflow-hidden text-[clamp(4.5rem,11vw,11rem)] font-medium leading-[0.82] tracking-[-0.07em]">
          <span className="hero-title-line block">Building</span>
          <span className="hero-title-line block">what</span>
          <span className="hero-title-line block">matters.</span>
        </h1>

        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="hero-description max-w-md text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
            Laveet Enterprises delivers civil construction and government
            contracting work across Pakistan.
          </p>

          <div className="hero-scroll text-label flex items-center gap-4 text-[var(--color-text-subtle)]">
            <span className="h-px w-12 bg-[var(--color-border-strong)]" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;