import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom"

import Home from "../src/pages/Home"
import Products from "../src/pages/Products"

const routesDefinition = createRoutesFromElements(
	<Route>
		<Route path="/" element={<Home />} />
		<Route path="/products" element={<Products />} />
	</Route>
)

const myRouters = createBrowserRouter(routesDefinition)

function App() {
	return (
		<>
			<RouterProvider router={myRouters} />
		</>
	)
}
