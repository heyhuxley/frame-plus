import Link from "next/link";
import React from "react";

const BuyTicket = ({children}: { children: React.ReactNode }) => {
	return (
		<Link
			className={"w-max relative inline-flex font-medium text-[15px] inset-shadow-sm inset-shadow-frame-bg/85 bg-frame-accent hover:bg-frame-accent-hover active:scale-[97%] transition-transform text-frame-bg px-8 py-4 rounded-md"}
			href={"#"}>{children}
		</Link>
	)
}
export default BuyTicket
