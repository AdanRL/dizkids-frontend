import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { PatientListPage } from "./PatientListPage";

export default {
	title: "Pages/PatientListPage",
	component: PatientListPage,
} as ComponentMeta<typeof PatientListPage>;

const Template: ComponentStory<typeof PatientListPage> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<PatientListPage {...args} />
		</Provider>
	</BrowserRouter>
);

export const SpecialistCard = Template.bind({});
SpecialistCard.args = {};
