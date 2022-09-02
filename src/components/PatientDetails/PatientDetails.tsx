import { FC, useState, useEffect } from "react";
import styles from "./PatientDetails.module.scss";
import { Button } from "@mui/material";
import { getPatientDetails } from "../../services/userServices";
import { Link } from "react-router-dom";

export const PatientDetails: FC = () => {
	const [patientInfo, setPatientInfo] = useState({
		name: "",
		level: "",
		photo: "",
		dislaliaTypes: [
			{
				type: "",
				level: "",
			},
		],
	});
	useEffect(() => {
		// eslint-disable-next-line space-before-function-paren
		const loadData = async () => {
			const response: any = await getPatientDetails();
			setPatientInfo(response[0]);
		};
		loadData();
	}, []);

	return (
		<div className={styles.container}>
			<h3>Datos del paciente: </h3>
			<div className={styles.info}>
				<div className={styles.imgContainer}>
					<img src={patientInfo.photo} alt="" />
				</div>
				<div className={styles.content}>
					<span>Nombre: {patientInfo.name}</span>
					<span>Nivel: {patientInfo.dislaliaTypes[0].level}</span>
					<span>Dislalia: {patientInfo.dislaliaTypes[0].type}</span>
					<Button
						variant="contained"
						color="secondary"
						size="small"
						component={Link}
						to="/home"
					>
						Editar
					</Button>
				</div>
			</div>
			<div className={styles.options}>
				<button>Actividades</button>
				<button>Grabaciones</button>
			</div>
			<div className={styles.back}>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					component={Link}
					to="/home"
				>
					Volver
				</Button>
			</div>
		</div>
	);
};
