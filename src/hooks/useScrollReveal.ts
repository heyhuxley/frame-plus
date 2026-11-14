"use client"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (trigger: string) => {
	return useGSAP(() => {
		if (typeof window === "undefined") return;
		
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger,
					start: "top bottom",
					end: "top center",
					scrub: 0.5
				},
			})
			
			tl.from(trigger, {
				opacity: 0,
				yPercent: 5,
				ease: "linear",
			})
		})
		return () => ctx.revert()
	}, {dependencies: [trigger]})
}

export default useScrollReveal