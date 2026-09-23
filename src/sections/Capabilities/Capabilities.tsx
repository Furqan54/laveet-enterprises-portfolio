import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { capabilities } from "../../data/capabilities";

function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      /* ========================================================
         SECTION LABEL
         ======================================================== */

      gsap.from(".capabilities-label", {
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

      /* ========================================================
         MAIN HEADING
         ======================================================== */

      gsap.from(".capabilities-heading-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 45%",
          scrub: 1,
        },
      });

      /* ========================================================
         CAPABILITY ROWS
         ======================================================== */

      gsap.from(".capability-row", {
        y: 45,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capabilities-list",
          start: "top 78%",
          end: "top 38%",
          scrub: 1,
        },
      });

      /* ========================================================
         DIVIDER LINES
         ======================================================== */

      gsap.from(".capability-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capabilities-list",
          start: "top 75%",
          end: "top 40%",
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
        {/* ======================================================
            INTRO
            ====================================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="capabilities-label text-label mb-10 text-[var(--color-text-subtle)]">
              Capabilities
            </p>

            <h2 className="max-w-5xl text-[clamp(3.2rem,7vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              <span className="capabilities-heading-line block overflow-hidden">
                Built to
              </span>

              <span className="capabilities-heading-line block overflow-hidden">
                deliver.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 md:flex md:items-end">
            <p className="max-w-sm text-sm leading-7 text-[var(--color-text-muted)] md:ml-auto md:text-base">
              Construction capabilities documented across Laveet
              Enterprises' portfolio and company material.
            </p>
          </div>
        </div>

        {/* ======================================================
            CAPABILITY LIST
            ====================================================== */}

        <div className="capabilities-list mt-28 md:mt-40">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              className="capability-row group relative"
            >
              <div className="capability-divider h-px w-full bg-[var(--color-border)]" />

              <div className="grid grid-cols-12 items-center gap-4 py-8 md:py-10">
                {/* NUMBER */}

                <div className="col-span-2 md:col-span-1">
                  <span className="text-label text-[var(--color-text-subtle)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TITLE */}

                <div className="col-span-8 md:col-span-8">
                  <h3 className="text-[clamp(1.8rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em] transition-transform duration-500 ease-out group-hover:translate-x-3">
                    {capability.title}
                  </h3>
                </div>

                {/* ARROW */}

                <div className="col-span-2 flex justify-end md:col-span-3">
                  <span className="text-xl text-[var(--color-text-subtle)] transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:text-[var(--color-text)]">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="capability-divider h-px w-full bg-[var(--color-border)]" />
        </div>

        {/* ======================================================
            BOTTOM STATEMENT
            ====================================================== */}

        <div className="mt-28 md:mt-40">
          <p className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            From streets and schools
            <br />
            to government facilities
            <br />
            and public infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;