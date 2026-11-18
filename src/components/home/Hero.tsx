"use client"

// import {acceptedFilms} from "@/lib/accepted-films";
import {useRef, useState} from "react"
import {SpeakerHighIcon, SpeakerXIcon} from "@phosphor-icons/react"
import BuyTicket from "@/components/ui/BuyTicket";
import FilmLink from "@/components/ui/FilmLink";
import Schedule from "@/components/ui/Schedule";
import {getHeroDailyHighlights} from "@/lib/hero-highlights";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {acceptedFilms} from "@/lib/mock-data";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const Hero = () => {
	const {id, posterUrl, trailerUrl, title, director, country, runtime, synopsis} = acceptedFilms[0];
	const videoRef = useRef<HTMLVideoElement>(null)
	const [soundOn, setSoundOn] = useState(false)
	const {time, dayLabel} = getHeroDailyHighlights()[0];
	
	// useGSAP(() => {
	// 	const ctx = gsap.context(() => {
	// 		gsap.from(videoRef.current, {
	// 			objectFit: "bottom",
	// 			ease: "none",
	// 			scrollTrigger: {
	// 				trigger: "#hero",
	// 				start: "top top",
	// 				end: "bottom top",
	// 				scrub: 0.5,
	// 			},
	// 		});
	// 	}, "#hero");
	//
	// 	return () => ctx.revert();
	// }, [videoRef])
	useGSAP(() => {
		SplitText.create("#title", {type: "lines", linesClass: "highlight"});
		
		gsap.from(".highlight", {
			y: 30,
			opacity: 0,
			duration: 0.4,
			stagger: {
				each: 0.08
			},
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#hero",
				start: "top center",
				once: true
			}
		})
	})
	
	return (
		<section
			id="hero"
			className={"relative mx-auto flex min-h-170 w-full max-w-360 flex-col sm:min-h-195 lg:min-h-210"}>
			<video
				ref={videoRef}
				poster={posterUrl}
				preload="auto"
				muted={soundOn}
				autoPlay
				playsInline
				loop
				className={"absolute inset-0 w-full h-full object-cover"}
			>
				<source src={trailerUrl} type="video/mp4"/>
				{/*<track*/}
				{/*	// src="/path/to/captions.vtt"*/}
				{/*	kind="subtitles"*/}
				{/*	srcLang="en"*/}
				{/*	label="English"*/}
				{/*/>*/}
				Your browser does not support the video tag.
			</video>
			
			<div className="absolute inset-0 bg-night"/>
			<div className="relative flex flex-1 flex-col justify-between px-4 md:px-6 pt-4">
				<div
					className="highlight flex justify-between border-b border-frame-text-theater/35 py-4 mix-blend-difference text-[13px]">
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
				
				<div className={"flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-0 py-10"}>
					<div className="flex flex-col gap-14 leading-none">
						<p className={"highlight max-w-2xl font-serif text-xl leading-snug tracking-[-0.01em] text-bone sm:text-2xl"}>An
							online festival of short films. 8 - 12 films, three nights, each
							shown once.
						</p>
						
						<div className={"flex flex-col"}>
							<span className={"highlight text-frame-text-theater/35 text-[13px] mix-blend-difference"}>Opening film · {dayLabel}, {time}</span>
							
							<p id="title"
							   className={"mt-4 max-w-[12ch] font-serif text-[56px] leading-[0.92] tracking-[-0.02em] sm:text-[104px] lg:text-[128px] xl:text-[148px]"}>{title}</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className={"highlight text-[18px]"}>A film by {director} <span
								className={"text-frame-text-theater/35 mix-blend-difference"}>· {country} · {runtime}</span>
							</p>
							
							<p className={"highlight mt-3 text-[15px] leading-relaxed text-bone/85"}>{synopsis}</p>
							<p className={"highlight mt-3 text-[13px] text-bone/70"}>The director joins for questions
								once the
								credits
								end.</p>
						</div>
					</div>
					
					<div className="w-max flex flex-col">
						<div className={"highlight flex flex-wrap items-center gap-5 text-[14px]"}>
							<BuyTicket>Get Tickets</BuyTicket>
							<FilmLink path={`/films/${id}`}>About the film</FilmLink>
						</div>
						<p className={"highlight w-max mt-3 text-[13px] text-bone/70"}>From €12 a screening, or €64 for
							the
							weekend.</p>
					</div>
				</div>
				
				<Schedule/>
			</div>
		</section>
	)
}
export default Hero
