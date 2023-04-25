import React from "react";
import {Button, Form, Input} from "antd";
import styles from "./Registration.module.css"
import ModalRegistrationCompleted from "./ModalRegistrationCompleted";
import Title from "antd/lib/typography/Title";
import {useNavigate} from "react-router-dom";

/**
 * Registration page component
 * @component
 */
const RegistrationPage = () => {
	const isLoading = false;
	const error = null;
	const isCompletedModalOpen = false;
	const navigate = useNavigate();

	const onFinish = async (values: any) => {
		// if (values.password === values.password2)
		// 	dispatch(tryRegisterAsync({login: values.login, password: values.password}));
		// else
		// 	dispatch(setRegistrationErrorMsg("Пароли не совпадают"));
	};
	const onFinishFailed = (errorInfo: any) => {
		// dispatch(setRegistrationErrorMsg(errorInfo.errorFields[0].errors[0]));
	};
	const onFieldsChange = () => {
		// dispatch(setRegistrationErrorMsg(null));
	};
	const onCompletedModalButtonClick = () => { // обработчик нажатий на кнопку в модульном окне уведомления об успешном завершении авторизации
		// dispatch(setIsRegistrationCompletedModalOpen(false)); // закрытие модульного окна
		navigate("/login"); // переход на страницу авторизации
	};

	return (
		<div className={styles.registrationContainer}>
			<Form
				labelCol={{span: 6}}
				wrapperCol={{span: 16}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				onFieldsChange={onFieldsChange}
				requiredMark={false}
				className={styles.registrationForm}>
				<Form.Item wrapperCol={{offset: 6}} className={styles.registrationTitle}>
					<Title level={3}>Регистрация</Title>
				</Form.Item>
				<Form.Item
					label="Логин"
					name="login"
					rules={[{
						required: true,
						message: "Поле логин обязательно",
					},{
						min: 5,
						message: "Минимальная длина 5 символов"
					},{
						pattern: /^[A-Za-z0-9]*$/,
						message: "Только латинские буквы и цифры"
					},{
						pattern: /^\D/,
						message: "Первым символом должна быть буква"
					}]}>
					<Input/>
				</Form.Item>
				<Form.Item
					label="Пароль"
					name="password"
					rules={[{
						required: true,
						message: "Поле пароль обязательно",
					},{
						pattern: /^[A-Za-z0-9]*$/,
						message: "Только латинские буквы и цифры"
					},{
						min: 8,
						message: "Минимальная длина пароля 8 символов"
					}]}>
					<Input.Password/>
				</Form.Item>
				<Form.Item
					label="Ещё раз"
					name="password2"
					rules={[{
						required: true,
						message: "Повторите пароль",
					},{
						pattern: /^[A-Za-z0-9]*$/,
						message: "Только латинские буквы и цифры"
					},{
						min: 8,
						message: "Минимальная длина пароля 8 символов"
					}]}>
					<Input.Password/>
				</Form.Item>
				<Form.Item
					wrapperCol={{offset: 6}}
					validateStatus={error ? "error" : "success"}
					help={error}>
					<div className={styles.buttonBlock}>
						<Button type="primary" htmlType="submit" loading={isLoading}>
							Регистрация
						</Button>
						<Button type="text" onClick={() => {
							onFieldsChange();
							navigate("/login");
						}}>Уже есть аккаунт</Button>
					</div>
				</Form.Item>
			</Form>
			<ModalRegistrationCompleted isCompletedModalOpen={isCompletedModalOpen} onButtonClick={onCompletedModalButtonClick}/>
		</div>
	);
};

export default RegistrationPage;
