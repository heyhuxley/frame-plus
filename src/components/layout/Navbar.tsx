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
		<header className={"bg-frame-bg"}>
			<nav className={"flex items-center justify-between w-full fixed top-0 p-4"}>
				<div className="flex items-center gap-8">
					<Link href="/" className={"flex items-center justify-center"}>
						<Image draggable={"false"} loading="eager" className={"w-8"} src={logo} alt="logo"/>
						<Image draggable={"false"} loading="eager" className={"w-22 -ml-2"} src={wordmark} alt="logo"/>
					</Link>
					
					<ul className={"flex items-center gap-8 text-[14px]"}>
						{navLinks.map(({title, path}) => (
							<li className={clsx("border-b border-transparent hover:border-frame-text", pathname === path && "text-frame-accent-hover font-medium")}
							    key={title}>
								<Link href={path} title={title}>{title}</Link>
							</li>
						))}
					</ul>
				</div>
				
				<div className="text-[14px] flex items-center gap-4">
					<Link href={"/my-tickets"}>My Tickets</Link>
					<Link
						className={"font-semibold bg-frame-accent hover:bg-frame-accent-hover text-frame-bg px-4 py-2 rounded-sm"}
						href={"/my-tickets"}>Buy Tickets</Link>
				</div>
			</nav>
		</header>
	)
}
export default Navbar
