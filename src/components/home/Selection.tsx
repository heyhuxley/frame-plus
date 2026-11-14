"use client"

import useScrollReveal from "@/hooks/useScrollReveal";

const Selection = () => {
	useScrollReveal("#selection")
	
	return (
		<section id="selection" className={"px-4 md:px-6 py-20"}>
			<h2 className={"font-serif font-medium text-frame-text text-4xl tracking-[-0.02em] sm:text-5xl"}>
				This Edition’s Selection.
			</h2>
			<p className={"mt-3 text-sm text-muted"}>8 films. Three nights. Chosen from 1,412 submissions.</p>
		</section>
	)
}
export default Selection
