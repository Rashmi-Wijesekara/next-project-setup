import { notFound } from "next/navigation";

export default function ProductDetails({
	params,
}: {
	params: {
		productId: string;
	};
}) {
	if (Number(params.productId) > 100) {
		notFound();
	}
	return (
		<div>Product {params.productId} details here!</div>
	);
}
