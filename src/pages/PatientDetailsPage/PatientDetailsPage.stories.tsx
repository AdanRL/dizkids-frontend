import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { PatientDetailsPage } from "./PatientDetailsPage";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
	title: "components/PatientDetailsPage",
	component: PatientDetailsPage,
} as ComponentMeta<typeof PatientDetailsPage>;

const Template: ComponentStory<typeof PatientDetailsPage> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<PatientDetailsPage {...args} />
		</Provider>
	</BrowserRouter>
);

export const patientDetailsPage = Template.bind({});
patientDetailsPage.args = {};
