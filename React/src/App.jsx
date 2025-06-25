import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cards from "./components/Cards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import String from "./components/String";
import ThingsHappen from "./components/ThingsHappen";

const App = () => {
  useGSAP(() => {
    window.addEventListener("mousemove", function (e) {
      gsap.to("#follower circle", {
        attr: {
          cx: e.clientX,
          cy: e.clientY,
        },
        duration: 0.2,
        opacity: 1,
        ease: "bounce.out",
      });
    });
  });
  return (
    <>
      <main className="w-full h-full bg-[#e7e7e7] overflow-hidden">
        <svg
          id="follower"
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          width="100%"
          height="100%"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="rgb(135, 197, 36)"
            stroke-width="2"
            fill="transparent"
            opacity="0"
          />
        </svg>
        <Navbar />
        <Hero />
        <Services />
        <Cards />
        <String/>
        <ThingsHappen/>
      </main>
    </>
  );
};

export default App;
