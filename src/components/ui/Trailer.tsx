import {Film} from "@/lib/mock-data";
import Image from "next/image";
import clsx from "clsx";

const Trailer = ({
	                 id,
	                 posterUrl,
	                 title,
	                 runtime,
	                 director,
	                 currentTrailerId
                 }: Pick<Film, "id" | "title" | "posterUrl" | "runtime" | "director"> & {
	currentTrailerId: string
}) => {
	return (
		<div className={"group w-auto h-auto text-frame-text flex items-center gap-4 py-3 border-b border-frame-text/15"}>
			<Image loading="eager" width={40} height={60} src={posterUrl} alt={`${title} trailer`} className={"text-[10px]"}/>
			
			<div className="w-full flex items-center justify-between gap-2">
				<div className="flex flex-col items-start">
					<p className={clsx("font-serif text-[18px] font-medium line-clamp-1 group-hover:text-frame-accent-hover transition-colors", currentTrailerId === id && "text-frame-accent-hover")}>{title}</p>
					<p className={"text-muted text-[12px]"}>{director}</p>
				</div>
				<p className={clsx("text-[12px] font-medium", currentTrailerId === id ? "text-frame-accent-hover" : "text-muted")}>{currentTrailerId === id ? "On screen" : runtime}</p>
			</div>
		</div>
	)
}
export default Trailer
