// lib/mock-data.ts

export interface Film {
	id: string;
	slug: string;
	title: string;
	director: string;
	directorBio: string;
	directorImage: string; // [TODO]
	runtime: string;
	runtimeMinutes: number;
	year: number;
	country: string;
	synopsis: string;
	posterUrl: string; // [TODO]
	trailerUrl: string;
	videoUrl: string; // [TODO]
	status: "submitted" | "accepted" | "rejected";
	screeningAt?: string; // ISO 8601
}

export interface User {
	id: string;
	name: string;
	email: string;
	role: "VIEWER" | "FILMMAKER" | "JUDGE" | "ORGANIZER";
	isVerified: boolean;
	avatarUrl: string; // [TODO]
}

export interface Screening {
	id: string;
	filmId: string;
	startsAt: string; // ISO 8601
	endsAt: string;
	venue: string;
	capacity: number | null;
}

export interface TicketType {
	id: string;
	name: string;
	description: string;
	price: number; // cents
	currency: string;
	includesAll: boolean;
}

export interface Order {
	id: string;
	userId: string;
	ticketTypeId: string;
	screeningId: string | null;
	stripeSessionId: string;
	status: "PENDING" | "PAID" | "FAILED" | "REFUNDED";
	amount: number; // cents
	createdAt: string;
}

export interface Ticket {
	id: string;
	orderId: string;
	screeningId: string;
	userId: string;
	qrCode: string;
	usedAt: string | null;
}

export interface Rating {
	id: string;
	userId: string;
	filmId: string;
	score: number; // 1-5
	comment: string | null;
}

export interface JudgeScore {
	id: string;
	judgeId: string;
	filmId: string;
	score: number;
	notes: string | null;
}

export interface Award {
	id: string;
	filmId: string;
	category: "BEST_SHORT" | "AUDIENCE_CHOICE" | "JURY_PRIZE";
	year: number;
}

// ---------------------------------------------------------------------------
// 1. USERS
// ---------------------------------------------------------------------------

export const currentUser: User = {
	id: "user-1",
	name: "Leo Varga",
	email: "leo@example.com",
	role: "VIEWER",
	isVerified: true,
	avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", // [TODO]
};

export const users: User[] = [
	currentUser,
	{
		id: "user-2",
		name: "Maya Chen",
		email: "maya@example.com",
		role: "FILMMAKER",
		isVerified: true,
		avatarUrl: "[TODO]",
	},
	{
		id: "user-3",
		name: "Dr. Elena Rossi",
		email: "elena@example.com",
		role: "JUDGE",
		isVerified: true,
		avatarUrl: "[TODO]",
	},
	{
		id: "user-4",
		name: "Frame+ Organizer",
		email: "organizer@frame.plus",
		role: "ORGANIZER",
		isVerified: true,
		avatarUrl: "[TODO]",
	},
];

// ---------------------------------------------------------------------------
// 2. FILMS
// ---------------------------------------------------------------------------

export const films: Film[] = [
	{
		id: "film-1",
		slug: "night-ferry",
		title: "Night Ferry",
		director: "Elena Rostova",
		directorBio:
			"Elena Rostova is a visual artist and director living in Tallinn. Her films focus on nocturnal transit and the quiet rituals of port cities.",
		directorImage:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
		runtime: "14 min",
		runtimeMinutes: 14,
		year: 2025,
		country: "Estonia",
		synopsis:
			"A deckhand discovers a locked suitcase left behind on the final crossing across the Baltic Sea.",
		posterUrl:
			"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979871",
		videoUrl: "[TODO]",
		status: "accepted",
		screeningAt: "2026-11-13T21:00:00Z",
	},
	{
		id: "film-2",
		slug: "glasshouse",
		title: "Glasshouse",
		director: "Mateo Silva",
		directorBio:
			"Mateo Silva directs experimental narratives in Santiago, examining botanical archives and human memory.",
		directorImage:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
		runtime: "11 min",
		runtimeMinutes: 11,
		year: 2024,
		country: "Chile",
		synopsis:
			"An aging botanist tends to an extinct orchid species inside an abandoned conservatory.",
		posterUrl:
			"https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979872",
		videoUrl: "[TODO]",
		status: "accepted",
		screeningAt: "2026-11-13T21:15:00Z",
	},
	{
		id: "film-3",
		slug: "copper-wire",
		title: "Copper Wire",
		director: "Amara Diop",
		directorBio:
			"Amara Diop works in Dakar, blending documentary textures with speculative fiction to explore urban infrastructure.",
		directorImage:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
		runtime: "15 min",
		runtimeMinutes: 15,
		year: 2025,
		country: "Senegal",
		synopsis:
			"Two telecom repair workers trace a phantom phone call echoing through decommissioned lines.",
		posterUrl:
			"https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979873",
		videoUrl: "[TODO]",
		status: "accepted",
		screeningAt: "2026-11-14T20:30:00Z",
	},
	{
		id: "film-4",
		slug: "salt-flats",
		title: "Salt Flats",
		director: "Tariq Al-Mansoor",
		directorBio:
			"Tariq Al-Mansoor is a cinematographer and director from Amman whose work centers on arid landscapes and family histories.",
		directorImage:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
		runtime: "10 min",
		runtimeMinutes: 10,
		year: 2024,
		country: "Jordan",
		synopsis:
			"A land surveyor maps a drying lakebed only to uncover the foundations of his grandfather's village.",
		posterUrl:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979874",
		videoUrl: "[TODO]",
		status: "accepted",
		screeningAt: "2026-11-14T20:45:00Z",
	},
	{
		id: "film-5",
		slug: "second-hand",
		title: "Second Hand",
		director: "Mei-Ling Zhou",
		directorBio:
			"Mei-Ling Zhou makes intimate character studies in Taipei, focusing on horology, craft, and inherited time.",
		directorImage:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
		runtime: "9 min",
		runtimeMinutes: 9,
		year: 2025,
		country: "Taiwan",
		synopsis:
			"A watchmaker repairs a mechanical timepiece that runs backward whenever it rains.",
		posterUrl:
			"https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979875",
		videoUrl: "[TODO]",
		status: "accepted",
		screeningAt: "2026-11-15T20:00:00Z",
	},
	{
		id: "film-6",
		slug: "snowline",
		title: "Snowline",
		director: "Henrik Lindqvist",
		directorBio:
			"Henrik Lindqvist shoots on location in northern Sweden, capturing remote communities and winter isolation.",
		directorImage:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
		runtime: "13 min",
		runtimeMinutes: 13,
		year: 2024,
		country: "Sweden",
		synopsis:
			"A snowplow driver finds an unmarked cabin deep in the forest with a warm stove and no footprints.",
		posterUrl:
			"https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979876",
		videoUrl: "[TODO]",
		status: "accepted",
		screeningAt: "2026-11-15T20:15:00Z",
	},
	{
		id: "film-7",
		slug: "kiln",
		title: "Kiln",
		director: "Sofia Papadopoulos",
		directorBio:
			"Sofia Papadopoulos is an Athens-based sculptor and filmmaker investigating tactile art forms and labor.",
		directorImage:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
		runtime: "12 min",
		runtimeMinutes: 12,
		year: 2025,
		country: "Greece",
		synopsis:
			"Over a single night, a ceramicist fires a vessel meant to hold her mother's ashes.",
		posterUrl:
			"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979877",
		videoUrl: "[TODO]",
		status: "rejected",
	},
	{
		id: "film-8",
		slug: "vinyl-groove",
		title: "Vinyl Groove",
		director: "Darius Vance",
		directorBio:
			"Darius Vance directs music-driven short films in Chicago, celebrating analog soundscapes and neighborhood history.",
		directorImage:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
		runtime: "8 min",
		runtimeMinutes: 8,
		year: 2024,
		country: "USA",
		synopsis:
			"A record store clerk discovers an unlabelled acetate disc containing a lost 1970s jazz session.",
		posterUrl:
			"https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=800&q=80",
		trailerUrl: "https://player.vimeo.com/video/76979878",
		videoUrl: "[TODO]",
		status: "submitted",
	},
];

export const acceptedFilms = films.filter((f) => f.status === "accepted");
export const heroFilm = acceptedFilms[0]; // Blue Hour

// ---------------------------------------------------------------------------
// 3. SCREENINGS (grouped Friday–Sunday)
// ---------------------------------------------------------------------------

export const screenings: Screening[] = [
	{
		id: "screening-1",
		filmId: "film-1",
		startsAt: "2026-11-13T21:00:00Z",
		endsAt: "2026-11-13T21:15:00Z",
		venue: "Virtual Theater 1",
		capacity: 200,
	},
	{
		id: "screening-2",
		filmId: "film-2",
		startsAt: "2026-11-13T21:20:00Z",
		endsAt: "2026-11-13T21:32:00Z",
		venue: "Virtual Theater 1",
		capacity: 200,
	},
	{
		id: "screening-3",
		filmId: "film-3",
		startsAt: "2026-11-14T20:30:00Z",
		endsAt: "2026-11-14T20:47:00Z",
		venue: "Virtual Theater 1",
		capacity: 200,
	},
	{
		id: "screening-4",
		filmId: "film-4",
		startsAt: "2026-11-14T20:52:00Z",
		endsAt: "2026-11-14T21:06:00Z",
		venue: "Virtual Theater 1",
		capacity: 200,
	},
	{
		id: "screening-5",
		filmId: "film-5",
		startsAt: "2026-11-15T20:00:00Z",
		endsAt: "2026-11-15T20:11:00Z",
		venue: "Virtual Theater 1",
		capacity: 200,
	},
	{
		id: "screening-6",
		filmId: "film-6",
		startsAt: "2026-11-15T20:16:00Z",
		endsAt: "2026-11-15T20:29:00Z",
		venue: "Virtual Theater 1",
		capacity: 200,
	},
];

// Helper: group screenings by day for the Schedule page
export function groupScreeningsByDay(screenings: Screening[], films: Film[]) {
	const filmMap = new Map(films.map((f) => [f.id, f]));
	const grouped = new Map<string, Screening[]>();
	
	for (const s of screenings) {
		const dateKey = new Date(s.startsAt).toISOString().split("T")[0]; // YYYY-MM-DD
		if (!grouped.has(dateKey)) grouped.set(dateKey, []);
		grouped.get(dateKey)!.push(s);
	}
	
	return Array.from(grouped.entries()).map(([date, screenings]) => ({
		date,
		label: new Date(date).toLocaleDateString("en-US", {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric",
		}),
		screenings: screenings.map((s) => ({
			...s,
			film: filmMap.get(s.filmId)!,
		})),
	}));
}

// ---------------------------------------------------------------------------
// 4. TICKET TYPES
// ---------------------------------------------------------------------------

export const ticketTypes: TicketType[] = [
	{
		id: "tier-1",
		name: "Single Screening",
		description: "Access to one scheduled screening of your choice.",
		price: 1200, // $12.00
		currency: "usd",
		includesAll: false,
	},
	{
		id: "tier-2",
		name: "Night Pass",
		description: "Access to all films screening on a single night.",
		price: 2500, // $25.00
		currency: "usd",
		includesAll: false,
	},
	{
		id: "tier-3",
		name: "Festival Pass",
		description: "Access to every screening across the full festival weekend.",
		price: 4500, // $45.00
		currency: "usd",
		includesAll: true,
	},
];

// ---------------------------------------------------------------------------
// 5. ORDERS & TICKETS (simulated purchases)
// ---------------------------------------------------------------------------

export const orders: Order[] = [
	{
		id: "order-1",
		userId: "user-1",
		ticketTypeId: "tier-3",
		screeningId: null,
		stripeSessionId: "cs_test_mock1",
		status: "PAID",
		amount: 4500,
		createdAt: "2026-11-10T10:00:00Z",
	},
	{
		id: "order-2",
		userId: "user-1",
		ticketTypeId: "tier-1",
		screeningId: "screening-3",
		stripeSessionId: "cs_test_mock2",
		status: "PAID",
		amount: 1200,
		createdAt: "2026-11-11T14:30:00Z",
	},
];

export const tickets: Ticket[] = [
	{
		id: "ticket-1",
		orderId: "order-1",
		screeningId: "screening-1",
		userId: "user-1",
		qrCode: "FRAME-2026-0001",
		usedAt: null,
	},
	{
		id: "ticket-2",
		orderId: "order-1",
		screeningId: "screening-2",
		userId: "user-1",
		qrCode: "FRAME-2026-0002",
		usedAt: null,
	},
	{
		id: "ticket-3",
		orderId: "order-2",
		screeningId: "screening-3",
		userId: "user-1",
		qrCode: "FRAME-2026-0003",
		usedAt: null,
	},
];

// ---------------------------------------------------------------------------
// 6. RATINGS (viewer feedback)
// ---------------------------------------------------------------------------

export const ratings: Rating[] = [
	{
		id: "rating-1",
		userId: "user-1",
		filmId: "film-1",
		score: 5,
		comment: "Haunting. The projection room felt like a character.",
	},
	{
		id: "rating-2",
		userId: "user-1",
		filmId: "film-3",
		score: 4,
		comment: "Beautiful use of static. Stayed with me after it ended.",
	},
];

// ---------------------------------------------------------------------------
// 7. JUDGE SCORES
// ---------------------------------------------------------------------------

export const judgeScores: JudgeScore[] = [
	{
		id: "judge-1",
		judgeId: "user-3",
		filmId: "film-1",
		score: 5,
		notes: "Exceptional control of tension and sound design.",
	},
	{
		id: "judge-2",
		judgeId: "user-3",
		filmId: "film-2",
		score: 4,
		notes: "Strong sense of place. Pacing could tighten in the middle.",
	},
];

// ---------------------------------------------------------------------------
// 8. AWARDS
// ---------------------------------------------------------------------------

export const awards: Award[] = [
	{
		id: "award-1",
		filmId: "film-1",
		category: "BEST_SHORT",
		year: 2026,
	},
	{
		id: "award-2",
		filmId: "film-5",
		category: "AUDIENCE_CHOICE",
		year: 2026,
	},
];

// ---------------------------------------------------------------------------
// 9. HELPERS
// ---------------------------------------------------------------------------

export function getFilmBySlug(slug: string) {
	return films.find((f) => f.slug === slug);
}

export function getScreeningById(id: string) {
	return screenings.find((s) => s.id === id);
}

export function getTicketTypeById(id: string) {
	return ticketTypes.find((t) => t.id === id);
}

export function getOrdersForUser(userId: string) {
	return orders.filter((o) => o.userId === userId);
}

export function getTicketsForUser(userId: string) {
	return tickets.filter((t) => t.userId === userId);
}

export function getRatingsForFilm(filmId: string) {
	return ratings.filter((r) => r.filmId === filmId);
}

export function getAverageRating(filmId: string) {
	const filmRatings = getRatingsForFilm(filmId);
	if (filmRatings.length === 0) return null;
	const sum = filmRatings.reduce((acc, r) => acc + r.score, 0);
	return (sum / filmRatings.length).toFixed(1);
}

export function getAwardForFilm(filmId: string) {
	return awards.find((a) => a.filmId === filmId);
}

export function isScreeningLive(screening: Screening) {
	const now = new Date();
	return now >= new Date(screening.startsAt) && now <= new Date(screening.endsAt);
}