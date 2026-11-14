export interface Film {
	id: string;
	slug: string;
	title: string;
	director: string;
	directorBio: string;
	directorImage: string; // [TODO]
	runtime: string;
	year: number;
	country: string;
	synopsis: string;
	posterUrl: string; // [TODO]
	trailerUrl: string;
	videoUrl: string; // [TODO]
	status: "accepted";
	screeningAt: string; // ISO 8601, 24-hour time
}

export interface FilmCardProps {
	id: string;
	title: string;
	director: string;
	runtimeMinutes: number;
	posterUrl: string;
}