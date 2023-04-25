import React from "react";
import Title from "antd/lib/typography/Title";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {FrownOutlined} from "@ant-design/icons";

/**
 * Page not found component
 * @param {string} [title="404. Такой страницы нет"] page title
 * @param {string} [message="Попробуйте ввести другой адрес"] page message
 * @component
 */
const PageNotFound = ({title = "404. Такой страницы нет", message = "Попробуйте ввести другой адрес"}) => {

	const navigate = useNavigate(); // hook for navigation to other pages
	const userId = null;

	/** component body */
	const body = (
		<>
			<Title>
				<FrownOutlined/>&nbsp;
				{title}
			</Title>
			<p>{message}</p>
			<Button type={"primary"} onClick={() => navigate("/login")}>
				{
					userId
						? <>Перейти в профиль</>
						: <>Авторизоваться</>
				}
			</Button>
		</>
	);

	return (
		<div style={{margin: "15px"}}>
			{body}
		</div>
	);
};

export default PageNotFound;
