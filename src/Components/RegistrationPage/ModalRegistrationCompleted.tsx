import React from "react";
import {Button, Modal, Typography} from "antd";

const {Text} = Typography;

/** Props interface */
interface IModalRegistrationCompletedProps {
	isCompletedModalOpen: boolean,
	onButtonClick: any
}

/**
 * Modal with notification about success authorization
 * @param isCompletedModalOpen
 * @param onButtonClick
 * @component
 */
const ModalRegistrationCompleted = ({isCompletedModalOpen, onButtonClick}: IModalRegistrationCompletedProps) => {
	return (
		<Modal
			title="Авторизация прошла успешно"
			open={isCompletedModalOpen}
			closable={false}
			centered
			footer={[
				<Button
					type="primary"
					onClick={onButtonClick}
					key="ok">Перейти к авторизации
				</Button>
			]}>
			<div>
				<Text>Нажмите на кнопку ниже, чтобы войти в систему</Text><br/>
			</div>
		</Modal>
	);
};

export default ModalRegistrationCompleted;