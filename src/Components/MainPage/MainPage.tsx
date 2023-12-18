import React from "react";
import {useReactiveVar} from "@apollo/client";
import styles from "./MainPage.module.css";
import Canvas from "./Canvas/Canvas";
import Tools from "./Tools/Tools";
import ToolSettings from "./Tools/ToolSettings";
import Commentaries from "./Commentaries/Commentaries";
import {newCommentaryVar} from "../../Apollo/Storage";
import NewCommentary from "./Commentaries/NewCommentary";
import DownloadBtn from "./DownloadButton/DownloadBtn";

/**
 * Draw page
 * @component
 */
const MainPage = (props: any) => {

	const newCommentary = useReactiveVar(newCommentaryVar);

	return (
		<>
			<Tools/>
			<ToolSettings/>
			<div className={styles.canvasWrapper}>
				<Canvas/>
				<Commentaries/>
				{
					newCommentary.isCreating
					&& <NewCommentary x={newCommentary.x} y={newCommentary.y} text={newCommentary.text}/>
				}
			</div>
			<div className={styles.downloadBtnContainer}>
				<DownloadBtn/>
			</div>
		</>
	);
}

export default MainPage;
