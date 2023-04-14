import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

import OrderPage from "./pages/OrderPage";

function App() {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<Sidebar />
			<div className="col-span-5">
				<Route path="/order">
					<OrderPage />
				</Route>
			</div>
		</div>
	);
}

export default App;
