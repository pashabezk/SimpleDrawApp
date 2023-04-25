import {useReactiveVar} from "@apollo/client";
import {starSettingsVar} from "../../../Apollo/Storage";
import React from "react";

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
			<label htmlFor="starSize">Размер</label>
			<input
				type="range"
				id="starSize"
				name="starSize"
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
			<label htmlFor="starRotation">Поворот</label>
			<input
				type="range"
				id="starRotation"
				name="starRotation"
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
			<label htmlFor="starVertices">Количество вершин</label>
			<input
				type="range"
				id="starVertices"
				name="starVertices"
				min="3"
				max="20"
				value={settings.verticesNumber}
				onChange={handleVerticesNumberChange}
			/>
			<input
				type="number"
				min="3"
				max="100"
				value={settings.verticesNumber}
				onChange={handleVerticesNumberChange}
			/>
		</>
	);
};

export default StarSettings;