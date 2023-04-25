import React from "react";
import styles from "./Header.module.css"
import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

/**
 * Header component
 * @component
 */
const AppHeader = () => {
	const userId = 1;
	const isAuthing = false;
	const navigate = useNavigate();

	const onLogoutButtonClick = () => {
		console.log("logout button click");
	};

	return (
		<header className={styles.mainHeader}>
			<div className={"center1000px " + styles.centeredMainHeader}>
				<div className={styles.logoContainer}>
					{/*<img src={logo} alt="logo"/>*/}
					<h1>Draw App</h1>
				</div>
				<div className={styles.headerColumnRight}>
					{
						userId
							? <Button onClick={onLogoutButtonClick} icon={<LogoutOutlined/>} loading={isAuthing}>Выйти</Button>
							: <>
								<Button onClick={() => navigate("/registration")} type={"default"}>Создать аккаунт</Button>
								<Button onClick={() => navigate("/login")} type={"primary"}>Войти</Button>
							</>
					}
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
