import { FC } from "react";
import { Button } from "@mui/material";

import styles from "./WebPage.module.scss";

export const WebPage: FC = () => {
	return (
		<div>
			<section className={styles.firstSection}>
				<div className={styles.firstColor}></div>
				<div className={styles.secondColor}></div>
				<div className={styles.thirdColor}></div>
				<div className={styles.container}>
					<h1 className={styles.title}>Dizkids</h1>
					<h2 className={styles.subTitle}>
						Atención personalizada para el tratamiento de la dislalia
					</h2>
					<Button variant="contained" color="secondary" size="large">
						Iniciar sesión
					</Button>
				</div>
			</section>
			<section className={styles.secondSection}></section>
		</div>
	);
};
