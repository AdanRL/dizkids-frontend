import { FC } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SideMenuBar } from "../../components/SideMenuBar/SideMenuBar";
import styles from "./PatientListPage.module.scss";

export const PatientListPage: FC = () => {
	return (
		<div className={styles.container}>
			<SideMenuBar />
		</div>
	);
};
