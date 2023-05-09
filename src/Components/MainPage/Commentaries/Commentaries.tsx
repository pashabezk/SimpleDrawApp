import React from "react";
import {useReactiveVar} from "@apollo/client";
import {commentariesStorageVar} from "../../../Apollo/Storage";
import styles from "./Commentaries.module.css";
import {CommentOutlined} from "@ant-design/icons";
import {setOpenCloseComment} from "../../../CanvasUtils/CommentariesUtils";
import OpenedCommentary from "./OpenedCommentary";

/**
 * Commentaries for canvas
 * @component
 */
const Commentaries = () => {

	const comments = useReactiveVar(commentariesStorageVar);

	// prepare body comments
	const body = comments.map(comment => {

		// return opened comment
		if (comment.isOpened) {
			return <OpenedCommentary comment={comment} key={comment.commentId}/>
		}

		// return closed comment
		return (
			<div
				key={comment.commentId}
				className={styles.commentaryWrapper}
				style={{
					top: comment.y,
					left: comment.x
				}}
				onClick={() => setOpenCloseComment(comment.commentId, true)}
			>
				<CommentOutlined/>
			</div>
		);
	});

	return (
		<>
			{body}
		</>
	);
};

export default Commentaries;
