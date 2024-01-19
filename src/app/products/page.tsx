"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Products() {
	const router = useRouter();

	const redirectHandler = () => {
		router.push('/')
	}

	return (
		<div className="text-center">
			<div>Products List</div>
			
			<div className="flex flex-col gap-3 mt-4">
				<Link href={`/products/1`}>Product 1</Link>
			<Link href={`/products/2`}>Product 2</Link>
			<Link href={`/products/3`}>Product 3</Link>
			<Link href={`/products/4`}>Product 4</Link>
			</div>

			<button className="bg-green-900 text-white px-5 py-2 mt-5" onClick={redirectHandler}>Redirect to Home</button>
		</div>
	)
}