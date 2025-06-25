let tl = gsap.timeline();
let menu = document.querySelector("nav i");
let cross = document.querySelector("aside i");

tl.to("aside", {
  right: 0,
  display: "flex",
  duration: 0.3,
});
tl.from("aside p", {
  x: 150,
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
});
tl.from("aside i", {
  opacity: 0,
  duration: 0.2,
});
tl.pause();
menu.addEventListener("click", function () {
  tl.play();
});
cross.addEventListener("click", function () {
  tl.reverse();
});

const splitText = () => {
  let h2 = document.querySelector("#page1 h2");
  let h2Text = h2.textContent.split("");

  let halfValue = h2Text.length / 2;
  let storedText = "";

  h2Text.forEach((letter, index) => {
    if (index < halfValue) {
      storedText += `<span class="left">${letter}</span>`;
    } else {
      storedText += `<span class="right">${letter}</span>`;
    }
  });
  h2.innerHTML = storedText;
};
splitText();

gsap.from("#page1 h2 .left", {
  y: 100,
  duration: 1.5,
  delay: 0.5,
  stagger: 0.3,
  opacity: 0,
  color: "white",
});
gsap.from("#page1 h2 .right", {
  y: 100,
  duration: 1.5,
  delay: 0.5,
  stagger: -0.3,
  opacity: 0,
  color: "white",
});

gsap.from("#page2 h2", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    scrub: 2,
  },
});

gsap.to("#page3 h2", {
  transform: "translateX(-78%)",
  color: "rgba(0, 255, 0, 0.67)",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    //  markers: true,
    start: "top 0%",
    end: "bottom -120%",
    scrub: 1,
    pin: true,
  },
});

var initialPath = `M 10 150 Q 400 150 780 150`;
var finalPath = `M 10 150 Q 400 150 780 150`;
var string = document.getElementById("string");

string.addEventListener("mousemove", function (dets) {
  initialPath = `M 10 150 Q ${dets.offsetX} ${dets.offsetY} 780 150`;

  gsap.to("svg path", {
    attr: {
      d: initialPath,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function (e) {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

window.addEventListener("mousemove", function (e) {
  gsap.to("#follower circle", {
    attr: {
      cx: e.clientX,
      cy: e.clientY,
    },
    duration: 0.2,
    opacity: 1,
    ease: "power2.out",
  });
});
