import {useReactiveVar} from "@apollo/client";
import {circleSettingsVar} from "../../../Apollo/Storage";
import React from "react";

/**
 * Component with settings for circle tool
 * @component
 */
const CircleSettings = () => {
	const settings = useReactiveVar(circleSettingsVar);

	const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		circleSettingsVar({
			...circleSettingsVar(),
			size: Number(e.target.value)
		});
	};

	const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		circleSettingsVar({
			...circleSettingsVar(),
			color: e.target.value
		});
	};

	const handleFillChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		circleSettingsVar({
			...circleSettingsVar(),
			filled: e.target.checked
		});
	};

	return (
		<>
			<label htmlFor="circleSize">Радиус</label>
			<input
				type="range"
				id="circleSize"
				name="circleSize"
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
			<label htmlFor="circleColor">Цвет</label>
			<input
				type="color"
				id="circleColor"
				name="circleColor"
				value={settings.color}
				onChange={handleColorChange}
			/>
			<br/>
			<input
				type="checkbox"
				id="circleFilled"
				name="circleFilled"
				checked={settings.filled}
				onChange={handleFillChange}
			/>
			<label htmlFor="circleFilled">Заливка</label>
		</>
	);
};

export default CircleSettings;