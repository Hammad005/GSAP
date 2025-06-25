import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const ThingsHappen = () => {
    const ref = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 100%",
                end: "bottom 100%",
                scrub: 2,
            },
            opacity: 0,
            y: 200,
            duration: 1,
            delay: 1,
            ease: "power3.out",
        });
    })
  return (
    <>
      <section className="w-full lg:px-23 px-4 pb-15">
        <div ref={ref} className="flex items-center justify-between bg-white border-2 border-b-8 border-lime-300 rounded-4xl p-6">
          <div className="flex flex-col items-start justify-center w-full gap-6">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-nowrap">
              Let's make things happen
            </h1>
            <p className="lg:w-[80%] md:w-[70%]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="px-12 py-3 text-sm  border rounded-lg bg-black hover:bg-transparent border-black hover:text-black text-white cursor-pointer">
              Get your free proposal
            </button>
          </div>
          <div className="w-full md:flex items-center justify-center hidden">
            <img
              src="/invitation.svg"
              alt="services"
              className="w-[50%] h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThingsHappen;
