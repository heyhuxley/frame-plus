"use client"

import {steps} from "@/lib/shared";
import useScrollReveal from "@/hooks/useScrollReveal";

const HowItWorks = () => {
	useScrollReveal("#how-it-works")
	
	return (
		<section id="how-it-works" className="px-4 md:px-6 py-12 flex flex-col gap-10">
			<h2 className={"font-serif font-medium text-frame-text text-4xl tracking-[-0.02em] sm:text-5xl"}>
				How It Works.
			</h2>
			
			<div className="border-t border-frame-text">
				{steps.map(({step, title, description}) => (
					<div key={description}
					     className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-frame-text/15 py-7 sm:grid-cols-[96px_minmax(0,220px)_minmax(0,1fr)] sm:items-baseline sm:gap-8 text-frame-text">
						<span
							className="font-serif font-semibold text-2xl tabular-nums text-frame-accent sm:text-3xl">{step}</span>
						<h3 className="font-serif text-2xl tracking-[-0.02em] sm:text-3xl">{title}</h3>
						<p className="col-start-2 max-w-md text-[15px] leading-relaxed text-frame-text/85 sm:col-start-auto">{description}</p>
					</div>
				))}
			</div>
		</section>
	)
}
export default HowItWorks
