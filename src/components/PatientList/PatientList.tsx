import { FC, useEffect, useState } from "react";
import styles from "./PatientList.module.scss";
import { useDispatch } from "react-redux";
import { patientList } from "./PatientList.stories";
import { getPatientList } from "../../services/userServices";

export const PatientList: FC = () => {
	const [patients, setPatients] = useState({
		patientList: [
			{
				id: "",
				email: "",
				name: "",
				phone: "",
				photo: "",
			},
		],
	});

	useEffect(() => {
		// eslint-disable-next-line space-before-function-paren
		const loadData = async () => {
			const patientList = await getPatientList();
			setPatients(patientList);
		};
		loadData();
	}, []);
	return (
		<div>
			<div>Hello</div>
		</div>
	);
};
