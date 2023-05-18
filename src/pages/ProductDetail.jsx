import { useParams } from "react-router-dom"
import GoBack from "./GoBack"

function ProductDetail() {
	// use the same variable from App.jsx i.e productId
	const params = useParams()

	// use <Link to=".."> to go back to parent path
	// use relative="path" to go back one slash
	return (
		<>
			<h1>Product detail</h1>
			<p>You are now browsing : {params.productId}</p>
			<GoBack />
		</>
	)
}

export default ProductDetail
