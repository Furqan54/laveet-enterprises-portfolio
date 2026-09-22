import { useLayoutEffect, useRef } from "react";
import type { Project } from "../../types/project";
import { gsap } from "../../lib/gsap";

interface ProjectShowcaseProps {
  project: Project;
  index?: number;
}

function ProjectShowcase({
  project,
  index = 0,
}: ProjectShowcaseProps) {
  const showcaseRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!showcaseRef.current) return;

    const context = gsap.context(() => {
      /*
       * =========================================================
       * PROJECT NUMBER
       * =========================================================
       */

      gsap.from(".showcase-number", {
        y: 30,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 82%",
          end: "top 65%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * IMAGE / VISUAL
       * =========================================================
       */

      gsap.from(".showcase-visual", {
        scale: 0.92,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 78%",
          end: "top 40%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * IMAGE PARALLAX
       * =========================================================
       */

      gsap.to(".showcase-visual-inner", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /*
       * =========================================================
       * PROJECT TITLE
       * =========================================================
       */

      gsap.from(".showcase-title-line", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.06,
        ease: "power4.out",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 70%",
          end: "top 42%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * PROJECT META
       * =========================================================
       */

      gsap.from(".showcase-meta", {
        y: 25,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 62%",
          end: "top 42%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * DIVIDER
       * =========================================================
       */

      gsap.from(".showcase-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "power3.out",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 65%",
          end: "top 48%",
          scrub: 1,
        },
      });
    }, showcaseRef);

    return () => context.revert();
  }, []);

  /*
   * Split title into readable lines.
   * We deliberately keep the source title intact in the data.
   */
  const titleWords = project.title.split(" ");

  const titleLines: string[] = [];

  for (let i = 0; i < titleWords.length; i += 5) {
    titleLines.push(titleWords.slice(i, i + 5).join(" "));
  }

  return (
    <section
      ref={showcaseRef}
      className="relative overflow-hidden py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* =====================================================
            PROJECT NUMBER
            ===================================================== */}

        <div className="showcase-number text-label mb-8 flex items-center gap-4 text-[var(--color-text-subtle)]">
          <span className="h-px w-10 bg-[var(--color-border-strong)]" />

          {String(index + 1).padStart(2, "0")}
        </div>

        {/* =====================================================
            MAIN LAYOUT
            ===================================================== */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ===================================================
              VISUAL
              =================================================== */}

          <div className="lg:col-span-7">
            <div className="showcase-visual relative aspect-[4/3] overflow-hidden bg-[#151515]">
              <div className="showcase-visual-inner absolute inset-[-8%]">
                {/* Architectural fallback visual.
                    Actual project photography will be connected
                    when photo mapping is finalized. */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,0.12),transparent_28%)]" />

                <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:70px_70px]" />

                <div className="absolute left-[15%] top-[18%] h-[64%] w-[32%] border border-white/10" />

                <div className="absolute left-[48%] top-[8%] h-[78%] w-[22%] border border-white/[0.07]" />

                <div className="absolute bottom-[12%] left-[8%] h-px w-[84%] bg-white/10" />

                <div className="absolute bottom-[18%] left-[20%] h-[28%] w-[52%] border border-white/[0.08]" />

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/70" />

                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <span className="text-label text-white/40">
                    LAVEET / {project.id}
                  </span>

                  <span className="text-label text-white/30">
                    PROJECT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              PROJECT INFORMATION
              =================================================== */}

          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              {/* Category */}

              <p className="showcase-meta text-label mb-7 text-[var(--color-text-subtle)]">
                {project.category}
              </p>

              {/* Title */}

              <h3 className="mb-8 text-[clamp(2.4rem,4.5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                {titleLines.map((line, lineIndex) => (
                  <span
                    key={`${project.id}-line-${lineIndex}`}
                    className="showcase-title-line block overflow-hidden"
                  >
                    <span className="block">{line}</span>
                  </span>
                ))}
              </h3>

              {/* Location */}

              <p className="showcase-meta max-w-md text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                {project.location}
              </p>
            </div>

            {/* =================================================
                PROJECT METADATA
                ================================================= */}

            <div className="showcase-meta mt-14">
              <div className="showcase-divider mb-7 h-px w-full bg-[var(--color-border)]" />

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-label mb-2 text-[var(--color-text-subtle)]">
                    Contract Value
                  </p>

                  <p className="text-sm text-[var(--color-text)] md:text-base">
                    {project.amount}
                  </p>
                </div>

                <div>
                  <p className="text-label mb-2 text-[var(--color-text-subtle)]">
                    Status
                  </p>

                  <p className="text-sm text-[var(--color-text)] md:text-base">
                    {project.status}
                  </p>
                </div>

                {project.period && (
                  <div>
                    <p className="text-label mb-2 text-[var(--color-text-subtle)]">
                      Period
                    </p>

                    <p className="text-sm text-[var(--color-text)] md:text-base">
                      {project.period}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;