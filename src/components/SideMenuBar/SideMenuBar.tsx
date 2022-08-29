import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeActive } from "../../store/slices/ActiveComponent/slice";
import {
	Menu,
	Close,
	ListAltOutlined,
	PersonAddAlt1Outlined,
	LogoutOutlined,
} from "@mui/icons-material";

import styles from "./SideMenuBar.module.scss";

export const SideMenuBar: FC = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [activeOption, setActiveOption] = useState(0);

	const listActive = () => {
		setActiveOption(1);
	};

	const addPatientActive = () => {
		setActiveOption(2);
	};

	const logoutActive = () => {
		setActiveOption(3);
	};

	const resetActive = () => {
		setActiveOption(0);
	};
	const changeToAdd = () => {
		dispatch(changeActive("new"));
	};

	const changeToList = () => {
		dispatch(changeActive("list"));
	};

	const handleOpen = () => {
		open ? setOpen(false) : setOpen(true);
	};

	return open ? (
		<div className={styles.navigationOpen}>
			<div className={styles.menuToggle} onClick={handleOpen}>
				<Close className={styles.menuIcon} />
			</div>
			<ul className={styles.options}>
				<li
					className={styles.list}
					onMouseOver={listActive}
					onMouseLeave={resetActive}
				>
					<Link className={styles.link} to="/home">
						{activeOption === 1 ? (
							<span
								className={styles.icon}
								style={{ background: "#2196f3", color: "white" }}
							>
								<ListAltOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<ListAltOutlined fontSize="large" />
							</span>
						)}
						<span className={styles.text}>Mis Pacientes</span>
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={addPatientActive}
					onMouseLeave={resetActive}
				>
					<Link className={styles.link} to="#">
						{activeOption === 2 ? (
							<span
								className={styles.icon}
								style={{ background: "#b145e9", color: "white" }}
							>
								<PersonAddAlt1Outlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<PersonAddAlt1Outlined fontSize="large" />
							</span>
						)}
						<span className={styles.text}>Agregar Paciente</span>
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={logoutActive}
					onMouseLeave={resetActive}
					onClick={changeToAdd}
				>
					<Link className={styles.link} to="#">
						{activeOption === 3 ? (
							<span
								className={styles.icon}
								style={{ background: "green", color: "white" }}
							>
								<LogoutOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<LogoutOutlined fontSize="large" />
							</span>
						)}
						<span className={styles.text}>Salir</span>
					</Link>
				</li>
			</ul>
		</div>
	) : (
		<div className={styles.navigationClosed}>
			<div className={styles.menuToggle} onClick={handleOpen}>
				<Menu className={styles.menuIcon} />
			</div>
			<ul className={styles.options}>
				<li
					className={styles.list}
					onMouseOver={listActive}
					onMouseLeave={resetActive}
					onClick={changeToList}
				>
					<Link className={styles.link} to="#">
						{activeOption === 1 ? (
							<span
								className={styles.icon}
								style={{
									background: "#2196f3",
									color: "white",
									transform: "translateX(30px)",
								}}
							>
								<ListAltOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<ListAltOutlined fontSize="large" />
							</span>
						)}
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={addPatientActive}
					onMouseLeave={resetActive}
					onClick={changeToAdd}
				>
					<Link className={styles.link} to="#">
						{activeOption === 2 ? (
							<span
								className={styles.icon}
								style={{
									background: "#b145e9",
									color: "white",
									transform: "translateX(30px)",
								}}
							>
								<PersonAddAlt1Outlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<PersonAddAlt1Outlined fontSize="large" />
							</span>
						)}
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={logoutActive}
					onMouseLeave={resetActive}
				>
					<Link className={styles.link} to="#">
						{activeOption === 3 ? (
							<span
								className={styles.icon}
								style={{
									background: "green",
									color: "white",
									transform: "translateX(30px)",
								}}
							>
								<LogoutOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<LogoutOutlined fontSize="large" />
							</span>
						)}
					</Link>
				</li>
			</ul>
		</div>
	);
};
