import { FC, useState } from "react";
import styles from "./NewPatient.module.scss";
import { putPatientList } from "../../services/userServices";
import { addPatientToList } from "../../store/slices/PatientList/slice";
import { useDispatch } from "react-redux";
import { Alert } from "@mui/material";

export const NewPatient: FC = () => {
	const dispatch = useDispatch();
	const [showAlert, setShowAlert] = useState(false);

	// eslint-disable-next-line space-before-function-paren
	const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const [response, status]: any = await putPatientList();
		console.log("status", status);
		if (status === 200) {
			dispatch(addPatientToList(response));
			setShowAlert(true);
			setTimeout(disableAlert, 3000);
		}
	};

	const disableAlert = () => {
		setShowAlert(false);
	};
	return (
		<form className={styles.container} onSubmit={submitData}>
			{showAlert === true ? (
				<Alert severity="success">Usuario Creado con éxito</Alert>
			) : (
				""
			)}
			<h3>Añadir Paciente</h3>
			<div className={styles.inputs}>
				<div className={styles.nameBox}>
					<input type="text" name="name" placeholder="Nombre(s)" />
					<input type="text" name="surname" placeholder="Apellido(s)" />
				</div>
				<div className={styles.dateBox}>
					<label> Fecha de Nacimiento: </label>
					<input type="date" name="birthdate" />
				</div>
				<h4>Tipo de dislalia</h4>
				<div className={styles.dislaliaBox}>
					<select name="type" id="type">
						<option value="Rotacismo">Rotacismo</option>
						<option value="Jotacismo">Jotacismo</option>
						<option value="Ficismo">Ficismo</option>
					</select>
					<span>
						Seleccionar el nivel que presenta tu paciente en la dislalia
						seleccionada:
					</span>

					<div className="radioBox">
						<input type="radio" name="level" id="basico" />
						<label htmlFor="basic">Básico</label>
						<input type="radio" name="level" id="medio" />
						<label htmlFor="basic">Medio</label>
						<input type="radio" name="level" id="avanzado" />
						<label htmlFor="basic">Avanzado</label>
					</div>
				</div>
				<div className={styles.button}>
					<input type="submit" value="Añadir" />
				</div>
			</div>
		</form>
	);
};
