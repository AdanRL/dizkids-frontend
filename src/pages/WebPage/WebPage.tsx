import { FC } from "react";
import { Button } from "@mui/material";

import styles from "./WebPage.module.scss";
import { MarketingCard } from "../../components/MarketingCard/MarketingCard";

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
			<section className={styles.secondSection}>
				<MarketingCard
					firstColor="#ff2ae0"
					secondColor="#645bf6"
					title="Avalado por profesionales"
					icon="card1"
					info="Miles de profesionales del sector utilizan nuestra aplicación como herramienta alternativa con sus pacientes."
				/>
				<MarketingCard
					firstColor="#ffec61"
					secondColor="#f321d7"
					title="Juegos con RA"
					icon="card2"
					info="Utilizamos la tecnología de la Realidad Aumentada para el tratamiento de la dislalia mediante divertidos juegos utilizando la lengua, boca, voz, etc."
				/>
				<MarketingCard
					firstColor="#24ff72"
					secondColor="#9a4eff"
					title="Accesible"
					icon="card3"
					info="Fácil e intuitiva de usar. Apostamos por la sencillez y lo minimalista."
				/>
			</section>
			<section className={styles.thirdSection}>
				<div className={styles.image}>
					<img src="/assets/profesionales.jpeg" alt="Logopeda" />
				</div>
				<div className={styles.recluit}>
					<h3>¿Quieres formar parte de nuestro equipo?</h3>
					<Button variant="contained" color="secondary" size="large">
						Contactanos
					</Button>
				</div>
			</section>
		</div>
	);
};
