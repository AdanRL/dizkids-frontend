import { render, screen } from "@testing-library/react";
import { MarketingCard } from "../MarketingCard";

describe("UI test for MarketingCard", () => {
	test("should render all Card content", () => {
		render(
			<MarketingCard
				firstColor="#ffec61"
				secondColor="#f321d7"
				title="Juegos con RA"
				icon="card2"
				info="Utilizamos la tecnología de la Realidad Aumentada para el tratamiento de la dislalia mediante divertidos juegos utilizando la lengua, boca, voz, etc."
			/>
		);

		const title = screen.getByText(/Juegos con RA/i);
		const info = screen.getByText(
			/Utilizamos la tecnología de la Realidad Aumentada para el tratamiento de la dislalia mediante divertidos juegos utilizando la lengua, boca, voz, etc./i
		);
		expect(title).toBeInTheDocument();
		expect(info).toBeInTheDocument();
	});
});
