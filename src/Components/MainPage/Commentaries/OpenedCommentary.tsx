import React, {useRef} from "react";
import styles from "./Commentaries.module.css";
import {Avatar} from "antd";
import {CloseOutlined, DeleteOutlined, UserOutlined} from "@ant-design/icons";
import {deleteComment, setOpenCloseComment} from "../../../CanvasUtils/CommentariesUtils";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";
import {ICommentary} from "../../../Apollo/Interfaces";

/**
 * Opened commentary for canvas
 * @param {ICommentary} comment
 * @component
 */
const OpenedCommentary = ({comment}: { comment: ICommentary }) => {
	const ref = useRef(null);

	// close commentary if click was outside element
	useOnClickOutside(ref, () => setOpenCloseComment(comment.commentId, false));

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
					onClick={() => deleteComment(comment.commentId)}
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
		</div>
	);
};

export default OpenedCommentary;
