import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
	name: "trackedPatients",
	initialState: {
		patientList: [],
	},
	reducers: {
		addPatientToList: (state, action) => {
			state.patientList = state.patientList.concat(action.payload);
		},
		removePatientToList: (state, action) => {
			state.patientList = state.patientList.filter(
				(patient) => patient !== action.payload
			);
		},
		getAllPatientList: (state, action) => {
			state.patientList = action.payload;
		},
	},
});

export const { addPatientToList, removePatientToList, getAllPatientList } =
	patientSlice.actions;
export default patientSlice.reducer;
