import React from "react";
import {Button, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import styles from "./LoginPage.module.css"
import Title from "antd/lib/typography/Title";

const LoginPage = () => {
	const isAuthing = false;
	const authError = null;
	const navigate = useNavigate(); // hook for navigation to other pages

	const onFinish = (values: any) => {
		// dispatch(tryLogInAsync({login: values.login, password: values.password}));
	};
	const onFinishFailed = (errorInfo: any) => {
		// dispatch(setAuthError(errorInfo.errorFields[0].errors[0]))
	};
	const onFieldsChange = () => {
		// dispatch(setAuthError(null))
	}

	return (
		<div className={styles.loginContainer}>
			<Form
				labelCol={{span: 6}}
				wrapperCol={{span: 16}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				onFieldsChange={onFieldsChange}
				requiredMark={false}
				className={styles.loginForm}>
				<Form.Item wrapperCol={{offset: 6}} className={styles.loginTitle}>
					<Title level={3}>Вход в систему</Title>
				</Form.Item>
				<Form.Item
					label="Логин"
					name="login"
					rules={[{
						required: true,
						message: "Поле логин обязательно",
					}]}>
					<Input/>
				</Form.Item>
				<Form.Item
					label="Пароль"
					name="password"
					rules={[{
						required: true,
						message: "Поле пароль обязательно",
					}]}>
					<Input.Password/>
				</Form.Item>
				<Form.Item
					wrapperCol={{offset: 6}}
					validateStatus={authError ? "error" : "success"}
					help={authError}>
					<div className={styles.buttonBlock}>
						<Button type="primary" htmlType="submit" loading={isAuthing}>
							Войти
						</Button>
						<Button type="text" onClick={() => {
							onFieldsChange();
							navigate("/registration");
						}}>У меня нет аккаунта</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginPage;