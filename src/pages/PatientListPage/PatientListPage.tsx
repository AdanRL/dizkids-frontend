import { FC, useEffect, useState } from "react";
import { SideMenuBar } from "../../components/SideMenuBar/SideMenuBar";
import styles from "./PatientListPage.module.scss";
import { PatientList } from "../../components/PatientList/PatientList";
import { getPatientList } from "../../services/userServices";
import { getAllPatientList } from "../../store/slices/PatientList/slice";
import { useDispatch, useSelector } from "react-redux";
import { NewPatient } from "../../components/NewPatient/NewPatient";

export const PatientListPage: FC = () => {
	const dispatch = useDispatch();
	const { component } = useSelector((state: any) => state.trackedComponent);
	const [active, setActive] = useState(component);

	useEffect(() => {
		// eslint-disable-next-line space-before-function-paren
		const loadData = async () => {
			const response = await getPatientList();
			dispatch(getAllPatientList(response.patientList));
		};
		loadData();
	}, []);

	useEffect(() => {
		setActive(component);
	}, [component]);

	const loadComponent = () => {
		if (active === "list") return <PatientList />;

		if (active === "new") return <NewPatient />;
	};
	return (
		<div className={styles.container}>
			<SideMenuBar />
			{loadComponent()}
		</div>
	);
};
