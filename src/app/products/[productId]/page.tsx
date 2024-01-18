export default function ProductDetails({ params }: {
	params: {
		productId: string;
	};
}) {
	return <div>Product {params.productId} details here!</div>;
}