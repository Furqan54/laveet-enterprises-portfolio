import Hero from "../../sections/Hero/Hero";
import FeaturedProjects from "../../sections/FeaturedProjects/FeaturedProjects";
import AboutIntro from "../../sections/AboutIntro/AboutIntro";
import Capabilities from "../../sections/Capabilities/Capabilities";

function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--color-bg)]">
      {/* =====================================================
          01 — HERO
          ===================================================== */}

      <Hero />

      {/* =====================================================
          02 — SELECTED WORK + PROJECT SHOWCASE
          ===================================================== */}

      <FeaturedProjects />

      {/* =====================================================
          03 — ABOUT LAVEET
          ===================================================== */}

      <AboutIntro />

      {/* =====================================================
          04 — CAPABILITIES
          ===================================================== */}

      <Capabilities />

      {/* =====================================================
          05 — CONTACT CTA
          
          Coming in the next milestone.
          ===================================================== */}
    </main>
  );
}

export default Home;