"use client"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (trigger: string) => {
	return useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger,
				start: "top bottom",
				end: "top center",
				scrub: 0.5
			},
		})
		
		tl.from("#the-program", {
			opacity: 0,
			yPercent: 5,
			ease: "linear",
		})
	}, {dependencies: [trigger]})
}

export default useScrollReveal