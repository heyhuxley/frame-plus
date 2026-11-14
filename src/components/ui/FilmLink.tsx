import Link from "next/link";

const FilmLink = ({text}: { text: string }) => {
	return (
		<Link
			className={"w-full text-[13px] border-b-[1.5px] border-bone/35 hover:border-frame-accent transition-colors leading-4"}
			href={"#"}>{text}</Link>
	)
}
export default FilmLink
