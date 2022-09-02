import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { PatientDetails } from "./PatientDetails";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
	title: "components/PatientDetails",
	component: PatientDetails,
} as ComponentMeta<typeof PatientDetails>;

const Template: ComponentStory<typeof PatientDetails> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<PatientDetails {...args} />
		</Provider>
	</BrowserRouter>
);

export const patientInfo = Template.bind({});
patientInfo.args = {};
