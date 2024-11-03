import React, { useEffect, useState } from "react";
import gsap from "gsap";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";
import photo6 from "./assets/photo6.jpg";
import photo7 from "./assets/photo7.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/FrontPage.css";
import { Link } from "react-router-dom";
import SecondPage from "./SecondPage";

gsap.registerPlugin(ScrollTrigger);



export default function FrontPage() {
	const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
	const [image, setimage] = useState(photo1);
  
	const getimage = () => {
	  let show = images[Math.floor(Math.random() * images.length)];
	  setimage(show);
	};
  
	setInterval(() => {
	  if (
		parseInt(document.getElementsByClassName("overlay")[0]?.style.top) === 0
	  ) {
		getimage();
	  }
	}, 700);
  
	useEffect(() => {
	  var tl = gsap.timeline({
		repeat: -1, //infinite repeate
	  });
  
	  // eslint-disable-next-line no-unused-expressions
  
	  tl.to(".overlay", {
		delay: 3,
		top: 0,
		duration: 0.5,
	  })
		.to(".overlay", {
		  top: "-110%",
		  duration: 0.5,
		  delay: 0.5,
		})
		.to(".overlay", {
		  top: "110%",
		  delay: 2,
		  duration: 0,
		});
		gsap.to("#elem1 h1", {
			x: -200,
			scrollTrigger: {
			  trigger: "#elem1 h1",
			  scroller: ".app",
			  start: "top -5%",
			  end: "top -90%",
			  scrub: 3,
			},
		  });
		  gsap.to("#elem2 h1", {
			x: 200,
			scrollTrigger: {
			  trigger: "#elem1 h1",
			  scroller: ".app",
			  start: "top -5%",
			  end: "top -90%",
			  scrub: 5,
			},
		  });
	  
		  gsap.to("#elem1 h5", {
			x: 200,
			scrollTrigger: {
			  trigger: "#elem1 h1",
			  scroller: ".app",
			  start: "top -5%",
			  end: "top -90%",
			  scrub: 3,
			},
		  });
		  gsap.to("#elem2 h5", {
			x: -200,
			scrollTrigger: {
			  trigger: "#elem1 h1",
			  scroller: ".app",
			  start: "top -5%",
			  end: "top -90%",
			  scrub: 5,
			},
		  });
	  
		  gsap.to("#bg", {
			scrollTrigger: {
			  trigger: "#bg",
			  scroller: ".app",
			  start: "top -5%",
			  end: "top -90%",
			  scrub: 3,
			},
			opacity: 0.5,
		  });
  
	 
	}, []);
  
	return (
	  <section >
		<div id="page1" className={`h-screen w-full bg-cover bg-bottom`}>
		  <div id="page1-in" className=" h-full relative z-[99]">
			<div className="elem" id="elem1">
			  <h1>Express Yourself</h1>
			  <h5 className="invisible md:visible">Unleash Your Social Side</h5>
			  <div className="overlay" id="overlay1"></div>
			</div>
			<div className="elem" id="elem2">
			  <h5 className="invisible md:visible">Discover</h5>
			  <h1>Connect with Others</h1>
			  <div className="overlay" id="overlay1"></div>
			</div>
			<div className="elem" id="elem1">
			  <h1>Your Social Journey</h1>
			  <h5 className="invisible md:visible">Share Life</h5>
			  <div className="overlay" id="overlay1"></div>
			</div>
			<div className="elem" id="elem2">
			  <h5 className="invisible md:visible">Begin here.</h5>
			  <h1>Starts Here.</h1>
			  <div className="overlay" id="overlay1"></div>
			</div>
		  </div>
  
		  <div id="page1-img" className=" h-screen w-full absolute top-0 z-[-2]">
			<img
			  src={image}
			  alt="photo1"
			  className=" h-full w-full object-cover object-bottom"
			/>
		  </div>
  
		  <div
			id="bg"
			className=" h-screen w-full absolute  bg-black top-0 z-[100] opacity-0"
		  ></div>
		</div>
  
		
	  </section>
	);
  }
  