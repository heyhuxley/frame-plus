"use client"

import {useParams} from "next/navigation";
import {films} from "@/lib/mock-data";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const FilmDetails = () => {
	const {id} = useParams();
	
	useGSAP(() => {
		gsap.from("#poster", {
			scale: 0.9,
			yPercent: 50,
			duration: 0.2
		})
		
	}, [])
	
	const film = films.find(film => film.id === id);
	if (!film) return;
	const {posterUrl, director, directorImage, directorBio} = film
	
	return (
		<main
			id="film-details"
			className="mx-auto grid w-full max-w-360 gap-10 px-4 pb-20 pt-6 md:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 lg:pt-10">
			<div
				id="poster"
				className="relative aspect-4/5 overflow-hidden bg-frame-text lg:aspect-auto lg:h-190">
				<Image width={100} height={100} src={film.posterUrl} alt={""}
				       className="object-cover w-full h-full"/>
			
			</div>
			
			<div className="text-frame-text flex gap-4">
				<div className="h-20 w-16 sm:h-24 sm:w-19 shrink-0 overflow-hidden bg-cream-deep">
					<Image fetchPriority="auto" loading="eager" width={76} height={96} src={directorImage} alt={`Portrait of ${director}`}/>
				</div>
				<div className="">
					<span className="text-sm text-muted">A film by</span>
					<p className="mt-1 font-serif text-4xl sm:text-5xl leading-[1.02] tracking-[-0.02em]">{director}</p>
					<p className="mt-3 max-w-md text-[15px] leading-relaxed text-frame-text/75">{directorBio}</p>
				</div>
			</div>
		</main>
	)
}
export default FilmDetails
