"use client"

import useScrollReveal from "@/hooks/useScrollReveal";
import FilmLink from "@/components/ui/FilmLink";

const FullSchedule = () => {
	useScrollReveal("#full-schedule")
	
	return (
		<section id="full-schedule" className={"px-4 md:px-6 py-12"}>
			<div className="flex items-center justify-between text-frame-text">
				<h2 className="font-serif font-medium text-4xl tracking-[-0.02em] sm:text-5xl">Three Nights.</h2>
				<FilmLink>Full schedule</FilmLink>
			</div>
			
			<div className="">
			
			</div>
		</section>
	)
}
export default FullSchedule
