import React from "react";
import styles from "./MainPage.module.css";
import Canvas from "../Canvas/Canvas";
import Tools from "./Tools/Tools";
import ToolSettings from "./Tools/ToolSettings";

/**
 * Draw page
 * @component
 */
const MainPage = (props: any) => {
	return (
		<>
			<Tools/>
			<ToolSettings/>
			<div className={styles.canvasWrapper}>
				<Canvas/>
			</div>
		</>
	);
}

export default MainPage;