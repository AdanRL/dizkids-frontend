import { configureStore } from "@reduxjs/toolkit";

import trackedLogin from "./slices/loginTrack/slice";

export const store = configureStore({
	reducer: {
		trackedLogin,
	},
});
