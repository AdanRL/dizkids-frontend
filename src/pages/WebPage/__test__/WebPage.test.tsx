import { render, screen } from "@testing-library/react";

import { WebPage } from "../WebPage";

describe("UI test for Web Page", () => {
	test("should render the title", () => {
		render(<WebPage />);

		const title = screen.getByText(/Dizkid/i);
		expect(title).toBeInTheDocument();
	});
	test("should render the subtitle", () => {
		render(<WebPage />);

		const subtitle = screen.getByText(
			/Atención personalizada para el tratamiento de la dislalia/i
		);
		expect(subtitle).toBeInTheDocument();
	});
	test("should render a login button", () => {
		render(<WebPage />);
		const button = screen.getByText(/Iniciar sesión/i);
		expect(button).toBeInTheDocument();
	});
});
