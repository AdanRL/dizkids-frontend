import axios from "axios";

// eslint-disable-next-line space-before-function-paren
export const login = async () => {
	try {
		const response = await axios.post(
			"https://tfg-dizkids-api.app.smartmock.io/auth/login"
		);
		return response.data;
	} catch (err) {
		return "error";
	}
};
