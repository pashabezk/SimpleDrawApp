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

	const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		triangleSettingsVar({
			...triangleSettingsVar(),
			color: e.target.value
		});
	};

	const handleFillChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		triangleSettingsVar({
			...triangleSettingsVar(),
			filled: e.target.checked
		});
	};

	return (
		<>
			<label htmlFor="squareSize">Длина стороны</label>
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
			<br/>
			<label htmlFor="triangleColor">Цвет</label>
			<input
				type="color"
				id="triangleColor"
				name="triangleColor"
				value={settings.color}
				onChange={handleColorChange}
			/>
			<br/>
			<input
				type="checkbox"
				id="triangleFilled"
				name="triangleFilled"
				checked={settings.filled}
				onChange={handleFillChange}
			/>
			<label htmlFor="triangleFilled">Заливка</label>
		</>
	);
};

export default TriangleSettings;