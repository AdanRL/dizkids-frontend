import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { LoginPage } from "./LoginPage";

export default {
	title: "Pages/LoginPage",
	component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<LoginPage {...args} />
		</Provider>
	</BrowserRouter>
);

export const SpecialistCard = Template.bind({});
SpecialistCard.args = {};
