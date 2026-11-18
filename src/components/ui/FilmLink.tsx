import Link from "next/link";
import React from "react";

const FilmLink = ({children, path = ""}: { children: React.ReactNode, path: string }) => {
	return (
		<Link
			className={"w-max text-[14px] font-medium border-b-[1.5px] border-frame-border hover:border-frame-accent transition-colors leading-4"}
			href={path}>{children}</Link>
	)
}
export default FilmLink
