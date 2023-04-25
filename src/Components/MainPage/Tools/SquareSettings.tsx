import {useReactiveVar} from "@apollo/client";
import {squareSettingsVar} from "../../../Apollo/Storage";
import React from "react";

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
			<label htmlFor="squareSize">Размер</label>
			<input
				type="range"
				id="squareSize"
				name="squareSize"
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

export default SquareSettings;