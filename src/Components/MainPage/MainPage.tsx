import React from "react";
import styles from "./MainPage.module.css";
import Canvas from "./Canvas/Canvas";
import Tools from "./Tools/Tools";
import ToolSettings from "./Tools/ToolSettings";
import Commentaries from "./Commentaries/Commentaries";
import {newCommentaryVar} from "../../Apollo/Storage";
import {useReactiveVar} from "@apollo/client";
import NewCommentary from "./Commentaries/NewCommentary";

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
		</>
	);
}

export default MainPage;
