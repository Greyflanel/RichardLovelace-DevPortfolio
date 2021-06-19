import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
  console.log("playing video");
}

let timeline = gsap.timeline({
  repeat: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#fourth-section",
    start: "top 15%",
  },
});

function scrollAnimation() {
  timeline
    .set(".smoke-vid, .smoke-text", {
      opacity: 0,
    })
    .set(".smoke-text", {
      y: 0,
    })
    .call(playVideo, ["smokey"])
    .to(".smoke-vid", {
      duration: 3,
      autoAlpha: 0.9,
    })
    .to(
      ".smoke-text",
      {
        delay: 6.2,
        duration: 24,
        autoAlpha: 1,
      },
      "-=6"
    )
    .to(
      ".smoke-vid",
      {
        y: 10,
        duration: 3.5,
      },
      "-=25"
    )
    .to(
      ".smoke-vid",
      {
        y: 18,
        duration: 3,
      },
      "-=26"
    )
    .to(
      ".smoke-vid",
      {
        y: 45,
        duration: 5.5,
      },
      "-=26.5"
    )
    .to(
      ".smoke-vid",
      {
        y: -35,
        duration: 7,
      },
      "-=4"
    )
    .to(
      ".smoke-vid",
      {
        y: -35,
        duration: 5,
      },
      "-=27"
    )
    .to(
      ".smoke-text",
      {
        y: 55,
        duration: 5.5,
      },
      "-=27"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "-=23"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
      },
      "-=21.8"
    ).to(".contact-name", {
      autoAlpha: 1,
      duration: 1.5,
    }, "-=21");
}

scrollAnimation();

