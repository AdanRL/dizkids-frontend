import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { SideMenuBar } from "./SideMenuBar";

export default {
	title: "components/SideMenuBar",
	component: SideMenuBar,
} as ComponentMeta<typeof SideMenuBar>;

const Template: ComponentStory<typeof SideMenuBar> = (args) => (
	<BrowserRouter>
		<Provider store={store}>
			<SideMenuBar {...args} />
		</Provider>
	</BrowserRouter>
);

export const SpecialistCard = Template.bind({});
SpecialistCard.args = {};
