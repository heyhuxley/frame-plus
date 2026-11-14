import {FilmCardProps} from "@/types";
import Link from "next/link";

const FilmCard = ({id, title, director, runtimeMinutes, posterUrl}: FilmCardProps) => {
	return (
		<Link href={`/film/${id}`} className="group w-50 snap-start sm:w-57.5 lg:w-62.5">
			<div className="w-full h-full relative aspect-2/3 overflow-hidden">
				<img src={posterUrl} alt={`${title} by ${director}`}
				     className="absolute inset-0 h-full w-full object-cover"/>
			</div>
		</Link>
	)
}
export default FilmCard
