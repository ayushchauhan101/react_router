import { Link, useNavigate } from "react-router-dom"

// Link components works similar to a href but without re-rendering the website
function Home() {
	const navigate = useNavigate()

	// programmatically navigate to products component
	function navigateHandler() {
		navigate("products")
	}

	return (
		<>
			<h1>My homepage</h1>
			<p>
				Go to <Link to="products"> products</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>Navigate to products</button>
				<br />
				This button is built using useNavigate()
			</p>
		</>
	)
}

export default Home
