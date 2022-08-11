import { FC } from "react";

import styles from "./LoginPage.module.scss";
import { Login } from "../../components/Login/Login";

export const LoginPage: FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.firstColor}></div>
			<div className={styles.secondColor}></div>
			<div className={styles.thirdColor}></div>
			<div className={styles.formContainer}>
				<Login />
			</div>
		</section>
	);
};
