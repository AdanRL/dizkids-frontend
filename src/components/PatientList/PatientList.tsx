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

	const cards: any = [];
	useEffect(() => {
		// eslint-disable-next-line space-before-function-paren
		const loadData = async () => {
			const patientList = await getPatientList();
			setPatients(patientList);
		};
		loadData();
	}, []);

	patients.patientList.forEach((patient) => {
		console.log(patient);
		cards.push(
			<div className={styles.list}>
				<div className={styles.imgContainer}>
					<img src={patient.photo} alt="" />
				</div>
				<div className={styles.content}>
					<h4>{patient.name}</h4>
				</div>
			</div>
		);
	});
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Mis Pacientes</h3>
			<div className={styles.listContainer}>{cards}</div>
		</div>
	);
};
