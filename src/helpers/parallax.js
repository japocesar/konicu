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
  gsap.utils.toArray(".card").forEach((panel, i) => {
    const st = ( i === 0 ) ? "top center" : "bottom bottom"
    gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: st,
        end: "+=150",
        scrub: true,
        markers: false,
        // toggleClass: 'animate__rubberBand',
        onToggle: ({ isActive }) => animateNumber(panel, isActive),
      }
    });
  });

}

const animateNumber = ( panel, isActive ) => {
  panel.classList.toggle('animate__rubberBand');
  const title = panel.querySelector('h5');

  panel.addEventListener('animationend', () => {
    title.classList.toggle('animate__heartBeat');
  });
}