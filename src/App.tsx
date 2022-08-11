import { WebPage } from "./pages/WebPage/WebPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage/LoginPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WebPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
