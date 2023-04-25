import React from "react";
import styles from "../MainPage.module.css";
import {toolsVar} from "../../../Apollo/Storage";
import {TOOLS} from "../../../Constants/Tools";
import {useReactiveVar} from "@apollo/client";

const toolNames = new Map([
	[TOOLS.circle, "Круг"],
	[TOOLS.square, "Квадрат"],
	[TOOLS.triangle, "Треугольник"],
	[TOOLS.regularPolygon, "Многоугольник"],
	[TOOLS.star, "Звезда"],
]);

/**
 * Container with tools for drawing
 * @component
 */
const Tools = () => {

	const tool = useReactiveVar(toolsVar);

	const changeTool = (toolName: TOOLS) => {
		toolsVar(toolName);
	};

	const tools: JSX.Element[] = [];
	toolNames.forEach((value, key) => {
		tools.push(
			<p
				key={key}
				className={styles.tool + " " + (tool === key ? (" " + styles.selected) : "")}
				onClick={() => changeTool(key)}
			>
				{value}
			</p>
		);
	});

	return (
		<div className={styles.toolsWrapper}>
			<p className={styles.tool} style={{cursor: "default"}}>
				<b>Фигура: </b>
			</p>
			{tools}
		</div>
	);
};

export default Tools;