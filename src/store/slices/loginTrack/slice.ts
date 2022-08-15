import { createSlice } from "@reduxjs/toolkit";

export const trackedUserInfo = createSlice({
	name: "trackedLogin",
	initialState: {
		loginInfo: {},
	},
	reducers: {
		addLoginInfo: (state, action) => {
			state.loginInfo = action.payload;
		},
	},
});

export const { addLoginInfo } = trackedUserInfo.actions;
export default trackedUserInfo.reducer;
