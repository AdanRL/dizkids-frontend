import { render, screen } from "@testing-library/react";

import { WebPage } from "../WebPage";

test("should render web page", () => {
	render(<WebPage />);

	const menuItem = screen.getByText(/Dizkid/i);
	expect(menuItem).toBeInTheDocument();
});
