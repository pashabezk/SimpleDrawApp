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

	const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		squareSettingsVar({
			...squareSettingsVar(),
			color: e.target.value
		});
	};

	const handleFillChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		squareSettingsVar({
			...squareSettingsVar(),
			filled: e.target.checked
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
			<label htmlFor="squareColor">Цвет</label>
			<input
				type="color"
				id="squareColor"
				name="squareColor"
				value={settings.color}
				onChange={handleColorChange}
			/>
			<br/>
			<input
				type="checkbox"
				id="squareFilled"
				name="squareFilled"
				checked={settings.filled}
				onChange={handleFillChange}
			/>
			<label htmlFor="squareFilled">Заливка</label>
		</>
	);
};

export default SquareSettings;