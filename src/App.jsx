import React, { useEffect, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { AppStateProvider, AppStateContext } from "./state/AppProvider";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import MainRoutes from "./routes/MainRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import LoginScreen from "./pages/LoginScreen";
import ErrorScreen from "./pages/ErrorScreen";

initializeIcons();

function App() {
	const appStateContext = useContext(AppStateContext);

	useEffect(() => {
		document.body.classList.remove("app-mode-dark", "app-mode-light");
		document.body.classList.add(
			`app-mode-${appStateContext?.state.darkMode ? "dark" : "light"}`
		);
	}, [appStateContext?.state.darkMode]);

	return (
		<AppStateProvider>
			<HashRouter>
				<Routes>
					<Route
						path="/*"
						element={
              <MainRoutes />
						}
					/>
					<Route
						path="/jr-pics-admin"
						element={
							<ProtectedRoutes>
								<AdminRoutes />
							</ProtectedRoutes>
						}
					/>
					<Route path="/login" element={<LoginScreen />} />
					<Route path="*" element={<ErrorScreen />} />
				</Routes>
			</HashRouter>
		</AppStateProvider>
	);
}

export default App;