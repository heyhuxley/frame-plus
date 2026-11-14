import Link from "next/link";

const BuyTicket = ({text}: { text: string }) => {
	return (
		<Link
			className={"w-full font-medium bg-frame-accent hover:bg-frame-accent-hover hover:scale-[98%] transition-transform text-frame-bg px-8 py-4 rounded-sm"}
			href={"#"}>{text}
		</Link>
	)
}
export default BuyTicket
