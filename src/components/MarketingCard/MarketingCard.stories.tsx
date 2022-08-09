import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MarketingCard } from "./MarketingCard";

export default {
	title: "Components/MarketingCard",
	component: MarketingCard,
} as ComponentMeta<typeof MarketingCard>;

const Template: ComponentStory<typeof MarketingCard> = (args) => (
	<MarketingCard {...args} />
);

export const SpecialistCard = Template.bind({});
SpecialistCard.args = {
	icon: "card1",
	title: "Avalado por profesionales",
	info: "Miles de profesionales del sector utilizan nuestra aplicación como herramienta alternativa con sus pacientes.",
	firstColor: "#ff2ae0",
	secondColor: "#645bf6",
};

export const GameCard = Template.bind({});
GameCard.args = {
	icon: "card2",
	title: "Juegos con RA",
	info: "Utilizamos la tecnología de la Realidad Aumentada para el tratamiento de la dislalia mediante divertidos juegos utilizando la lengua, boca, voz, etc.",
	firstColor: "#ffec61",
	secondColor: "#f321d7",
};

export const AccesibilityCard = Template.bind({});
AccesibilityCard.args = {
	icon: "card3",
	title: "Avalado por profesionales",
	info: "Miles de profesionales del sector utilizan nuestra aplicación como herramienta alternativa con sus pacientes.",
	firstColor: "#24ff72",
	secondColor: "#9a4eff",
};
