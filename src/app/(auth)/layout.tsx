"use client"
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const [email, setEmail] = useState("")
	// convert this layout into template.tsx for resetting the state when changing the child components
	
	return (
		<div>
			<div className="">
				Welcome!!!
			</div>

			<input placeholder="Enter Email" onChange={e => setEmail(e.target.value)} value={email} className="text-black" />

			<div className="flex flex-row gap-5 text-center my-10">
				<Link className="bg-blue-200 text-black font-bold px-10 py-1" href="/login">Login</Link>
				<Link className="bg-blue-200 text-black font-bold px-10 py-1" href="/register">Register</Link>
			</div>
			{children}
		</div>
	);
}
