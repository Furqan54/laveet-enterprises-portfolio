import Lenis from "lenis";

export function createLenis() {
  return new Lenis({
    autoRaf: true,
    smoothWheel: true,
  });
}