import React from "react";
import styles from "../MainPage.module.css";
import {useReactiveVar} from "@apollo/client";
import {starSettingsVar} from "../../../Apollo/Storage";
import {Input} from "antd";

/**
 * Component with settings for star tool
 * @component
 */
const StarSettings = () => {
	const settings = useReactiveVar(starSettingsVar);

	const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		starSettingsVar({
			...starSettingsVar(),
			size: Number(e.target.value)
		});
	};

	const handleRotationAngleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		starSettingsVar({
			...starSettingsVar(),
			rotation: Number(e.target.value)
		});
	};

	const handleVerticesNumberChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		starSettingsVar({
			...starSettingsVar(),
			verticesNumber: Number(e.target.value)
		});
	};

	return (
		<>
			<div className={styles.oneParamGroup}>
				<label htmlFor="starSize">Размер</label>
				<input
					type="range"
					min="1"
					max="500"
					value={settings.size}
					onChange={handleSizeChange}
				/>
				<Input
					type="number"
					id="starSize"
					min="1"
					max="500"
					value={settings.size}
					onChange={handleSizeChange}
				/>
			</div>
			<div className={styles.oneParamGroup}>
				<label htmlFor="starRotation">Поворот</label>
				<input
					type="range"
					min="0"
					max="359"
					value={settings.rotation}
					onChange={handleRotationAngleChange}
				/>
				<Input
					type="number"
					id="starRotation"
					min="0"
					max="359"
					value={settings.rotation}
					onChange={handleRotationAngleChange}
				/>
			</div>
			<div className={styles.oneParamGroup}>
				<label htmlFor="starVertices">Вершины</label>
				<input
					type="range"
					min="3"
					max="20"
					value={settings.verticesNumber}
					onChange={handleVerticesNumberChange}
				/>
				<Input
					type="number"
					id="starVertices"
					min="3"
					max="100"
					value={settings.verticesNumber}
					onChange={handleVerticesNumberChange}
				/>
			</div>
		</>
	);
};

export default StarSettings;
