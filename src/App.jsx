import { initializeIcons } from "@fluentui/react";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";

import ErrorScreen from "./pages/ErrorScreen";
import LoginScreen from "./pages/login/LoginScreen";
import AdminRoutes from "./routes/AdminRoutes";
import MainRoutes from "./routes/MainRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AppStateContext, AppStateProvider } from "./state/AppProvider";

initializeIcons();

function App() {
	const appStateContext = useContext(AppStateContext);

	useEffect(() => {
		document.body.classList.remove("app-mode-dark", "app-mode-light");
		document.body.classList.add(
			`app-mode-${appStateContext?.state.isDarkMode ? "dark" : "light"}`
		);
	}, [appStateContext?.state.isDarkMode]);

	return (
		<AppStateProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginScreen />} />
					<Route
						path="/jr-pics-admin"
						element={
							<ProtectedRoutes>
								<AdminRoutes />
							</ProtectedRoutes>
						}
					/>
					<Route path="/*" element={<MainRoutes />} />
					<Route path="*" element={<ErrorScreen />} />
				</Routes>
			</BrowserRouter>
		</AppStateProvider>
	);  
}

export default App;
