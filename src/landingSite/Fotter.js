import gsap from 'gsap'
import React, { useEffect } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Fotter() {
	useEffect(() => {
		let t1 = gsap.timeline({
			scrollTrigger:{
				trigger:"#footer",
				scroller:".app",
				start:"-10% top",
				end:"top top",
				scrub:4,
			
			}
		})

		t1.to("#fhead",{
			delay:1,
			y:-220,
			duration:1,
		})
		.to("#fside",{
			y:-230
			,duration:1,
		})
	}, [])
	
  return (
	<div id='footer' className=' relative h-screen w-full text-white bg-black flex items-end p-5 flex-col justify-end text-center overflow-hidden'>
		<div className=' absolute w-full  bottom-[-30%]'>
		<h2 id='fhead' className=' text-[100px] font-bold w-full flex items-center justify-center '>SIGN UP AND<br/> BE IN TOUCH.</h2>
		<div id='fside' className=' flex justify-between w-full'>
			<p>Copyright © 2024 TermsFeed®</p>
			<h2 className=' font-bold text-[40px] hover:scale-75 transition-all duration-200 ease-in-out '><a href="#home">Back to Top</a></h2>
			<p>dhanushtruth@gmail.com</p>
		</div>
		</div>
	  
	</div>
  )
}
