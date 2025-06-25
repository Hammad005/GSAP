import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Services = () => {
  const ref = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        scroller: "body",
        scrub: 2,
        start: "top 100%",
        end: "bottom 80%",
      },
    });
    tl.to(ref.current.children[1], {
      width: "11.5rem",
      opacity: 1,
      delay: 1.5,
      duration: 1.6,
      ease: "power3.out",
    }).from(ref.current.children[2], {
      x: -150,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  return (
    <>
      <section className="w-full lg:px-23 px-4 my-12">
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-center items-start md:gap-10 gap-3 relative"
        >
          <h2 className="text-3xl py-2 px-8 font-bold z-50">Services</h2>
          <div className="bg-lime-300 h-14 rounded absolute" />
          <p className="md:w-[40%]">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
