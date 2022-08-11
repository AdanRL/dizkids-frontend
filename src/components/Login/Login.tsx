import { style } from "@mui/system";
import { FC } from "react";

import { Link } from "react-router-dom";

import styles from "./Login.module.scss";

export const Login: FC = () => {
	return (
		<div className={styles.box}>
			<div className={styles.square}></div>
			<div className={styles.container}>
				<h2>Iniciar Sesión</h2>
				<form className={styles.form}>
					<div className={styles.inputBox}>
						<input type="text" placeholder="Nombre de usuario" />
					</div>
					<div className={styles.inputBox}>
						<input type="password" placeholder="Contraseña" />
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
