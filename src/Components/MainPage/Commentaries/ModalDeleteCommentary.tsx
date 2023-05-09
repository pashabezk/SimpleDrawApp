import React from "react";
import {Button, Modal, Typography} from "antd";

const {Text} = Typography;

/**
 * Modal to confirm the comment deletion
 * @param {boolean} isOpened
 * @param {function} handleCancelClick handler for cancel button
 * @param {function} handleDeleteClick handler for delete button
 * @component
 */
const ModalDeleteCommentary = (
	{isOpened, handleCancelClick, handleDeleteClick}
		: { isOpened: boolean, handleCancelClick: () => void, handleDeleteClick: () => void }
) => {
	return (
		<Modal
			title="Удалить комментарий?"
			open={isOpened}
			closable={false}
			centered
			footer={[
				<Button
					type="dashed"
					onClick={handleCancelClick}
					key="cancel"
				>
					Отмена
				</Button>,
				<Button
					danger
					onClick={handleDeleteClick}
					key="delete"
				>
					Удалить
				</Button>
			]}>
			<div>
				<Text>Отменить это действие невозможно</Text><br/>
			</div>
		</Modal>
	);
};

export default ModalDeleteCommentary;
