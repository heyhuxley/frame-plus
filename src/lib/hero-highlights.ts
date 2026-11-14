import { screenings, films, Screening, Film } from "@/lib/mock-data";

export interface HeroDay {
	dateKey: string;        // YYYY-MM-DD
	dayLabel: string;       // "Friday 13 November"
	count: number;
	filmTitle: string;
	time: string;           // "21:00"
}

export function getHeroDailyHighlights(): HeroDay[] {
	// 1. Group screenings by date (YYYY-MM-DD)
	const byDay = new Map<string, Screening[]>();
	
	for (const s of screenings) {
		const dateKey = new Date(s.startsAt).toISOString().split("T")[0];
		if (!byDay.has(dateKey)) byDay.set(dateKey, []);
		byDay.get(dateKey)!.push(s);
	}
	
	// 2. Sort days chronologically
	const sortedDays = Array.from(byDay.entries()).sort(([a], [b]) =>
		a.localeCompare(b)
	);
	
	// 3. Map to hero items
	return sortedDays.map(([dateKey, dayScreenings]) => {
		// Sort screenings within the day by time
		dayScreenings.sort(
			(a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
		);
		
		const first = dayScreenings[0];
		const film = films.find((f) => f.id === first.filmId);
		
		const date = new Date(dateKey);
		const dayLabel = date.toLocaleDateString("en-US", {
			weekday: "long",
			day: "numeric",
			month: "long",
		}); // "Friday 13 November"
		
		const time = new Date(first.startsAt).toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		}); // "21:00"
		
		return {
			dateKey,
			dayLabel,
			count: dayScreenings.length,
			filmTitle: film?.title ?? "Untitled",
			time,
		};
	});
}