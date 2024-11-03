import React, { useEffect } from "react";
import "./css/SecondPage.css";
import vb from "./assets/img/vb.svg";
import img1 from "./assets/img/01.jpg";
import img2 from "./assets/img/2.jpg";
import img3 from "./assets/img/03.jpg";
import img4 from "./assets/img/04.jpg";
import img5 from "./assets/img/5.jpg";
import img6 from "./assets/img/6.jpg";
import img7 from "./assets/img/7.jpg";
import img8 from "./assets/img/8.jpg";
import img9 from "./assets/img/02.jpg";
import gsap from "gsap";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SecondPage() {

  useEffect(() => {
	let t2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".img1 img",
			toggleActions:"restart pause resume complete",
			//             onenter onleave onenterback onleaveback
			scroller: ".app",
			start:400,
			end:200,
			scrub:9,
		  },
	  });

	  gsap.to(".logo", {
		y: -220,
		opacity: 100,
		duration:0.5,
		scrollTrigger: {
		  trigger: ".logo",
		  scroller: ".app",
		  start:400,
		  end:200,
		  scrub:2,
		},
	  });
	  gsap.to(".elmt", {
		y: -150,
		stagger: 0.2,
		opacity: 100,
		duration:0.5,
		scrollTrigger: {
		  trigger: ".elmt",
		  scroller: ".app",
		  start:400,
		  end:200,
		  scrub:2,
		},
	  });
    t2.from(".img1 img", {
      y: 500,
      scale: 1.4,
      stagger: 0.2,
      opacity: 0,
      duration:1,
	  scrollTrigger: {
		trigger: ".img1 img",
		toggleActions:"restart pause resume complete",
		//             onenter onleave onenterback onleaveback
		scroller: ".app",
		start:400,
		end:200,
		scrub:9,
	  },
	  
    });
	t2.to(".img1 img",  {

      y: -200,
      stagger: 0.2,
      duration:2,
	 
      
    })
      t2.to(".img1 img",  {
        y: -400,

		duration:2,
        stagger: 0.2,
      })
      t2.to(".img1 img",  {
        y: -600,
	
		duration:2,
        stagger: 0.2,
      })
      t2.to(".img1 img",  {
        y: -800,
		
		duration:2,
        stagger: 0.2,
      });
  }, []);

  return (
    <section>
      <div className="container pl-10 w-[100%] h-screen m-auto overflow-hidden relative">
        <div className="menu my-[15px] mx-[0px] ">
          <div className="logo absolute opacity-0 bottom-[55%] md:bottom-[50%]">
            <p className=" font-bold text-[30px]">
              Trilog{" "}
            </p>{" "}
          </div>
        </div>
        <div className="wrapper w-full grid grid-cols-12">
          <div className="lwrap w-[90%] col-span-5">
            <h1 className="absolute opacity-0 bottom-[35%] md:bottom-[30%] w-[400px] md:w-[500px] elmt text-[50px] font-semibold capitalize leading-[110%] text-[rgba(20,19,19,1)] mt-[40px]">
              The Future of <span className=" font-bold">Technology</span> is
              way to better than anything
            </h1>
            <p className="absolute opacity-0 bottom-[22%] md:bottom-[17%] w-[400px] md:w-[500px] elmt p-[20px 80px 30px 0px]">
             be a part of rising star, and explore new
              people everyday share your opinion and embrase others.
            </p>
            <div className="absolute opacity-0 bottom-[15%] md:bottom-[10%] w-[400px] md:w-[500px] elmt button grid grid-cols-12 gap-[20px] mt-[30px]">
              <Link
                className=" col-span-3 place-items-center bg-black text-white h-[50px] hover:scale-110 transition-all ease-in-out duration-150 text-[18px] relative font-semibold rounded-full text-center justify-center flex animate-pulse"
                to="/login"
              >
                Login in
              </Link>
              <div className="hidden vbtn col-span-4 md:flex place-items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-150">
                <img className=" w-[35px]" src={vb} alt="" />
                <a className=" text-[20px] p-0 bg-transparent text-black" href="#third">Scroll down</a>
              </div>
            </div>
          </div>
          <div className="rwrap md:flex  justify-end col-span-7 hidden ">
            <div className="img1">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
            <div className="img1">
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
            <div className="img1">
              <img src={img7} alt="" />
              <img src={img8} alt="" />
              <img src={img9} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
