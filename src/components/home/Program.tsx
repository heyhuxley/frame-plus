import {festivalFacts} from "@/lib/festival-facts";

const Program = () => {
	return (
		<section className={"px-6 py-24 text-frame-text grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20 "}>
			<p className={"font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-5xl"}>Eight
				to twelve
				short films.
				Each screens once.
				At a fixed hour.
				
				No catalogue. No replay.
				You come to the screening, or you miss it.</p>
			
			<div className="flex flex-col justify-end gap-6">
				<p className={"max-w-md text-[17px] leading-relaxed"}>The second edition runs across one
					weekend. Every film is introduced by its director, and
					every director answers questions in the Theater once the credits end.</p>
				
				<div className="grid grid-cols-2 border-t">
					{festivalFacts.map(({label, value}) => (
						<div className={"py-4 pr-4 border-b border-frame-text/20"} key={label}>
							<span className={"text-xs text-muted"}>{label}</span>
							<p className={"w-max mt-1 text-[15px] font-medium"}>{value}</p>
						</div>
					))}
				</div>
			
			</div>
		</section>
	)
}
export default Program
