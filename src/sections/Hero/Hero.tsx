import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import useReducedMotion from "../../hooks/useReducedMotion";
import heroImage from "../../assets/hero.png";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const context = gsap.context(() => {
      /*
       * =========================================================
       * INTRO
       * =========================================================
       */

      if (!reducedMotion) {
        const intro = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        intro
          .from(".hero-atmosphere", {
            opacity: 0,
            scale: 1.06,
            duration: 1.6,
            ease: "power2.out",
          })
          .from(
            ".hero-image",
            {
              opacity: 0,
              scale: 1.06,
              duration: 1.5,
            },
            "-=1.2",
          )
          .from(
            ".hero-eyebrow",
            {
              y: 25,
              opacity: 0,
              duration: 0.75,
            },
            "-=0.9",
          )
          .from(
            ".hero-title-line",
            {
              y: 45,
              opacity: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.4",
          )
          .from(
            ".hero-description",
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.55",
          )
          .from(
            ".hero-scroll",
            {
              y: 15,
              opacity: 0,
              duration: 0.55,
            },
            "-=0.3",
          );

        /*
         * =======================================================
         * BACKGROUND PARALLAX
         * =======================================================
         */

        gsap.to(".hero-atmosphere", {
          yPercent: 8,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        /*
         * =======================================================
         * IMAGE PARALLAX
         * =======================================================
         */

        gsap.to(".hero-image", {
          yPercent: 12,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * ARCHITECTURAL GRID
         * =======================================================
         */

        gsap.to(".hero-grid", {
          yPercent: -6,
          xPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });

        /*
         * =======================================================
         * TITLE CHOREOGRAPHY
         *
         * IMPORTANT:
         *
         * The words do NOT travel vertically out of the viewport.
         *
         * Each line gets its own subtle horizontal movement and
         * scale change, creating the cinematic layered feeling
         * without destroying the typography.
         * =======================================================
         */

        // BUILDING
        gsap.to(".hero-title-line:nth-child(1)", {
          xPercent: -4,
          scale: 0.97,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "70% top",
            scrub: 1,
          },
        });

        // WHAT
        gsap.to(".hero-title-line:nth-child(2)", {
          xPercent: 4,
          scale: 0.985,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "70% top",
            scrub: 1,
          },
        });

        // MATTERS
        gsap.to(".hero-title-line:nth-child(3)", {
          xPercent: -3,
          scale: 0.975,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "70% top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * VERY SUBTLE TITLE GROUP MOVEMENT
         *
         * Only after the individual choreography has played,
         * the complete title begins to compress slightly.
         * =======================================================
         */

        gsap.to(".hero-title", {
          scale: 0.94,
          yPercent: -2,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "55% top",
            end: "90% top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * DESCRIPTION
         * =======================================================
         */

        gsap.to(".hero-description", {
          opacity: 0,
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "30% top",
            end: "55% top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * EYEBROW
         * =======================================================
         */

        gsap.to(".hero-eyebrow", {
          opacity: 0,
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "25% top",
            end: "50% top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * HERO FADE
         *
         * We fade the entire composition only near the end.
         * The title therefore remains visible for most of the
         * cinematic hero sequence.
         * =======================================================
         */

        gsap.to(".hero-copy", {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "68% top",
            end: "95% top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * DARKNESS
         * =======================================================
         */

        gsap.to(".hero-darkness", {
          opacity: 0.72,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "55% top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /*
         * =======================================================
         * SCROLL INDICATOR
         * =======================================================
         */

        gsap.to(".hero-scroll", {
          opacity: 0,
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "8% top",
            end: "23% top",
            scrub: true,
          },
        });

        /*
         * =======================================================
         * BOTTOM TRANSITION
         * =======================================================
         */

        gsap.to(".hero-transition", {
          height: "38vh",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "55% top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative h-[145vh] bg-[var(--color-bg)]"
    >
      {/* =====================================================
          STICKY CINEMATIC STAGE
          ===================================================== */}

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ===================================================
            ATMOSPHERE
            =================================================== */}

        <div className="hero-atmosphere pointer-events-none absolute inset-[-8%]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.14),transparent_25%)]" />

          <div className="absolute left-[55%] top-[12%] h-[48vw] w-[48vw] rounded-full border border-white/[0.045]" />

          <div className="absolute left-[61%] top-[22%] h-[34vw] w-[34vw] rounded-full border border-white/[0.03]" />

          <div className="absolute left-[67%] top-[32%] h-[20vw] w-[20vw] rounded-full border border-white/[0.025]" />
        </div>

        {/* ===================================================
            ARCHITECTURAL GRID
            =================================================== */}

        <div className="hero-grid pointer-events-none absolute inset-[-5%] opacity-[0.18]">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:90px_90px]" />
        </div>

        {/* ===================================================
            HERO IMAGE
            =================================================== */}

        <div className="hero-image pointer-events-none absolute inset-[-8%]">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-[0.13] grayscale"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-black/20" />
        </div>

        {/* ===================================================
            DARK CINEMATIC OVERLAY
            =================================================== */}

        <div className="hero-darkness pointer-events-none absolute inset-0 bg-black opacity-0" />

        {/* ===================================================
            MAIN CONTENT
            =================================================== */}

        <div className="hero-inner relative z-10 mx-auto flex h-screen max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16">
          <div className="hero-copy">
            {/* Eyebrow */}

            <p className="hero-eyebrow text-label mb-8 text-[var(--color-text-muted)]">
              Civil & Electrical Engineers · Contractors · Constructors
            </p>

            {/* =================================================
                TITLE
                ================================================= */}

            <h1
              className="hero-title font-display text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.06em]"
            >
              <span className="hero-title-line block">
                Building
              </span>

              <span className="hero-title-line block">
                what
              </span>

              <span className="hero-title-line block">
                matters.
              </span>
            </h1>

            {/* =================================================
                SUPPORTING CONTENT
                ================================================= */}

            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="hero-description max-w-md text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                Laveet Enterprises delivers civil construction and
                government contracting work across Pakistan.
              </p>

              {/* Scroll indicator */}

              <div className="hero-scroll text-label flex items-center gap-4 text-[var(--color-text-subtle)]">
                <span className="h-px w-12 bg-[var(--color-border-strong)]" />

                Scroll to explore
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CINEMATIC BOTTOM TRANSITION
            =================================================== */}

        <div className="hero-transition pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/85 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;