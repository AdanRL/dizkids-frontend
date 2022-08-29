import { FC } from "react";
import styles from "./NewPatient.module.scss";
import { putPatientList } from "../../services/userServices";
import { addPatientToList } from "../../store/slices/PatientList/slice";
import { useDispatch } from "react-redux";

export const NewPatient: FC = () => {
	const dispatch = useDispatch();

	// eslint-disable-next-line space-before-function-paren
	const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("submit");
		const response = await putPatientList();
		dispatch(addPatientToList(response));
	};
	return (
		<form className={styles.container} onSubmit={submitData}>
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

// <form className={styles.container}>
// 	<div className={styles.title}>
// 		<h3>Añadir Paciente</h3>
// 	</div>
// 	<div className={styles.inputsBox}>
// 		<div className={styles.nameBox}>
// 			<input type="text" name="name" placeholder="Nombre(s)" />
// 			<input type="text" name="surname" placeholder="Apellido(s)" />
// 		</div>
// 		<div className={styles.dateBox}>
// 			<input
// 				type="date"
// 				name="birthdate"
// 				placeholder="Fecha de Nacimiento:"
// 			/>
// 		</div>
// 		<div className={styles.dislaliaBox}>
// 			<h4>Tipos de dislalia</h4>
// 		</div>
// 	</div>
// </form>
