import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: {
		productId: string;
	};
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const title = await new Promise(resolve => {
		setTimeout(() => {
			resolve(`item ${params.productId}`);
		}, 1000);
	})

	return {
		title: `Product ${title}`
	}
	// return {
	// 	title: `Product ${params.productId}`,
	// }
}

export default function ProductDetails({
	params,
}: Props) {
	if (Number(params.productId) > 100) {
		notFound();
	}
	return (
		<div>Product {params.productId} details here!</div>
	);
}
