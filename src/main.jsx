import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Product from "./pages/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path="/" element={<App />} />
				<Route path="/grownotes" element={<Product />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
