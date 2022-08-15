import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { WebPage } from "../WebPage";

describe("UI test for Web Page", () => {
	test("should render the title", () => {
		render(
			<BrowserRouter>
				<WebPage />
			</BrowserRouter>
		);

		const title = screen.getByText(/Dizkid/i);
		expect(title).toBeInTheDocument();
	});
	test("should render the subtitle", () => {
		render(
			<BrowserRouter>
				<WebPage />
			</BrowserRouter>
		);
		const subtitle = screen.getByText(
			/Atención personalizada para el tratamiento de la dislalia/i
		);
		expect(subtitle).toBeInTheDocument();
	});
	test("should render a login button", () => {
		render(
			<BrowserRouter>
				<WebPage />
			</BrowserRouter>
		);
		const button = screen.getByText(/Iniciar sesión/i);
		expect(button).toBeInTheDocument();
	});
});
