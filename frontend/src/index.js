import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { router } from "./App";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<RouterProvider router={router} />
		<ToastContainer />
	</>
);
