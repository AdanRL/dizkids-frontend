import { FC } from "react";
import styles from "./PatientDetailsPage.module.scss";
import { SideMenuBar } from "../../components/SideMenuBar/SideMenuBar";
import { PatientDetails } from "../../components/PatientDetails/PatientDetails";
export const PatientDetailsPage: FC = () => {
	return (
		<div className={styles.container}>
			{/* <SideMenuBar /> */}
			<PatientDetails />
		</div>
	);
};
