import {useReactiveVar} from "@apollo/client";
import {regularPolygonSettingsVar} from "../../../Apollo/Storage";
import React from "react";

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
			<label htmlFor="regularPolygonSize">Размер</label>
			<input
				type="range"
				id="regularPolygonSize"
				name="regularPolygonSize"
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
			<label htmlFor="regularPolygonRotation">Поворот</label>
			<input
				type="range"
				id="regularPolygonRotation"
				name="regularPolygonRotation"
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
			<label htmlFor="regularPolygonVertices">Количество вершин</label>
			<input
				type="range"
				id="regularPolygonVertices"
				name="regularPolygonVertices"
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

export default RegularPolygonSettings;