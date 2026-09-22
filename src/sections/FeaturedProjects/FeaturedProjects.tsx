import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import projects from "../../data/projects";
import ProjectShowcase from "../../components/projects/ProjectShowcase";

function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      /*
       * =========================================================
       * SECTION LABEL
       * =========================================================
       */

      gsap.from(".projects-label", {
        y: 30,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "top 62%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * MAIN HEADING
       * =========================================================
       */

      gsap.from(".projects-heading-line", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 48%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * DESCRIPTION
       * =========================================================
       */

      gsap.from(".projects-description", {
        y: 35,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          end: "top 48%",
          scrub: 1,
        },
      });

      /*
       * =========================================================
       * DIVIDER
       * =========================================================
       */

      gsap.from(".projects-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
          end: "top 48%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-[var(--color-bg)] px-5 pb-40 pt-32 md:px-10 md:pb-56 md:pt-48"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* =====================================================
            SECTION INTRODUCTION
            ===================================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* ===================================================
              LEFT — HEADING
              =================================================== */}

          <div className="md:col-span-8">
            <p className="projects-label text-label mb-8 text-[var(--color-text-subtle)]">
              Selected work
            </p>

            <h2 className="projects-heading max-w-5xl text-[clamp(3.2rem,7vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              <span className="projects-heading-line block overflow-hidden">
                Work that shapes
              </span>

              <span className="projects-heading-line block overflow-hidden">
                places and
              </span>

              <span className="projects-heading-line block overflow-hidden">
                communities.
              </span>
            </h2>
          </div>

          {/* ===================================================
              RIGHT — DESCRIPTION
              =================================================== */}

          <div className="md:col-span-4 md:flex md:items-end">
            <p className="projects-description max-w-sm text-sm leading-7 text-[var(--color-text-muted)] md:ml-auto md:text-base">
              A selection of documented civil, government, residential,
              educational and infrastructure work.
            </p>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <div className="projects-divider mt-24 h-px w-full bg-[var(--color-border)]" />

        {/* =====================================================
            FEATURED PROJECTS
            ===================================================== */}

        <div className="mt-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;