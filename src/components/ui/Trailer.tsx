import {Film} from "@/lib/mock-data";
import Image from "next/image";

const Trailer = ({
	                 id,
	                 posterUrl,
	                 title,
	                 runtime,
	                 director
                 }: Pick<Film, "id" | "title" | "posterUrl" | "runtime" | "director">) => {
	return (
		<button className={"w-full text-frame-text"}>
			<Image width={40} height={60} src={posterUrl} alt={`${title} open trailer`} className={"text-[10px]"}/>
			<div className="">
				<p>{title}</p>
			</div>
		</button>
	)
}
export default Trailer
