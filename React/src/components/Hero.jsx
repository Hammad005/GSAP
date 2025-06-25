import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const part1Ref = useRef();
  const part2Ref = useRef();

  const logosRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(part1Ref.current.children, {
      x: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      stagger: 0.2,
      ease: "power2.out",
    }).from(part2Ref.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(logosRef.current.children, {
      x: -100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: logosRef.current,
        scroller: "body",
        scrub: 2,
        start: "top 100%",
        end: "bottom 90%",
      },
    });
  });
  return (
    <>
      <section className="w-full lg:px-23 px-4 my-10 ">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div
            ref={part1Ref}
            className="w-full flex flex-col md:items-start items-center justify-center md:text-left text-center"
          >
            <h4 className="text-7xl font-medium">
              Navigating the digital landscape for success
            </h4>
            <p className="my-10 w-[90%]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing. and content creation.
            </p>
            <button className="px-12 py-3 text-sm  border rounded-lg bg-black hover:bg-transparent border-black hover:text-black text-white cursor-pointer">
              Book a consultation
            </button>
          </div>
          <div
            ref={part2Ref}
            className="w-full flex items-center justify-center md:mt-0 mt-10"
          >
            <img
              src={"/Hero.svg"}
              alt="hero-svg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          ref={logosRef}
          className="w-full flex md:flex-row flex-col items-center justify-between mt-10"
        >
          <img
            src={"/amazon.png"}
            alt="amazon"
            className="md:w-30 w-50 cursor-pointer h-auto object-contain mt-3"
          />
          <img
            src={"/dribble.png"}
            alt="dribble"
            className="md:w-30 w-50 cursor-pointer h-auto object-contain"
          />
          <img
            src={"/HubSpot.png"}
            alt="HubSpot"
            className="md:w-30 w-50 cursor-pointer h-auto object-contain"
          />
          <img
            src={"/notion.png"}
            alt="notion"
            className="md:w-30 w-50 cursor-pointer h-auto object-contain"
          />
          <img
            src={"/Netflix.png"}
            alt="Netflix"
            className="md:w-30 w-50 cursor-pointer h-auto object-contain"
          />
          <img
            src={"/zoom.png"}
            alt="zoom"
            className="md:w-30 w-50 cursor-pointer h-auto object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
