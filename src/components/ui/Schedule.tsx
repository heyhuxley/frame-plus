import {getHeroDailyHighlights, HeroDay} from "@/lib/hero-highlights";


const Schedule = () => {
	const days: HeroDay[] = getHeroDailyHighlights();
	
	return (
		<div className={"grid sm:grid-cols-3 divide-y sm:divide-x divide-frame-text-theater/35  border-t border-frame-text-theater/35"}>
			{days.map(({dateKey, dayLabel, count, filmTitle, time}) => (
				<div className={"p-4 flex justify-between sm:justify-start sm:flex-col gap-1"} key={dateKey}>
					<p className="text-[13px]">
						{dayLabel} <span className={"text-bone/70"}>· {count} films</span>
					</p>
					<p className="text-[20px] font-serif">
						{filmTitle} <span className={"text-bone/70 text-[13px] font-sans"}>{time}</span>
					</p>
				</div>
			))}
		</div>
	)
}
export default Schedule
