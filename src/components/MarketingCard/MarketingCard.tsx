import { FC } from "react";
import {
	SupervisorAccount,
	SportsEsports,
	AccessibilityNew,
} from "@mui/icons-material";

import styles from "./MarketingCard.module.scss";

interface Props {
	title?: string;
	info?: string;
	icon?: string;
	firstColor: string;
	secondColor: string;
}

export const MarketingCard: FC<Props> = ({
	title,
	info,
	icon,
	firstColor,
	secondColor,
}) => {
	let iconChoosed = null;

	if (icon === "card1")
		iconChoosed = <SupervisorAccount className={styles.iconImage} />;
	if (icon === "card2")
		iconChoosed = <SportsEsports className={styles.iconImage} />;
	if (icon === "card3")
		iconChoosed = <AccessibilityNew className={styles.iconImage} />;

	return (
		<div
			className={styles.card}
			style={{
				background: `linear-gradient(to bottom, ${firstColor}, ${secondColor}`,
			}}
		>
			<div className={styles.icon}>{iconChoosed}</div>
			<div className={styles.content}>
				<h2>{title}</h2>
				<p>{info}</p>
			</div>
		</div>
	);
};
