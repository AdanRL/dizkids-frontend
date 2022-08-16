import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../services/userServices";
import { addLoginInfo } from "../../store/slices/loginTrack/slice";
import styles from "./Login.module.scss";

export const Login: FC = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	// eslint-disable-next-line space-before-function-paren
	const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await login();
		dispatch(addLoginInfo(response));
		navigate("/home", { replace: true });
	};
	return (
		<div className={styles.box}>
			<div className={styles.square}></div>
			<div className={styles.square2}></div>
			<div className={styles.square3}></div>
			<div className={styles.container}>
				<h2>Iniciar Sesión</h2>
				<form className={styles.form} onSubmit={submitData}>
					<div className={styles.inputBox}>
						<input type="text" name="user" placeholder="Nombre de usuario" />
					</div>
					<div className={styles.inputBox}>
						<input type="password" name="password" placeholder="Contraseña" />
					</div>
					<div className={styles.inputBox}>
						<input type="submit" value="Iniciar sesión" />
					</div>
					<p className={styles.options}>
						<Link to="#" className={styles.link}>
							¿Olvidaste tu contraseña?
						</Link>
					</p>
					<p className={styles.options}>
						<Link to="#" className={styles.link}>
							¿Aún no tienes cuenta?
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
