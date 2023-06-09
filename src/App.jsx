import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Root from "./pages/Root"
import Error from "./pages/Error"

// creating a parent route to wrap children routes
const myRouters = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/products", element: <Products /> },
		],
	},
])

function App() {
	return <RouterProvider router={myRouters} />
}

export default App
