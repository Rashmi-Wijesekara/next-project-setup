export default function ReviewDetail({ params }: {
	params: {
		productId: string;
		reviewId: string;
	};
}) {
	return <div>Review {params.reviewId} of Product {params.productId}</div>;
}