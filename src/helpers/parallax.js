import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const home = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
      trigger: "#cards",
      start: "top top", 
      end: "bottom 150px",
      pin: "#cards-content"
    });
    
    ScrollTrigger.create({
      trigger: "#sponsors",
      start: "top center", 
      end: "+=200", // 200px past the start 
      pin: "#sponsors-content"
    });
}

export const topic = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".parallax-bg", {
    scrollTrigger: {
      scrub: true
    }, 
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
  });
  
}