import React, {useRef} from "react";
import styles from "./Commentaries.module.css";
import {Avatar, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {addComment, closeNewCommentWindow, updateNewCommentText} from "../../../CanvasUtils/CommentariesUtils";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";
import {newCommentaryVar} from "../../../Apollo/Storage";

/**
 * New commentary for canvas
 * @component
 */
const NewCommentary = ({x, y, text}: { x: number, y: number, text: string }) => {
	const ref = useRef(null);

	// close commentary if click was outside element
	useOnClickOutside(ref, () => closeNewCommentWindow());

	const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		updateNewCommentText(e.target.value);
	};

	const handleCreateButtonClick = () => {
		const newComment = newCommentaryVar();
		addComment(newComment.x, newComment.y, newComment.text);
		closeNewCommentWindow(true);
	};

	return (
		<div
			ref={ref}
			className={styles.openCommentWrapper}
			style={{
				top: y,
				left: x
			}}
		>
			<div className={styles.content}>
				<Avatar size="small" icon={<UserOutlined/>} className={styles.avatar}/>
				<div>
					<TextArea
						className={styles.textarea}
						value={text}
						onChange={handleTextAreaChange}
					/>
					<div className={styles.buttonBar}>
						<Button
							type="dashed"
							onClick={() => closeNewCommentWindow(true)}
						>
							Отмена
						</Button>
						<Button
							type="primary"
							onClick={handleCreateButtonClick}
						>
							Добавить
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewCommentary;
