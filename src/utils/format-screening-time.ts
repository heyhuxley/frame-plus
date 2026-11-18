export const formatScreeningTime = (dateString: string) => {
	const date = new Date(dateString);
	
	// Get the full weekday name (e.g., "Friday")
	const weekday = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date);
	
	// Get the time in 24-hour format (e.g., "22:00")
	const time = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(date);
	
	return `${weekday} ${time}`;
}