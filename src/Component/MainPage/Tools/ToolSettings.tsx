import React from "react";
import styles from "../MainPage.module.css";
import {toolsVar} from "../../../Apollo/Storage";
import {TOOLS} from "../../../Constants/Tools";
import {useReactiveVar} from "@apollo/client";
import CircleSettings from "./CircleSettings";
import SquareSettings from "./SquareSettings";
import TriangleSettings from "./TriangleSettings";
import StarSettings from "./StarSettings";
import RegularPolygonSettings from "./RegularPolygonSettings";

/**
 * Container with settings for selected tool
 * @component
 */
const ToolSettings = () => {

	const tool = useReactiveVar(toolsVar);

	let body: JSX.Element | null = null;

	switch (tool) {
		case TOOLS.circle:
			body = <CircleSettings/>;
			break;
		case TOOLS.square:
			body = <SquareSettings/>;
			break;
		case TOOLS.triangle:
			body = <TriangleSettings/>;
			break;
		case TOOLS.star:
			body = <StarSettings/>;
			break;
		case TOOLS.regularPolygon:
			body = <RegularPolygonSettings/>;
			break;
	}

	return (
		<div className={styles.toolSettingsWrapper}>
			{body}
		</div>
	);
}

export default ToolSettings;