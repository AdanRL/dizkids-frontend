import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { WebPage } from "./WebPage";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
	title: "Pages/WebPage",
	component: WebPage,
} as ComponentMeta<typeof WebPage>;

const Template: ComponentStory<typeof WebPage> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<WebPage {...args} />
		</Provider>
	</BrowserRouter>
);

export const main = Template.bind({});
main.args = {};
