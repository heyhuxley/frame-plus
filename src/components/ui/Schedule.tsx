import {acceptedFilms} from "@/lib/accepted-films";


const Schedule = () => {
	const schedule = acceptedFilms.slice(0, 3);
	
	return (
		<div className={"w-full grid grid-cols-3 divide-solid divide-x border-t"}>
			{schedule.map(({id, title, runtime, screeningAt}) => (
				<div className={"col-span-1 p-4"} key={id}>
					<p>{screeningAt} · 3 films</p>
					<p>{title} {runtime}</p>
				</div>
			))}
		</div>
	)
}
export default Schedule
