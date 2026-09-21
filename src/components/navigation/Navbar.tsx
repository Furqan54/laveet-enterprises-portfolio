function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-6">
      <nav className="flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-medium uppercase tracking-[0.2em]"
        >
          Laveet
        </a>

        <button
          type="button"
          className="text-sm uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}

export default Navbar;