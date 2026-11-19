"use client"

import {FilmCardProps} from "@/types";
import Link from "next/link";
import Image from "next/image";
import Ring from "@/components/ui/Ring";

const FilmCard = ({id, title, director, runtimeMinutes, posterUrl}: FilmCardProps) => {
	return (
		<Link href={`/films/${id}`} className="group text-frame-text film-card hover:-translate-y-2 transition-[translate] duration-200 h-full w-50 shrink-0 snap-start sm:w-57.5 lg:w-62.5">
			<div className="w-full h-full relative aspect-2/3 border-[1.5px] border-frame-border shadow-xl shadow-frame-text/15 group-hover:shadow-frame-accent/15 group-hover:border-frame-accent/85 transition-colors overflow-hidden">
				<Image width={230} height={345} src={posterUrl} alt={`${title} by ${director}`}
				       className="bg-frame-text absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform text-[12px]"/>
				
				<div className="absolute inset-0 w-full h-full flex justify-center items-center group-hover:opacity-0 transition-opacity duration-200">
					<Ring />
				</div>
			</div>
			
			<div className="flex justify-between items-center mt-2">
				<div className="">
					<p className={"font-serif font-medium"}>{title}</p>
					<p className={"text-muted text-[12px]"}>{director}</p>
				</div>
				<span className={"mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[11px] border border-frame-border text-muted"}>{runtimeMinutes}′</span>
			</div>
		</Link>
	)
}
export default FilmCard
