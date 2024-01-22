export default function Docs({ params }: { params: { slug: string[] } }) {
	
	if (params.slug.length === 1 && params.slug[0] === "auth") {
		throw new Error("Documentation for authentication feature is not ready yet");
	}
	if (params.slug.length === 1) {
		return <div>Docs for feature {params.slug[0]}</div>
	}
	else if (params.slug.length === 2) { 
		return <div>Docs for feature {params.slug[0]} and concept {params.slug[1]}</div>
	}
	//return <h1>Docs home page</h1>;
	// this will return 404 not found
}