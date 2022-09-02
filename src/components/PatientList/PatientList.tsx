import { FC, useEffect, useState } from "react";
import styles from "./PatientList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { patientList } from "./PatientList.stories";
import { getPatientList } from "../../services/userServices";
import { getAllPatientList } from "../../store/slices/PatientList/slice";
import { Link } from "react-router-dom";

export const PatientList: FC = () => {
	const { loginInfo } = useSelector((state: any) => state.trackedLogin);
	const { patientList } = useSelector((state: any) => state.trackedPatients);
	console.log(patientList);

	const cards: any = [];

	patientList.forEach((patient: any) => {
		const patientUrl = "/details/" + patient.id;
		cards.push(
			<Link to={patientUrl} className={styles.list}>
				<div className={styles.imgContainer}>
					<img src={patient.photo} alt="" />
				</div>
				<div className={styles.content}>
					<h4>{patient.name}</h4>
				</div>
			</Link>
		);
	});
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Pacientes de {loginInfo.user}</h3>
			<div className={styles.listContainer}>{cards}</div>
		</div>
	);
};
