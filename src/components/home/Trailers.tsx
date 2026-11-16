"use client"

import {useState} from "react";
import {Film, films} from "@/lib/mock-data";
import Trailer from "@/components/ui/Trailer";
import FilmLink from "@/components/ui/FilmLink";
import useScrollReveal from "@/hooks/useScrollReveal";

const Trailers = () => {
	const [trailer, setTrailer] = useState<Film>(films[0])
	const {title, director, country, posterUrl, runtime, screeningAt, trailerUrl} = trailer;
	
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const date = new Date(screeningAt);
	const dayName = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date);
	const time = new Intl.DateTimeFormat('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}).format(date);
	
	useScrollReveal("#trailers")
	
	return (
		<section id="trailers" className={"px-4 md:px-6 flex flex-col gap-10"}>
			<div className="">
				<h2 className={"font-serif font-medium text-frame-text text-4xl tracking-[-0.02em] sm:text-5xl"}>
					Watch the Trailers.
				</h2>
				<p className={"mt-3 text-sm text-muted"}> The films themselves play once, on their night.</p>
			</div>
			
			<div
				className="grid gap-10 border-t border-frame-text/35 pt-8 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-12">
				<div className="flex flex-col gap-6">
					<video
						poster={posterUrl}
						preload="auto"
						muted={true}
						autoPlay
						playsInline
						loop
						// controls
						className={"w-full aspect-square"}
					>
						<source src={trailerUrl} type="video/mp4"/>
						<track
							// src="/path/to/captions.vtt"
							kind="subtitles"
							srcLang="en"
							label="English"
						/>
						Your browser does not support the video tag.
					</video>
					
					<div className="text-frame-text flex flex-col md:flex-row md:items-center justify-between gap-4">
						<div>
							<p className={"font-serif text-3xl tracking-[-0.02em] sm:text-4xl"}>{title}</p>
							<p className={"mt-2 text-sm text-muted"}>{director} · {country} · {runtime} · {`${dayName} ${time}`}</p>
						</div>
						
						<FilmLink>Go to the film page</FilmLink>
					</div>
				</div>
				<div className="w-full flex flex-col divide-solid divide-y divide-frame-text/15">
					{films.map((film) => (
						<button key={film.id} onClick={() => setTrailer(film)}>
							<Trailer {...film} currentTrailerId={trailer.id}/>
						</button>
					))}
				</div>
			</div>
		</section>
	)
}
export default Trailers
