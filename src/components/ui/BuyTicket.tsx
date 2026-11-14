import Link from "next/link";

const BuyTicket = ({text}: { text: string }) => {
	return (
		<Link
			className={"font-medium bg-frame-accent hover:bg-frame-accent-hover hover:scale-95 transition-transform text-frame-bg px-6 py-4 rounded-sm"}
			href={"#"}>{text}
		</Link>
	)
}
export default BuyTicket
