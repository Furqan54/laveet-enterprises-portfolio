import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import useReducedMotion from "../../hooks/useReducedMotion";
import heroImage from "../../assets/hero.png";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const context = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".hero-media", {
          scale: 1.12,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        })
        .from(
          ".hero-eyebrow",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=1.1",
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.2,
            stagger: 0.08,
          },
          "-=0.45",
        )
        .from(
          ".hero-description",
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7",
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
          },
          "-=0.35",
        );

      if (!reducedMotion) {
        gsap.to(".hero-media-image", {
          yPercent: 12,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-media", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-content", {
          yPercent: -12,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "75% top",
            scrub: true,
          },
        });

        gsap.to(".hero-scroll", {
          opacity: 0,
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "15% top",
            end: "35% top",
            scrub: true,
          },
        });

        gsap.to(".hero-media-overlay", {
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[120vh] overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Media layer */}
      <div className="hero-media absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="hero-media-image h-full w-full object-cover object-center"
        />

        <div className="hero-media-overlay absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,255,255,0.12),transparent_34%)]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/75 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-black/20" />
      </div>

      {/* Hero content */}
      <div className="hero-content relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <p className="hero-eyebrow text-label mb-8 text-[var(--color-text-muted)]">
          Civil & Electrical Engineers · Contractors · Constructors
        </p>

        <div className="overflow-hidden">
          <h1 className="font-display text-[clamp(4.5rem,11vw,11rem)] font-medium leading-[0.82] tracking-[-0.07em]">
            <span className="hero-title-line block">Building</span>
            <span className="hero-title-line block">what</span>
            <span className="hero-title-line block">matters.</span>
          </h1>
        </div>

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

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}

export default Hero;