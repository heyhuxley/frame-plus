import {getHeroDailyHighlights, HeroDay} from "@/lib/hero-highlights";
import Link from "next/link";


const Schedule = () => {
	const days: HeroDay[] = getHeroDailyHighlights();
	
	return (
		<Link
			href="/schedule"
			className={"grid sm:grid-cols-3 divide-y sm:divide-x divide-frame-text-theater/35  border-t border-frame-text-theater/35"}>
			{days.map(({dateKey, dayLabel, count, filmTitle, time}) => (
				<div
					className={"py-2 sm:p-4 flex items-center sm:items-start justify-between sm:justify-start sm:flex-col gap-6"}
					key={dateKey}>
					<p className="text-[12px] sm:text-[13px]">
						{dayLabel} <span className={"text-bone/70"}>· {count} films</span>
					</p>
					<p className="text-[18px] sm:text-[20px] font-serif line-clamp-1">
						{filmTitle} <span className={"text-bone/70 text-[13px] font-sans"}>{time}</span>
					</p>
				</div>
			))}
		</Link>
	)
}
export default Schedule
