import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import img from './assets/logobottom.jpg'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function ForthPage() {
	useEffect(() => {
		let t1 = gsap.timeline({
			scrollTrigger:{
				trigger:"#main2",
				scroller:".app",
				
				start:"50% 50%",
				end:"100% 50%",
				scrub:2,
				pin:true,                  //if pin:true  page is still there until animation is complerted
			}
		})
	
		t1.to("#top",{
			top:"-50%"
	
		},'a')                               //'a' is name given to top and bottom same because to animate both same time if not given thay animated one by one
		.to("#bottom",{
			bottom:"-50%"
	
		},'a')
		.to("#top-h",{
			top:"80%"
	
		},'a')
		.to("#bottom-h",{
			top:"-100%"
	
		},'a')
		.to(".content",{
			marginTop:"5%",
	
		},'a')
	}, [])
	
  return (
    <div id="main2" className=" z-50 h-screen w-full relative bg-slate-500 ">
      <div id="top" className=" w-full h-[50%] bg-white absolute top-0 overflow-hidden z-10">
		<h1 id="top-h" className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 text-[15vw]  ">Tryangle</h1>
	  </div>

      <div id="center " className=" w-full h-screen bg-black relative">
		<div className="content w-full h-full items-center justify-center flex text-[2vw] mt-[100vh] absolute flex-col text-white px-[20%]">
			<h2 className=" text-white font-bold text-[50px]">
				@ Trilog
			</h2>
			<p>
			Trilog is a revolutionary social media platform that redefines the way users share their experiences through pictures and engage with their community. With Trilog, capturing moments and sharing them with friends and followers is not only seamless but also incredibly intuitive.
			</p>
			<img src={img} className=" h-[40%] w-[30%]" alt="logo" />
		</div>
	  </div>

      <div id="bottom" className=" w-full h-[50%] bg-white absolute bottom-0 overflow-hidden ">
	  <h1 id="bottom-h" className="absolute left-[50%] transform -translate-x-1/2 text-[15vw] top-[-50%]">Tryangle</h1>
	  </div>
    </div>
  );
}
