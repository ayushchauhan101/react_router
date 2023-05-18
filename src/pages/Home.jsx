import { Link } from "react-router-dom"

// Link components works similar to a href but without re-rendering the website
function Home() {
	return (
		<>
			<h1>My homepage</h1>
			<p>
				Go to <Link to="/products"> products</Link>
			</p>
		</>
	)
}

export default Home
