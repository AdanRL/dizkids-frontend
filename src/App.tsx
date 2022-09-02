import { WebPage } from "./pages/WebPage/WebPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { PatientListPage } from "./pages/PatientListPage/PatientListPage";
import { PatientDetailsPage } from "./pages/PatientDetailsPage/PatientDetailsPage";
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<WebPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<PatientListPage />} />
					<Route path="/details/:id" element={<PatientDetailsPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
export default App;
