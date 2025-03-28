"use client";

import Link from "next/link";
import { Separator } from "../components/ui/seperator";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Footer = () => {
	return (
		<footer className="mt-20 pb-16 pt-20 flex gap-4 flex-col space-y-16">
			
			<div>
				<div className="flex items-end gap-4 justify-between">
					<ul className="flex leading-none flex-wrap gap-4">
						<Link
							className="hover:text-foreground font-medium text-muted-foreground"
							target="_blank"
							href="mailto:pranavrajveer.workmail@gmail.com"
						>
							Contact
						</Link>
						<p
							onClick={() => {
								document.getElementById("add-resource")?.click();
							}}
							className="hover:text-foreground font-medium cursor-pointer
							text-muted-foreground transition-colors"
						>
							Contribute
						</p>
						<Link href="/contact"></Link>
					</ul>

					<div className="flex items-end text-end gap-0.5 flex-col">
						<p>
							<span className="tracking-tight font-medium leading-none text-muted-foreground">
								Developers
							</span>
							Den
						</p>
						<p className="text-muted-foreground text-xs">
							© {new Date().getFullYear()} DevelopersDen
						</p>
						<p className="text-muted-foreground text-xs">
							Made with ❤️ by{" "}
							<Link
								target="_blank"
								className="text-foreground hover:underline"
								href={""}
							>
								Raveesh Kumar
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};