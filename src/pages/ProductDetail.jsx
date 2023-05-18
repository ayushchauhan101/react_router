import { useParams, Link } from "react-router-dom"

function ProductDetail() {
	// use the same variable from App.jsx i.e productId
	const params = useParams()

	return (
		<>
			<h1>Product detail</h1>
			<p>You are now browsing : {params.productId}</p>

			<Link to="/products">
				<button> Go Back</button>
			</Link>
		</>
	)
}

export default ProductDetail
