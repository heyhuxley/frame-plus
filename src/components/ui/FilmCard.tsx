"use client"

import {FilmCardProps} from "@/types";
import Link from "next/link";
import Image from "next/image";

const FilmCard = ({id, title, director, runtimeMinutes, posterUrl}: FilmCardProps) => {
	return (
		<Link href={`/film/${id}`} className="h-full w-50 shrink-0 snap-start sm:w-57.5 lg:w-62.5">
			<div className="w-full h-full relative aspect-2/3 overflow-hidden border-[1.5px] border-frame-border">
				<img width={230} height={345} src={posterUrl} alt={`${title} by ${director}`}
				       className="absolute inset-0 h-full w-full object-cover"/>
			</div>
			
			<div className="flex justify-between items-center">
				<div className="">
					<p className={"text-frame-text font-serif font-medium"}>{title}</p>
					<p className={"text-muted text-[12px]"}>{director}</p>
				</div>
				<span className={"mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[11px] border border-frame-border text-muted"}>{runtimeMinutes}′</span>
			</div>
		</Link>
	)
}
export default FilmCard
