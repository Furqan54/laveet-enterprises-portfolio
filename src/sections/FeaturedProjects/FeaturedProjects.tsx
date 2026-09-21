function FeaturedProjects() {
  return (
    <section className="relative bg-[var(--color-bg)] px-5 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-label mb-6 text-[var(--color-text-subtle)]">
              Selected work
            </p>

            <h2 className="text-heading max-w-3xl">
              Work that shapes places and communities.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[var(--color-text-muted)]">
            A selection of documented civil, government, residential,
            educational and infrastructure work.
          </p>
        </div>

        <div className="grid min-h-[60vh] place-items-center border-t border-[var(--color-border)]">
          <p className="text-label text-[var(--color-text-subtle)]">
            Projects coming into view
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;