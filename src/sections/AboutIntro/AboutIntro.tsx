import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      /*
       * =========================================================
       * LABEL
       * =========================================================
       */

      gsap.from(".about-label", {
        y: 30,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "top 65%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * MAIN HEADING
       * =========================================================
       */

      gsap.from(".about-heading-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 42%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * BODY COPY
       * =========================================================
       */

      gsap.from(".about-copy", {
        y: 45,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
          end: "top 43%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * ESTABLISHED YEAR
       * =========================================================
       */

      gsap.from(".about-year", {
        y: 60,
        opacity: 0,
        scale: 0.94,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 38%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * DIVIDER
       * =========================================================
       */

      gsap.from(".about-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-bg)] px-5 py-32 md:px-10 md:py-56"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* =====================================================
            TOP ROW
            ===================================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="about-label text-label mb-10 text-[var(--color-text-subtle)]">
              About Laveet
            </p>

            <h2 className="max-w-6xl text-[clamp(3.4rem,8vw,9rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              <span className="about-heading-line block overflow-hidden">
                Building with
              </span>

              <span className="about-heading-line block overflow-hidden">
                purpose.
              </span>
            </h2>
          </div>

          {/* ===================================================
              ESTABLISHED
              =================================================== */}

          <div className="about-year flex items-start md:col-span-4 md:justify-end">
            <div className="text-right">
              <p className="text-label mb-3 text-[var(--color-text-subtle)]">
                Established
              </p>

              <p className="text-[clamp(4rem,8vw,8rem)] font-medium leading-none tracking-[-0.07em]">
                2009
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <div className="about-divider mt-20 h-px w-full bg-[var(--color-border)] md:mt-32" />

        {/* =====================================================
            COMPANY DESCRIPTION
            ===================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 md:mt-24">
          <div className="md:col-span-4">
            <p className="text-label text-[var(--color-text-subtle)]">
              The company
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="about-copy text-[clamp(1.3rem,2.4vw,2.4rem)] font-light leading-[1.35] tracking-[-0.025em] text-[var(--color-text-muted)]">
              Laveet Enterprises is a civil construction and government
              contracting company working across documented civil,
              infrastructure, institutional and government projects.
            </p>

            <p className="about-copy mt-8 max-w-2xl text-base leading-8 text-[var(--color-text-subtle)]">
              The company's documented portfolio includes road and street
              improvement, government buildings, police facilities,
              educational works, healthcare infrastructure and secure
              institutional facilities.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
            ===================================================== */}

        <div className="mt-32 md:mt-48">
          <p className="about-copy max-w-4xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Civil engineering,
            <br />
            construction,
            <br />
            and public infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;