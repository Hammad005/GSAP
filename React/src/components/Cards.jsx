import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cards = () => {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from([card1Ref.current, card2Ref.current], {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      delay: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: [card1Ref.current, card2Ref.current],
        scroller: "body",
        scrub: 2,
        start: "top 100%",
        end: "bottom 80%",
      },
    });
    gsap.from([card3Ref.current, card4Ref.current], {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      delay: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: [card3Ref.current, card4Ref.current],
        scroller: "body",
        scrub: 2,
        start: "top 100%",
        end: "bottom 80%",
      },
    });
  });
  return (
    <>
      <section className="w-full lg:px-23 px-4 md:mt-22 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="flex items-center justify-between border-2 border-b-10 border-black border-b-black rounded-4xl  p-6"
          >
            <div className="flex flex-col gap-18 w-full">
              <div>
                <h2 className="md:text-4xl text-xl font-bold bg-lime-300 rounded-md p-2 w-fit">
                  Search engine
                </h2>
                <h2 className="md:text-4xl text-xl font-bold bg-lime-300 rounded-md p-2 w-fit">
                  optimization
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-black rounded-full p-1">
                  <ArrowUpRight className="text-white size-7" />
                </div>
                <p className="text-lg font-semibold">Learn More</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <img
                src="/services.svg"
                alt="services"
                className="md:w-[200px] w-[120px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="flex items-center bg-black justify-between border-2 border-b-10 border-black border-b-black rounded-4xl  p-6"
          >
            <div className="flex flex-col gap-18 w-full">
              <div>
                <h2 className="md:text-4xl text-xl font-bold bg-white rounded-md p-2 w-fit">
                  Pay per click
                </h2>
                <h2 className="md:text-4xl text-xl font-bold bg-white rounded-md p-2 w-fit">
                  advertising
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full p-1">
                  <ArrowUpRight className="text-black size-7" />
                </div>
                <p className="text-lg font-semibold text-white">Learn More</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
              <img
                src="/pay.svg"
                alt="services"
                className="md:w-[200px] w-[120px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className="flex items-center bg-black justify-between border-2 border-b-10 border-black border-b-black rounded-4xl  p-6"
          >
            <div className="flex flex-col gap-18 w-full">
              <div>
                <h2 className="md:text-4xl text-xl font-bold bg-white rounded-md p-2 w-fit">
                  Social media
                </h2>
                <h2 className="md:text-4xl text-xl font-bold bg-white rounded-md p-2 w-fit">
                  marketing
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full p-1">
                  <ArrowUpRight className="text-black size-7" />
                </div>
                <p className="text-lg font-semibold text-white">Learn More</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
              <img
                src="/social.svg"
                alt="services"
                className="md:w-[200px] w-[120px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={card4Ref}
            className="flex items-center justify-between border-2 border-b-10 border-black border-b-black rounded-4xl  p-6"
          >
            <div className="flex flex-col gap-18 w-full">
              <div>
                <h2 className="md:text-4xl text-xl font-bold bg-lime-300 rounded-md p-2 w-fit">
                  E-mail
                </h2>
                <h2 className="md:text-4xl text-xl font-bold bg-lime-300 rounded-md p-2 w-fit">
                  marketing
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-black rounded-full p-1">
                  <ArrowUpRight className="text-white size-7" />
                </div>
                <p className="text-lg font-semibold">Learn More</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <img
                src="/email.jpeg"
                alt="services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
