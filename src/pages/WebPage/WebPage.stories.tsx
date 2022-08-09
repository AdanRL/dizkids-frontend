import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WebPage } from "./WebPage";

export default {
	title: "Pages/WebPage",
	component: WebPage,
} as ComponentMeta<typeof WebPage>;

const Template: ComponentStory<typeof WebPage> = (args) => (
	<WebPage {...args} />
);

export const main = Template.bind({});
main.args = {};
