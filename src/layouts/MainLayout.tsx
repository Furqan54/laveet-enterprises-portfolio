import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import SmoothScroll from "../components/motion/SmoothScroll";

function MainLayout() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--color-bg)] text-white">
        <Navbar />

        <main>
          <Outlet />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default MainLayout;