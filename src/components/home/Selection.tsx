"use client"

import {films} from "@/lib/mock-data";
import FilmCard from "@/components/ui/FilmCard";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger)

const Selection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	
	useGSAP(
		() => {
			gsap.from(".film-card", {
				opacity: 0,
				y: 40,
				ease: "back.inOut",
				duration: 0.6,
				stagger: 0.08,
				clearProps: "all",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 85%",
					once: true,
				},
			})
		},
		{scope: containerRef, dependencies: [films]}
	)
	
	useScrollReveal("#selection")
	
	return (
		<section id="selection" className={"py-20 flex flex-col gap-8"}>
			<div className="px-4 md:px-6 flex items-center justify-between">
				<div className="">
					<h2 className={"font-serif font-medium text-frame-text text-4xl tracking-[-0.02em] sm:text-5xl"}>
						This Edition’s Selection.
					</h2>
					<p className={"mt-3 text-sm text-muted"}>8 films. Three nights. Chosen from 1,412 submissions.</p>
				</div>
			</div>
			
			<div ref={containerRef} id="selections"
			     className="px-4 md:px-6 flex gap-6 overflow-x-scroll overflow-y-hidden scrollbar-none py-3">
				{films.map((film) => (
					<FilmCard key={film.id} {...film} />
				))}
			</div>
		</section>
	)
}
export default Selection
