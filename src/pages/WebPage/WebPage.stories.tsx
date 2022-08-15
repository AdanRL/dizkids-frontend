import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { WebPage } from "./WebPage";

export default {
	title: "Pages/WebPage",
	component: WebPage,
} as ComponentMeta<typeof WebPage>;

const Template: ComponentStory<typeof WebPage> = (args) => (
	<BrowserRouter>
		<WebPage {...args} />
	</BrowserRouter>
);

export const main = Template.bind({});
main.args = {};
