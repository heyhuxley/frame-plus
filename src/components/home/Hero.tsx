"use client"

import {acceptedFilms} from "@/lib/accepted-films";
import {useState} from "react"
import {SpeakerHighIcon, SpeakerXIcon} from "@phosphor-icons/react"
import Link from "next/link";
import BuyTicket from "@/components/ui/BuyTicket";
import FilmLink from "@/components/ui/FilmLink";


const Hero = () => {
	const {posterUrl, trailerUrl, title, director, country, runtime, synopsis} = acceptedFilms[0];
	const [soundOn, setSoundOn] = useState(false)
	
	return (
		<section
			className={"relative mx-auto flex min-h-170 w-full max-w-360 flex-col px-4 pt-6 md:px-6 sm:min-h-195 lg:min-h-210"}>
			<video
				poster={posterUrl}
				preload="auto"
				muted={soundOn}
				autoPlay
				playsInline
				loop
				className={"absolute w-full inset-0"}
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
			
			
			<div className="absolute inset-0 bg-night"/>
			<div className="absolute inset-0 px-6 py-2">
				<div
					className="flex justify-between border-b border-frame-text-theater/35 py-4 mix-blend-difference text-[13px]">
					<p className={""}>Frame+ <span
						className={"text-frame-text-theater/35 "}>· Second Edition</span></p>
					
					<p className={"text-frame-text-theater/35 sm:block hidden"}>13-15 November 2026 [TODO]</p>
					
					<button
						className={"flex items-center gap-2 text-frame-text-theater/35 hover:text-frame-text-theater transition-colors"}
						onClick={() => setSoundOn(!soundOn)}>
						{soundOn ? <SpeakerHighIcon size={16} weight="fill"/> : <SpeakerXIcon size={16} weight="fill"/>}
						{soundOn ? "Sound on" : "Sound off"}
					</button>
				</div>
				
				<div className={"flex items-end justify-between"}>
					<div className="pt-10 flex flex-col gap-14 leading-none">
						<h1 className={"max-w-2xl font-serif text-xl leading-snug tracking-[-0.01em] text-bone sm:text-2xl"}>An
							online festival of short films. 8 films, three nights, each
							shown once.</h1>
						
						<div className={"flex flex-col"}>
							<span className={"text-frame-text-theater/35 text-[13px] mix-blend-difference"}>Opening film · [TODO], 21:00</span>
							
							<p className={"mt-4 max-w-[14ch] font-serif text-[56px] leading-[0.92] tracking-[-0.02em] sm:text-[104px] lg:text-[128px] xl:text-[148px]"}>{title}</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className={"text-[18px]"}>A film by {director} <span
								className={"text-frame-text-theater/35 mix-blend-difference"}>· {country} · {runtime}</span>
							</p>
							
							<p className={"mt-3 text-[15px] leading-relaxed text-bone/85"}>{synopsis}</p>
							<p className={"mt-3 text-[13px] text-bone/70"}>The director joins for questions once the
								credits
								end.</p>
						</div>
					
					</div>
					<div className="flex flex-col">
						<div className={"flex items-center gap-4 text-[14px]"}>
							<BuyTicket text={"Get Tickets"}/>
							<FilmLink text={"About the film"} />
						</div>
					
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
