import React from "react";
import styles from "../MainPage.module.css";
import {useReactiveVar} from "@apollo/client";
import {squareSettingsVar} from "../../../Apollo/Storage";
import {Input} from "antd";

/**
 * Component with settings for circle tool
 * @component
 */
const SquareSettings = () => {
	const settings = useReactiveVar(squareSettingsVar);

	const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		squareSettingsVar({
			...squareSettingsVar(),
			size: Number(e.target.value)
		});
	};

	const handleRotationAngleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		squareSettingsVar({
			...squareSettingsVar(),
			rotation: Number(e.target.value)
		});
	};

	return (
		<>
			<div className={styles.oneParamGroup}>
				<label htmlFor="squareSize">Размер</label>
				<input
					type="range"
					min="1"
					max="500"
					value={settings.size}
					onChange={handleSizeChange}
				/>
				<Input
					type="number"
					id="squareSize"
					min="1"
					max="500"
					value={settings.size}
					onChange={handleSizeChange}
				/>
			</div>
			<div className={styles.oneParamGroup}>
				<label htmlFor="squareRotation">Поворот</label>
				<input
					type="range"
					min="0"
					max="359"
					value={settings.rotation}
					onChange={handleRotationAngleChange}
				/>
				<Input
					type="number"
					id="squareRotation"
					min="0"
					max="359"
					value={settings.rotation}
					onChange={handleRotationAngleChange}
				/>
			</div>
		</>
	);
};

export default SquareSettings;
