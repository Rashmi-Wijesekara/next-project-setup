import Link from "next/link";

export default function Products() {
	return (
		<div className="text-center">
			<div>Products List</div>
			
			<div className="flex flex-col gap-3 mt-4">
				<Link href={`/products/1`}>Product 1</Link>
			<Link href={`/products/2`}>Product 2</Link>
			<Link href={`/products/3`}>Product 3</Link>
			<Link href={`/products/4`}>Product 4</Link>
			</div>
		</div>
	)
}