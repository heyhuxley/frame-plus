"use client"

import useScrollReveal from "@/hooks/useScrollReveal";
import {films} from "@/lib/mock-data";
import FilmCard from "@/components/ui/FilmCard";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Selection = () => {
	useScrollReveal("#selection")
	
	// useGSAP(() => {
	// 	gsap.from(".film-card", {
	// 		opacity: 0,
	// 		yPercent: -10,
	// 		scrollTrigger: {
	// 			trigger: "#selections",
	// 			start: "top center",
	// 			scrub: 0.5
	// 		},
	// 		stagger: 0.25
	// 	})
	//
	// }, [])
	
	
	return (
		<section id="selection" className={"px-4 md:px-6 py-20 flex flex-col gap-8"}>
			<div className="flex items-center justify-between">
				<div className="">
					<h2 className={"font-serif font-medium text-frame-text text-4xl tracking-[-0.02em] sm:text-5xl"}>
						This Edition’s Selection.
					</h2>
					<p className={"mt-3 text-sm text-muted"}>8 films. Three nights. Chosen from 1,412 submissions.</p>
				</div>
			</div>
			
			<div id="selections" className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-none py-3">
				{films.map((film) => (
					<FilmCard key={film.id} {...film} />
				))}
			</div>
		</section>
	)
}
export default Selection
