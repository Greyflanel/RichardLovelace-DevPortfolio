import "./nav";
import "./gsap";
import gsap from "gsap";
import BlackClover from "./static/black-clover-pub-video.mp4";
import MyPortfolioVideo from "./static/richardlovelace-portfolio.mp4";
import Github from "./static/github.svg";
import Github2 from "./static/github.svg";
import NewLogo from "./static/new-logo-color.webp";
import Html from "./static/html-logo.webp";
import Css from "./static/css-logo.webp";
import React from "./static/react-logo.webp";
import Gsap from "./static/gsap-logo.webp";
import NodeJs from "./static/node-logo.webp";
import Js from "./static/js-logo.png";
import Postgres from "./static/postgres-logo.webp";
import Knex from "./static/knex-icon.webp";
import Python from "./static/python-logo.webp";
import My_Avatar from "./static/me.webp";
import SmokeVid from "./static/grape-smoke.mp4";
import LinkedIn from "./static/linkedin.svg";
import Github3 from "./static/github3.svg";



var mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 280px)"),
];
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});



window.onload = function () {
  function mediaqueryresponse(mql) {
    let tl2 = gsap.timeline({ repeat: 0, delay: 0.5 });
    let tl3 = gsap.timeline({ repeat: 0 });
    
    let letters = document.querySelectorAll(".letter");

    tl3
      .set(
        ".content",
        { xPercent: 10, filter: "brightness(105%)", opacity: 1 },
        "-=1"
      )
      .to(
        ".content",
        {
          duration: 10,
        },
        "-=2"
      );
    tl2
      .set(letters, {
        visibility: "visible",
        opacity: 0,
      })
      .to(
        letters,
        {
          duration: 2,
          opacity: 1,
          filter: "brightness(105%)",
        },
        "+=0.1"
      )
      .to(
        letters,
        {
          filter: "brightness(0%)",
          stagger: {
            from: "edges",
            each: 0.04,
            repeat: 8,
            yoyo: true,
          },
        },
        "-=0.5"
      )
      .to(letters, {
        delay: 0.2,
        
        filter: "brightness(100%)",
        duration: 4,
      });
  }

document.getElementById("black-clover-vid").src = BlackClover;
document.getElementById("portfolio-vid").src = MyPortfolioVideo;
document.getElementById("github").src = Github;
document.getElementById("github2").src = Github2;
document.getElementById("dev-logo").src = NewLogo;
document.getElementById("html5-logo").src = Html;
document.getElementById("css-logo").src = Css;
document.getElementById("react-logo").src = React;
document.getElementById("gsap-logo").src = Gsap;
document.getElementById("node-logo").src = NodeJs;
document.getElementById("js-logo").src = Js;
document.getElementById("postgres-logo").src = Postgres;
document.getElementById("knex-logo").src = Knex;
document.getElementById("python-logo").src = Python;
document.getElementById("my-avatar").src = My_Avatar;
document.getElementById("smokey").src = SmokeVid;
document.getElementById("linked-in").src = LinkedIn;
document.getElementById("links").src = Github3;

  for (let i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]);
    mqls[i].addEventListener(mediaqueryresponse, {});
  }
};
