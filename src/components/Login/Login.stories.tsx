import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./Login";

export default {
	title: "Pages/Login Form",
	component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => (
	<BrowserRouter>
		<Login {...args} />
	</BrowserRouter>
);

export const loginForm = Template.bind({});
loginForm.args = {};
