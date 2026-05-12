import { motion } from "framer-motion";
import { Home } from "../components/Home";
import { socialLinks } from "../constants/navitems";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Main Content */}
      <main className="grid grid-cols-[1fr_min(940px,_100%)_1fr] px-6">
        <div></div>
        <div className="py-8">
          <Home />
        </div>
        <div></div>
      </main>
    </div>
  );
};
