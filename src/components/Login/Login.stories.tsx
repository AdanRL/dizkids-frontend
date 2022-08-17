import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
	title: "components/Login Form",
	component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<Login {...args} />
		</Provider>
	</BrowserRouter>
);

export const loginForm = Template.bind({});
loginForm.args = {};
