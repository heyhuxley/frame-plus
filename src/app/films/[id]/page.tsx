"use client"

import {useParams} from "next/navigation";
import {films} from "@/lib/mock-data";
import Image from "next/image";
import {useEffect} from "react";

const FilmDetails = () => {
	const {id} = useParams()
	
	useEffect(() => {
	
	}, [])
	
	const film = films.find(film => film.id === id);
	if (!film) return;
	
	
	return (
		<main
			className="mx-auto grid w-full max-w-360 gap-10 px-4 pb-20 pt-6 md:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 lg:pt-10">
			<section>
				<div
					className="relative aspect-4/5 overflow-hidden bg-frame-text lg:aspect-auto lg:h-190">
					<Image width={100} height={100} src={film.posterUrl} alt={""}
					       className="object-cover w-full h-full"/>
				
				</div>
			</section>
		</main>
	)
}
export default FilmDetails
