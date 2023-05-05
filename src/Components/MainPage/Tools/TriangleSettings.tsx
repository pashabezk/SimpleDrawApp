import React from "react";
import {useReactiveVar} from "@apollo/client";
import {triangleSettingsVar} from "../../../Apollo/Storage";
import styles from "../MainPage.module.css";
import {Input} from "antd";

/**
 * Component with settings for triangle tool
 * @component
 */
const TriangleSettings = () => {
	const settings = useReactiveVar(triangleSettingsVar);

	const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		triangleSettingsVar({
			...triangleSettingsVar(),
			size: Number(e.target.value)
		});
	};

	const handleRotationAngleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		triangleSettingsVar({
			...triangleSettingsVar(),
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
					id="triangleSize"
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

export default TriangleSettings;
