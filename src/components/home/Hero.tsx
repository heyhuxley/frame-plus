"use client"

import {acceptedFilms} from "@/lib/accepted-films";
import getNextThreeDaysRange from "@/utils/get-next-three-days-range";
import {useState} from "react"
import {SpeakerHighIcon, SpeakerXIcon} from "@phosphor-icons/react"


const Hero = () => {
	const {posterUrl, trailerUrl} = acceptedFilms[0];
	const daysRange = getNextThreeDaysRange();
	
	const [soundOn, setSoundOn] = useState(false)
	
	return (
		<section
			className={"relative mx-auto flex min-h-170 w-full max-w-360 flex-col px-4 pt-6 md:px-6 sm:min-h-195 lg:min-h-210"}>
			<video
				poster={posterUrl}
				preload="auto"
				muted
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
					
					<p className={"text-frame-text-theater/35 sm:block hidden"}>{daysRange}</p>
					
					<button
						className={"flex items-center gap-2 text-frame-text-theater/35 hover:text-frame-text-theater transition-colors"}
						onClick={() => setSoundOn(!soundOn)}>
						{soundOn ? <SpeakerHighIcon size={16} weight="fill"/> : <SpeakerXIcon size={16} weight="fill"/>}
						{soundOn ? "Sound on" : "Sound off"}
					</button>
				</div>
				
				<div className="pt-10">
					<h1 className={"max-w-2xl font-serif text-xl leading-snug tracking-[-0.01em] text-bone sm:text-2xl"}>An
						online festival of short films. 8 films, three nights, each
						shown once.</h1>
				</div>
			</div>
		</section>
	)
}
export default Hero
