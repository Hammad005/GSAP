import React, { useRef } from "react";
import { ChartNoAxesGantt, Sparkle, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const headingRef = useRef();
  const mainParaRef = useRef();
  const btnRef = useRef();

  const asideRef = useRef();
  const menuTlRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(headingRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.3,
      delay: 0.4,
      ease: "power2.out",
    }).from(mainParaRef.current.children, {
      opacity: 0,
      y: -100,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(btnRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.3,
      delay: 0.4,
      ease: "power2.out",
    });
  });

  const { contextSafe } = useGSAP();
  const handleMenu = contextSafe(() => {
    let tl = gsap.timeline({
      paused: true,
    });
    tl.to(asideRef.current, {
      top: 0,
      duration: 0.8,
      ease: "power2.out",
    }).from(asideRef.current.children, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.2,
    });

    menuTlRef.current = tl;
  });

  useGSAP(() => {
    handleMenu();
  });
  return (
    <>
      <nav className="w-full lg:px-23 px-4 py-6 flex items-center justify-between">
        <h2
          ref={headingRef}
          className="flex gap-1 items-center text-2xl font-semibold"
        >
          <Sparkle size={33} className="rotate-45 fill-black" />
          WizardZ
        </h2>
        <div
          ref={mainParaRef}
          className="lg:flex items-center justify-center gap-12 hidden "
        >
          <p className="text-sm font-semibold">About us</p>
          <p className="text-sm font-semibold">Services</p>
          <p className="text-sm font-semibold">Use Cases</p>
          <p className="text-sm font-semibold">Pricing</p>
          <p className="text-sm font-semibold">Blog</p>

          <button className="px-8 py-3 text-sm font-semibold border rounded-lg hover:bg-black hover:text-white cursor-pointer">
            Request a quote
          </button>
        </div>

        <div
          ref={btnRef}
          className="lg:hidden flex items-center justify-center gap-4"
        >
          <button
            onClick={() => menuTlRef.current?.play()}
            className="p-2 text-sm font-semibold border rounded-lg hover:bg-black hover:text-white cursor-pointer"
          >
            <ChartNoAxesGantt size={25} className="rotate-90" />{" "}
          </button>
        </div>
      </nav>

      <aside
        ref={asideRef}
        className="lg:hidden flex flex-col items-center justify-center gap-4 backdrop-blur h-screen w-full fixed top-[-100%] z-50 bg-black/10"
      >
        <p className="text-xl font-semibold">About us</p>
        <p className="text-xl font-semibold">Services</p>
        <p className="text-xl font-semibold">Use Cases</p>
        <p className="text-xl font-semibold">Pricing</p>
        <p className="text-xl font-semibold">Blog</p>

        <button className="px-8 py-3 text-xl font-semibold border rounded-lg hover:bg-black hover:text-white cursor-pointer">
          Request a quote
        </button>
        <button
          onClick={() => menuTlRef.current?.reverse()}
          className="absolute top-6 right-6 p-2 text-xl font-semibold border rounded-lg hover:bg-black hover:text-white cursor-pointer"
        >
          <X />
        </button>
      </aside>
    </>
  );
};

export default Navbar;
