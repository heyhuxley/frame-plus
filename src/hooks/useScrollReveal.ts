"use client"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (trigger: string) => {
	return useGSAP(() => {
		if (typeof window === "undefined") return;
		
		gsap.from(trigger, {
			opacity: 0,
			yPercent: 5,
			ease: "linear",
			scrollTrigger: {
				trigger,
				start: "top bottom",
				end: "top center",
				scrub: 0.5
			},
		})
	}, {dependencies: [trigger]})
}

export default useScrollReveal