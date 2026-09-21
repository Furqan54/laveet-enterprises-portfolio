import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-5 py-5 transition-all duration-500 md:px-10 md:py-7 ${
        scrolled ? "py-4 md:py-5" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a
          href="/"
          className="font-display text-sm font-medium uppercase tracking-[0.18em]"
        >
          Laveet
        </a>

        <div className="flex items-center gap-8">
          <a
            href="/projects"
            className="text-label hidden opacity-70 transition-opacity duration-300 hover:opacity-100 md:block"
          >
            Projects
          </a>

          <a
            href="/about"
            className="text-label hidden opacity-70 transition-opacity duration-300 hover:opacity-100 md:block"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-label opacity-70 transition-opacity duration-300 hover:opacity-100"
          >
            Contact
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="group flex h-10 w-10 items-center justify-center"
          >
            <span className="flex w-6 flex-col gap-1.5">
              <span className="block h-px w-full bg-current transition-transform duration-300 group-hover:translate-x-1" />
              <span className="block h-px w-4/5 bg-current transition-transform duration-300 group-hover:-translate-x-1" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;