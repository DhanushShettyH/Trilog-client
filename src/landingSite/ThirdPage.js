import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ThirdPage() {
  useEffect(() => {
    let t1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".two",
			scroller:".app",
			start: "50% 50%", //50% is .two div and , 50% is screen value
			end: "70% 50%",
			scrub: 1, //scrub is reverse animation
			// markers:true,
		  },
    });
    t1.to(".text-area-hover h1", {
      width: "100%",
	  duration:1,
	  
    });
	t1.to(".text-area-hover h2", {
		delay:1,
		width: "100%",
		duration:1,
		
	  });
  }, []);

  return (
    <div id="third" className=" h-[30vw] w-full">
      <div id="main" className=" w-full h-full">
        <div className="two relative w-full h-full bg-white flex pt-10 overflow-hidden ">
          <div className="text-area text-[6.5vw] font-[600] opacity-[0.2] left-[5%] absolute ">
            <h1 className=" text-[6vw]">Let's build Future Together </h1> 
            <h2 className=" text-[6vw]">Be a Parts of Emmerging Technology///\.</h2>
          </div>
          <div className="text-area-hover text-[6.5vw] font-[600] left-[5%] absolute overflow-hidden ">
		  <h1 className=" text-[6vw] w-0 text-nowrap overflow-hidden">Let's build Future Together </h1> 
		  <h2 className=" text-[6vw] w-0 text-nowrap overflow-hidden">Be a Parts of Emmerging <br/>Technology///\.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
