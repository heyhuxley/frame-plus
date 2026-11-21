"use client"

import {useState} from "react";
import {Film, acceptedFilms} from "@/lib/mock-data";
import Trailer from "@/components/ui/Trailer";
import FilmLink from "@/components/ui/FilmLink";
import useScrollReveal from "@/hooks/useScrollReveal";
import Ring from "@/components/ui/Ring";
import {formatScreeningTime} from "@/utils/format-screening-time";

const Trailers = () => {
	const [trailer, setTrailer] = useState<Film>(acceptedFilms[0])
	const {title, director, country, posterUrl, runtime, screeningAt, trailerUrl} = trailer;
	
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const date = formatScreeningTime(screeningAt);
	
	useScrollReveal("#trailers")
	
	return (
		<section id="trailers" className={"px-4 md:px-6 py-12 flex flex-col gap-10"}>
			<div className="">
				<h2 className={"font-serif font-medium text-frame-text text-4xl tracking-[-0.02em] sm:text-5xl"}>
					Watch the Trailers.
				</h2>
				<p className={"mt-3 text-sm text-muted"}> The films themselves play once, on their night.</p>
			</div>
			
			<div
				className="grid gap-10 border-t border-frame-text/35 pt-8 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-12">
				<div className="relative flex flex-col gap-6">
					<div className={"relative"}>
						<video
							poster={posterUrl}
							preload="auto"
							muted={true}
							autoPlay
							playsInline
							loop
							// controls
							className={"relative w-full aspect-square object-cover"}
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
						<div className={"absolute w-full h-full inset-0 flex justify-center items-center cursor-pointer"}>
							<Ring/>
						</div>
					</div>
					
					<div className="text-frame-text flex flex-col md:flex-row md:items-center justify-between gap-4">
						<div>
							<p className={"font-serif text-3xl tracking-[-0.02em] sm:text-4xl"}>{title}</p>
							<p className={"mt-2 text-sm text-muted"}>{director} · {country} · {runtime} · {`${date}`}</p>
						</div>
						
						<FilmLink path={`films/${trailer.id}`}>Go to the film page</FilmLink>
					</div>
				</div>
				<div className="w-full flex flex-col">
					{acceptedFilms.map((film) => (
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
