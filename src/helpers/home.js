import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

export const parallaxEffect = () => {

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