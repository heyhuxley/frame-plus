'use client'

import Link from "next/link"
import Image from 'next/image'
import wordmark from "@/assets/frame-plus-logo.svg"
import logo from "@/assets/frame-icon-color.svg"
import navLinks from "@/lib/nav-links";
import {usePathname} from 'next/navigation'
import clsx from "clsx";


const Navbar = () => {
	const pathname = usePathname();
	
	return (
		<header className={"w-full sticky top-0 bg-frame-bg border-b border-frame-text/10 z-100"}>
			<nav className={"flex items-center justify-between w-full p-4"}>
				<div className="flex items-center gap-8">
					<Link href="/" className={"flex items-center justify-center"}>
						<Image draggable={"false"} loading="eager" className={"w-10"} src={logo} alt="logo"/>
						<Image draggable={"false"} loading="eager" className={"w-22 -ml-2"} src={wordmark} alt="logo"/>
					</Link>
					
					<ul className={"flex items-center gap-8 text-[14px]"}>
						{navLinks.map(({title, path}, index) => (
							<li className={clsx("link-underline", pathname === path && "text-frame-accent-hover font-medium", index > 0 && "lg:inline-block hidden")}
							    key={title}>
								<Link href={path} title={title}>{title}</Link>
							</li>
						))}
					</ul>
				</div>
				
				<div className="text-[14px] flex items-center gap-4">
					<Link className={"link-underline text-frame-text"} href={"/my-tickets"}>My Tickets</Link>
					<Link
						className={"font-semibold bg-frame-accent hover:bg-frame-accent-hover hover:scale-95 transition-transform text-frame-bg px-4 py-2 rounded-sm"}
						href={"/my-tickets"}>Buy Tickets</Link>
				</div>
			</nav>
		</header>
	)
}
export default Navbar
