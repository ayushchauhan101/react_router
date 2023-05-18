import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Root from "./pages/Root"
import Error from "./pages/Error"

// creating a parent route to wrap children routes
const myRouters = createBrowserRouter([
	{
		path: "/base",
		element: <Root />,
		errorElement: <Error />,
		// remove to forward slash '/' to convert to dynamic path
		children: [
			{ path: "", element: <Home /> },
			{ path: "products", element: <Products /> },
			// dynamic path routing
			{ path: "products/:productId", element: <ProductDetail /> },
		],
	},
])

function App() {
	return <RouterProvider router={myRouters} />
}

export default App
