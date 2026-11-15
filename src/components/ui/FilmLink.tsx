import Link from "next/link";
import React from "react";

const FilmLink = ({children}: { children: React.ReactNode }) => {
	return (
		<Link
			className={"text-[14px] font-medium border-b-[1.5px] border-frame-border hover:border-frame-accent transition-colors leading-4"}
			href={"#"}>{children}</Link>
	)
}
export default FilmLink
