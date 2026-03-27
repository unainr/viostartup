"use client";

import React from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useScroll } from "motion/react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "../theme/mode-toggle";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
	{ name: "Home", href: "/" },
	{ name: "New Call", href: "/new-call" },
	{ name: "Pricing", href: "/pricing" },
];

export const HeaderNav = () => {
	const [menuState, setMenuState] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	const { scrollYProgress } = useScroll();

	React.useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			setScrolled(latest > 0.05);
		});
		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<header>
			<nav
				data-state={menuState && "active"}
				className={cn(
					"fixed z-50 h-14 w-full border-b transition-colors duration-150",
					scrolled && "bg-background/50 backdrop-blur-xl",
				)}>
				<div className="h-full px-3 transition-all duration-300">
					<div className="relative flex h-full flex-wrap items-center justify-between gap-3 lg:gap-0">
						<div className="flex h-full w-full items-center justify-between gap-6 lg:w-auto">
							<Link
								href="/"
								className="-mr-3 flex items-center gap-2 whitespace-nowrap">
								<Image
									src="/logo2.png"
									alt="Design Logo"
									width={130}
									height={50}
									className="z-10 hidden   dark:block"
									priority
								/>
								<Image
									src="/logo1.png"
									alt="Design Logo"
									width={130}
									height={50}
									className="z-10 block  dark:hidden dark:invert"
									priority

								/>
							</Link>

							<Separator className="hidden lg:block" orientation="vertical" />

							<button
								onClick={() => setMenuState(!menuState)}
								aria-label={menuState == true ? "Close Menu" : "Open Menu"}
								className="relative z-20 -m-2.5 mr-2 block cursor-pointer p-2.5 lg:hidden">
								<Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
								<X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
							</button>

							<div className="hidden lg:block">
								<ul className="flex gap-10 text-sm">
									{menuItems.map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className={cn(
													"text-accent-foreground hover:text-muted-foreground block duration-150",
													isActive(item.href) &&
														"text-red-400 hover:text-red-500 underline underline-offset-4  font-semibold",
												)}>
												<span>{item.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:h-14 lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
							<div className="lg:hidden">
								<ul className="space-y-6 text-base">
									{menuItems.map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className={cn(
													"text-accent-foreground hover:text-muted-foreground block duration-150",
													isActive(item.href) &&
														"text-red-400 hover:text-red-500 underline underline-offset-4  font-semibold",
												)}>
												<span>{item.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>

							<Separator orientation="vertical" />
							<ModeToggle />
							<Separator orientation="vertical" />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
