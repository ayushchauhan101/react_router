import { Link } from "react-router-dom"
import GoBack from "./GoBack"

const ProductsList = [
	{ id: "p1", title: "Product1" },
	{ id: "p2", title: "Product2" },
	{ id: "p3", title: "Product3" },
]

function Products() {
	return (
		<>
			<h1>Products page</h1>
			<ul>
				{ProductsList.map((product) => (
					<li key={product.id}>
						<Link to={product.id}>{product.title}</Link>
					</li>
				))}
			</ul>
			<GoBack />
		</>
	)
}

export default Products
