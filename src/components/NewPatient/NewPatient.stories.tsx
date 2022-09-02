import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { NewPatient } from "./NewPatient";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
	title: "components/NewPatient",
	component: NewPatient,
} as ComponentMeta<typeof NewPatient>;

const Template: ComponentStory<typeof NewPatient> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<NewPatient {...args} />
		</Provider>
	</BrowserRouter>
);

export const newPatient = Template.bind({});
newPatient.args = {};
