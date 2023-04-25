import React from "react";
import styles from "../MainPage.module.css";
import {drawSettingsVar, toolsVar} from "../../../Apollo/Storage";
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
	const settings = useReactiveVar(drawSettingsVar);

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

	const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		drawSettingsVar({
			...drawSettingsVar(),
			color: e.target.value
		});
	};

	const handleFillChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		drawSettingsVar({
			...drawSettingsVar(),
			filled: e.target.checked
		});
	};

	return (
		<div className={styles.toolSettingsWrapper}>
			<div className={styles.toolSettingsGroup}>
				<label htmlFor="color">Цвет</label>
				<input
					type="color"
					id="color"
					name="color"
					value={settings.color}
					onChange={handleColorChange}
				/>
				<br/>
				<input
					type="checkbox"
					id="filled"
					name="filled"
					checked={settings.filled}
					onChange={handleFillChange}
				/>
				<label htmlFor="filled">Заливка</label>
			</div>
			<div className={styles.toolSettingsGroup}>
				{body}
			</div>
		</div>
	);
}

export default ToolSettings;