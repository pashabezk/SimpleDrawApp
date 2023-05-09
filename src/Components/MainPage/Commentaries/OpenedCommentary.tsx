import React, {useRef, useState} from "react";
import styles from "./Commentaries.module.css";
import {Avatar} from "antd";
import {CloseOutlined, DeleteOutlined, UserOutlined} from "@ant-design/icons";
import {deleteComment, setOpenCloseComment} from "../../../CanvasUtils/CommentariesUtils";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";
import {ICommentary} from "../../../Apollo/Interfaces";
import ModalDeleteCommentary from "./ModalDeleteCommentary";

/**
 * Opened commentary for canvas
 * @param {ICommentary} comment
 * @component
 */
const OpenedCommentary = ({comment}: { comment: ICommentary }) => {
	const ref = useRef(null);
	const [isModalConfirmDeleteOpen, setIsModalConfirmDeleteOpen] = useState(false);

	// close commentary if click was outside element
	useOnClickOutside(ref, () => {
		if (!isModalConfirmDeleteOpen)
			setOpenCloseComment(comment.commentId, false)
	});

	return (
		<div
			ref={ref}
			className={styles.openCommentWrapper}
			style={{
				top: comment.y,
				left: comment.x
			}}
		>
			<div className={styles.buttonBar}>
				<DeleteOutlined
					style={{color: "red"}}
					onClick={() => setIsModalConfirmDeleteOpen(true)}
				/>
				<CloseOutlined
					onClick={() => setOpenCloseComment(comment.commentId, false)}
				/>
			</div>
			<div className={styles.content}>
				<Avatar size="small" icon={<UserOutlined/>} className={styles.avatar}/>
				<div>
					<p className={styles.author}>{comment.authorName}</p>
					<p>{comment.text}</p>
				</div>
			</div>
			<ModalDeleteCommentary
				isOpened={isModalConfirmDeleteOpen}
				handleCancelClick={() => setIsModalConfirmDeleteOpen(false)}
				handleDeleteClick={() => deleteComment(comment.commentId)}
			/>
		</div>
	);
};

export default OpenedCommentary;
