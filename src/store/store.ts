import { configureStore } from "@reduxjs/toolkit";

import trackedLogin from "./slices/loginTrack/slice";
import trackedPatients from "./slices/PatientList/slice";
import trackedComponent from "./slices/ActiveComponent/slice";
export const store = configureStore({
	reducer: {
		trackedLogin,
		trackedPatients,
		trackedComponent,
	},
});
