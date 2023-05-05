import {useReactiveVar} from "@apollo/client";
import {circleSettingsVar} from "../../../Apollo/Storage";
import React from "react";
import {Input} from "antd";
import styles from "../MainPage.module.css";

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

	return (
		<div className={styles.oneParamGroup}>
			<label htmlFor="circleSize">Радиус</label>
			<input
				type="range"
				id="circleSize"
				min="1"
				max="500"
				value={settings.size}
				onChange={handleSizeChange}
			/>
			<Input
				type="number"
				min={1}
				max={500}
				value={settings.size}
				onChange={handleSizeChange}
				width={"100px"}
			/>
		</div>
	);
};

export default CircleSettings;
