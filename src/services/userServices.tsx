import axios from "axios";
import { PatientList } from "../components/PatientList/PatientList";

// eslint-disable-next-line space-before-function-paren
export const login = async () => {
	try {
		const response = await axios.post(
			"https://tfg-dizkid-api.app.smartmock.io/auth/login"
		);
		return response.data;
	} catch (err) {
		return "error";
	}
};

// eslint-disable-next-line space-before-function-paren
export const getPatientList = async () => {
	try {
		const response = await axios.get(
			"https://tfg-dizkid-api.app.smartmock.io/api/user/3472001"
		);
		return response.data;
	} catch (err) {
		return "error";
	}
};
