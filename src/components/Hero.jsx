import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">champloo</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-lead"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>An Okinawan word representing — </p>
              <p className="subtitle">
                Something <br /> Mixed
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Sometimes it's hard to capture the things of dreams.
              </p>
              <a href="#cocktails">wake up</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
