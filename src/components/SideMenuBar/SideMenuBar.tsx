import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
	Menu,
	Close,
	HomeOutlined,
	SettingsOutlined,
	CalendarMonthOutlined,
} from "@mui/icons-material";

import styles from "./SideMenuBar.module.scss";

export const SideMenuBar: FC = () => {
	const [open, setOpen] = useState(false);
	const [activeOption, setActiveOption] = useState(0);

	const homeActive = () => {
		setActiveOption(1);
	};

	const settingsActive = () => {
		setActiveOption(2);
	};

	const calendarActive = () => {
		setActiveOption(3);
	};

	const resetActive = () => {
		setActiveOption(0);
	};

	const handleOpen = () => {
		open ? setOpen(false) : setOpen(true);
		console.log(open);
	};

	return open ? (
		<div className={styles.navigationOpen}>
			<div className={styles.menuToggle} onClick={handleOpen}>
				<Close className={styles.menuIcon} />
			</div>
			<ul className={styles.options}>
				<li
					className={styles.list}
					onMouseOver={homeActive}
					onMouseLeave={resetActive}
				>
					<Link className={styles.link} to="#">
						{activeOption === 1 ? (
							<span
								className={styles.icon}
								style={{ background: "#2196f3", color: "white" }}
							>
								<HomeOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<HomeOutlined fontSize="large" />
							</span>
						)}
						<span className={styles.text}>Principal</span>
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={settingsActive}
					onMouseLeave={resetActive}
				>
					<Link className={styles.link} to="#">
						{activeOption === 2 ? (
							<span
								className={styles.icon}
								style={{ background: "#b145e9", color: "white" }}
							>
								<SettingsOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<SettingsOutlined fontSize="large" />
							</span>
						)}
						<span className={styles.text}>Mis datos</span>
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={calendarActive}
					onMouseLeave={resetActive}
				>
					<Link className={styles.link} to="#">
						{activeOption === 3 ? (
							<span
								className={styles.icon}
								style={{ background: "green", color: "white" }}
							>
								<CalendarMonthOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<CalendarMonthOutlined fontSize="large" />
							</span>
						)}
						<span className={styles.text}>Calendario</span>
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
					onMouseOver={homeActive}
					onMouseLeave={resetActive}
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
								<HomeOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<HomeOutlined fontSize="large" />
							</span>
						)}
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={settingsActive}
					onMouseLeave={resetActive}
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
								<SettingsOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<SettingsOutlined fontSize="large" />
							</span>
						)}
					</Link>
				</li>
				<li
					className={styles.list}
					onMouseOver={calendarActive}
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
								<CalendarMonthOutlined fontSize="large" />
							</span>
						) : (
							<span className={styles.icon}>
								<CalendarMonthOutlined fontSize="large" />
							</span>
						)}
					</Link>
				</li>
			</ul>
		</div>
	);
};
