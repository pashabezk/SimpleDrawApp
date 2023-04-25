import {useReactiveVar} from "@apollo/client";
import {triangleSettingsVar} from "../../../Apollo/Storage";
import React from "react";

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
			<label htmlFor="squareSize">Размер</label>
			<input
				type="range"
				id="triangleSize"
				name="triangleSize"
				min="1"
				max="500"
				value={settings.size}
				onChange={handleSizeChange}
			/>
			<input
				type="number"
				min="1"
				max="500"
				value={settings.size}
				onChange={handleSizeChange}
			/>
			<br/>
			<label htmlFor="squareRotation">Поворот</label>
			<input
				type="range"
				id="squareRotation"
				name="squareRotation"
				min="0"
				max="359"
				value={settings.rotation}
				onChange={handleRotationAngleChange}
			/>
			<input
				type="number"
				min="0"
				max="359"
				value={settings.rotation}
				onChange={handleRotationAngleChange}
			/>
		</>
	);
};

export default TriangleSettings;