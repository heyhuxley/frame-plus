"use client"

import {useParams} from "next/navigation";
import {films} from "@/lib/mock-data";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Director from "@/components/schedule/Director";
import {formatScreeningTimeLong} from "@/utils/format-screening-time";
import BuyTicket from "@/components/ui/BuyTicket";
// import {formatScreeningTimeLong} from "@/utils/format-screening-time";

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
	const {
		posterUrl,
		director,
		directorImage,
		directorBio,
		title,
		screeningAt,
		runtimeMinutes,
		country,
		year,
		synopsis
	} = film;
	const screenAt = screeningAt || "";
	
	const date = formatScreeningTimeLong(screenAt)
	
	return (
		<>
			<main
				id="film-details"
				className="mx-auto grid w-full max-w-360 gap-10 border-b border-frame-text/15 px-4 pb-20 pt-6 md:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 lg:pt-10">
				<div
					id="poster"
					className="relative aspect-4/5 overflow-hidden bg-frame-text lg:aspect-auto lg:h-190">
					<Image width={500} height={100} src={posterUrl} alt={`${title}`}
					       className="object-cover w-full h-full"/>
				
				</div>
				
				<div className="">
					<Director directorImage={directorImage} director={director} directorBio={directorBio}/>
					
					<div className="text-frame-text mt-8">
						<span className="text-sm text-muted">{date}</span>
						<h2 className="mt-3 font-serif text-4xl leading-[0.98] tracking-[-0.02em] sm:text-5xl">{title}</h2>
					</div>
					
					<div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-5 text-frame-text">
						{
							[
								{
									title: "Runtime",
									value: `${runtimeMinutes} minutes`
								},
								{
									title: "Country",
									value: country
								},
								{
									title: "Year",
									value: year
								},
							].map(({title, value}) => (
								<div key={value + title}>
									<span className="text-xs text-muted">{title}</span>
									<p className="mt-1 text-[15px] font-medium">{value}</p>
								</div>
							))
						}
					</div>
					
					<p className="mt-8 max-w-md text-[17px] leading-relaxed text-frame-text/85">{synopsis}</p>
					
					<div className="mt-10 flex items-center justify-between gap-4 border-t border-frame-text/15 pt-6">
						<div className="text-frame-text">
							<p className="font-serif text-3xl font-semibold">€12</p>
							<p className="mt-0.5 text-xs text-muted">Single screening · or in the Friday Night Pass</p>
						</div>
						
						<div><BuyTicket>Buy Ticket</BuyTicket></div>
					</div>
				</div>
			</main>
			
			<section className="h-80">
			
			</section>
		</>
	)
}
export default FilmDetails
