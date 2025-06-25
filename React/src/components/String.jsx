import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const String = () => {
  const ref = useRef();
  const pathRef = useRef();

  useGSAP(() => {
    const finalPath = `M 10 150 Q 500 150 980 150`;

    const handleMouseMove = (e) => {
      const bounds = ref.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const path = `M 10 150 Q ${x} ${y} 980 150`;

      gsap.to(pathRef.current, {
        attr: { d: path, stroke: "rgb(135, 197, 36)" },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: finalPath, stroke: "black" },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    const container = ref.current;
    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-[300px] flex items-center justify-center"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 10 150 Q 500 150 980 150"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default String;
