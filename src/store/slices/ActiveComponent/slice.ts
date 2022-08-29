import { createSlice } from "@reduxjs/toolkit";

export const activeComponent = createSlice({
	name: "trackedComponent",
	initialState: {
		component: "list",
	},
	reducers: {
		changeActive: (state, action) => {
			state.component = action.payload;
		},
	},
});

export const { changeActive } = activeComponent.actions;
export default activeComponent.reducer;
