import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import WorksPage from "./pages/WorksPage/WorksPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./contexts/Theme";
import { useContext } from "react";

function App() {
	const [{ theme }] = useContext(ThemeContext);

	return (
		<div
			style={{
				backgroundColor: theme.backgroundColor,
				color: theme.color,
				boxSizing: "border-box",
			}}
		>
			<BrowserRouter>
				<div className="flex items-center justify-center h-screen">
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
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
