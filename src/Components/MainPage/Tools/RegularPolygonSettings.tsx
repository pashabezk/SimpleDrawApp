import React from "react";
import styles from "../MainPage.module.css";
import {useReactiveVar} from "@apollo/client";
import {regularPolygonSettingsVar} from "../../../Apollo/Storage";
import {Input} from "antd";

/**
 * Component with settings for regular polygon tool
 * @component
 */
const RegularPolygonSettings = () => {
	const settings = useReactiveVar(regularPolygonSettingsVar);

	const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		regularPolygonSettingsVar({
			...regularPolygonSettingsVar(),
			size: Number(e.target.value)
		});
	};

	const handleRotationAngleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		regularPolygonSettingsVar({
			...regularPolygonSettingsVar(),
			rotation: Number(e.target.value)
		});
	};

	const handleVerticesNumberChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		regularPolygonSettingsVar({
			...regularPolygonSettingsVar(),
			verticesNumber: Number(e.target.value)
		});
	};

	return (
		<>
			<div className={styles.oneParamGroup}>
				<label htmlFor="regularPolygonSize">Размер</label>
				<input
					type="range"
					min="1"
					max="500"
					value={settings.size}
					onChange={handleSizeChange}
				/>
				<Input
					type="number"
					id="regularPolygonSize"
					min="1"
					max="500"
					value={settings.size}
					onChange={handleSizeChange}
				/>
			</div>
			<div className={styles.oneParamGroup}>
				<label htmlFor="regularPolygonRotation">Поворот</label>
				<input
					type="range"
					min="0"
					max="359"
					value={settings.rotation}
					onChange={handleRotationAngleChange}
				/>
				<Input
					type="number"
					id="regularPolygonRotation"
					min="0"
					max="359"
					value={settings.rotation}
					onChange={handleRotationAngleChange}
				/>
			</div>
			<div className={styles.oneParamGroup}>
				<label htmlFor="regularPolygonVertices">Вершины</label>
				<input
					type="range"
					min="3"
					max="20"
					value={settings.verticesNumber}
					onChange={handleVerticesNumberChange}
				/>
				<Input
					type="number"
					id="regularPolygonVertices"
					min="3"
					max="100"
					value={settings.verticesNumber}
					onChange={handleVerticesNumberChange}
				/>
			</div>
		</>
	);
};

export default RegularPolygonSettings;
