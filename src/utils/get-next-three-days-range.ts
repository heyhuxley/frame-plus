const getNextThreeDaysRange = () => {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	
	// getDay(): 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
	const dayOfWeek = now.getDay();
	const friday = 5;
	
	// Days until the upcoming Friday (0 if today is already Friday)
	const daysUntilFriday = (friday - dayOfWeek + 7) % 7;
	
	const fridayDate = new Date(now);
	fridayDate.setDate(now.getDate() + daysUntilFriday);
	
	const sundayDate = new Date(fridayDate);
	sundayDate.setDate(fridayDate.getDate() + 2);
	
	const sameMonthAndYear =
		fridayDate.getMonth() === sundayDate.getMonth() &&
		fridayDate.getFullYear() === sundayDate.getFullYear();
	
	const month = fridayDate.toLocaleDateString("en-US", {month: "long"});
	const year = fridayDate.getFullYear();
	
	if (sameMonthAndYear) {
		return `${fridayDate.getDate()}–${sundayDate.getDate()} ${month} ${year}`;
	}
	
	// Fallback if the weekend crosses a month boundary
	const opts: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	};
	return `${fridayDate.toLocaleDateString("en-US", opts)}–${sundayDate.toLocaleDateString("en-US", opts)}`;
}

export default getNextThreeDaysRange;
