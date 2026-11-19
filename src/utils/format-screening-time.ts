export const formatScreeningTime = (dateString: string) => {
	const date = new Date(dateString);
	const weekday = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date);
	const time = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(date);
	
	return `${weekday} ${time}`;
}

export const formatScreeningTimeLong = (dateString: string) => {
	const date = new Date(dateString);
	const day = new Intl.DateTimeFormat("en-US", {weekday: "long", day: "numeric", month: "long"}).format(date);
	const time = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(date);
	
	return `${day} — ${time}`;
}