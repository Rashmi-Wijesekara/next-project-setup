export default function BlogLayout({ children }: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="">
				Featured Blog Posts List Here!
			</div>
			{children}
		</>
	)
}