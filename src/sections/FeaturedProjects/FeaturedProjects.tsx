import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".projects-label", {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 55%",
          scrub: 1,
        },
      });

      gsap.from(".projects-heading", {
        y: 100,
        opacity: 0,
        scale: 0.97,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 45%",
          scrub: 1,
        },
      });

      gsap.from(".projects-description", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          end: "top 45%",
          scrub: 1,
        },
      });

      gsap.from(".projects-line", {
        scaleX: 0,
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 45%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 -mt-[8vh] bg-[var(--color-bg)] px-5 pb-40 pt-32 md:px-10 md:pb-56 md:pt-48"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-24 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="projects-label text-label mb-7 text-[var(--color-text-subtle)]">
              Selected work
            </p>

            <h2 className="projects-heading text-heading max-w-5xl">
              Work that shapes places and communities.
            </h2>
          </div>

          <p className="projects-description max-w-sm text-sm leading-7 text-[var(--color-text-muted)]">
            A selection of documented civil, government, residential,
            educational and infrastructure work.
          </p>
        </div>

        <div className="projects-line h-px w-full bg-[var(--color-border)]" />

        <div className="flex min-h-[55vh] items-center justify-center">
          <p className="text-label text-[var(--color-text-subtle)]">
            Selected projects
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;