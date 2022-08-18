import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { PatientList } from "./PatientList";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
	title: "components/PatientList",
	component: PatientList,
} as ComponentMeta<typeof PatientList>;

const Template: ComponentStory<typeof PatientList> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<PatientList {...args} />
		</Provider>
	</BrowserRouter>
);

export const patientList = Template.bind({});
patientList.args = {};
