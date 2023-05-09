import {commentariesStorageVar, newCommentaryVar} from "../Apollo/Storage";

/**
 * Add commentary
 * @param {number} x position on canvas
 * @param {number} y position on canvas
 * @param {string} text commentary text
 */
export const addComment = (x: number, y: number, text: string) => {
	const storage = commentariesStorageVar();
	commentariesStorageVar([
		...storage,
		{
			projectId: 1,
			authorId: 1,
			authorName: "Pavel",
			commentId: storage[storage.length - 1].commentId + 1,
			text: text,
			date: new Date().toDateString(),
			time: new Date().getTime().toString(),
			x: x,
			y: y,
			isOpened: false
		}
	]);
};

/**
 * Set commentary open or close
 * @param {number} commentId commentary ID
 * @param {boolean} opened set isOpen value for commentary
 */
export const setOpenCloseComment = (commentId: number, opened: boolean) => {
	commentariesStorageVar(
		commentariesStorageVar().map(comment => {
			if (comment.commentId === commentId) {
				return {
					...comment,
					isOpened: opened
				};
			} else {
				return comment;
			}
		})
	);
};

/**
 * Delete commentary
 * @param {number} commentId commentary ID
 */
export const deleteComment = (commentId: number) => {
	commentariesStorageVar(
		commentariesStorageVar().filter(comment => comment.commentId !== commentId)
	);
};

/**
 * Activate new commentary field
 * @param {number} x position on canvas
 * @param {number} y position on canvas
 */
export const openNewCommentWindow = (x: number, y: number) => {
	newCommentaryVar({
		...newCommentaryVar(),
		isCreating: true,
		x: x,
		y: y
	});
};

/**
 * Close field with new commentary
 * @param {boolean} [cleanText=false] need to clean text of new commentary
 */
export const closeNewCommentWindow = (cleanText = false) => {
	const newValue = {
		...newCommentaryVar(),
		isCreating: false,
		x: 0,
		y: 0
	};

	if (cleanText)
		newValue.text = "";

	newCommentaryVar(newValue);
};

/**
 * Updates text of new commentary
 * @param {string} newText
 */
export const updateNewCommentText = (newText: string) => {
	newCommentaryVar({
		...newCommentaryVar(),
		text: newText
	});
};
