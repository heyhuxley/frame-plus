import React from 'react'
import Image from "next/image";

const Director = ({directorImage, director, directorBio}: {
	directorImage: string,
	director: string,
	directorBio: string
}) => {
	return (
		<div className="text-frame-text flex gap-4 border-b border-frame-text pb-6">
			<div className="h-20 w-16 sm:h-24 sm:w-19 shrink-0 overflow-hidden bg-cream-deep">
				<Image fetchPriority="auto" loading="eager" width={76} height={96} src={directorImage}
				       alt={`Portrait of ${director}`}/>
			</div>
			<div className="">
				<span className="text-sm text-muted">A film by</span>
				<p className="mt-1 font-serif text-4xl sm:text-5xl leading-[1.02] tracking-[-0.02em]">{director}</p>
				<p className="mt-3 max-w-md text-[15px] leading-relaxed text-frame-text/75">{directorBio}</p>
			</div>
		</div>
	)
}
export default Director
