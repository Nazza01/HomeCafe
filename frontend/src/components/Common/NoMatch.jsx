import { Image } from "react-bootstrap";

function NotFound() {
	return (
		<div>
			<h2>Error 404 - Page not found</h2>
			<p>Please contact website admin</p>
			<Image src="http://http.cat/404.jpg" className="img-fluid" alt="http cat 404 error" ></Image>
		</div>
	)
}

export default NotFound;