import Link from "next/link";

const FilmLink = ({children}) => {
	return (
		<Link className={"text-[13px] border-b-[1.5px] border-bone/35 hover:border-frame-accent transition-colors leading-4"} href={"#"}>{children}</Link>
	)
}
export default FilmLink
