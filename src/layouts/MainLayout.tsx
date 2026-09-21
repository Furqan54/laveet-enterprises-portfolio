import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;