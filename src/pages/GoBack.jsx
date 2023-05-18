import { Link } from "react-router-dom"

function GoBack() {
	return (
		<Link to=".." relative="path">
			<button>Go Back</button>
		</Link>
	)
}

export default GoBack