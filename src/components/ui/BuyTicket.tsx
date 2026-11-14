import Link from "next/link";
import React from "react";

const BuyTicket = ({children}: { children: React.ReactNode }) => {
	return (
		<Link
			className={"w-max font-medium bg-frame-accent hover:bg-frame-accent-hover hover:scale-[98%] transition-transform text-frame-bg px-8 py-4 rounded-sm"}
			href={"#"}>{children}
		</Link>
	)
}
export default BuyTicket
