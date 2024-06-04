import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import WorksPage from "./pages/WorksPage/WorksPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./contexts/Theme";
import { useContext, useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";

function App() {
	const [{ theme }] = useContext(ThemeContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 6000);
	});

	if (loading) {
		return <Loader />;
	}

	return (
		<div
			style={{
				backgroundColor: theme.backgroundColor,
				color: theme.color,
			}}
			className=" flex items-center justify-center h-screen"
		>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path="works"
						element={<WorksPage />}
					/>
					<Route
						path="about"
						element={<AboutPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
