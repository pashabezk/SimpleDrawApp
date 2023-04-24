import React, {useEffect, useRef} from "react";
import styles from "./Canvas.module.css";
import drawSquare from "../../CanvasUtils/DrawingShapes/DrawSquare";
import drawCircle from "../../CanvasUtils/DrawingShapes/DrawCircle";
import {circleSettingsVar, regularPolygonSettingsVar, squareSettingsVar, starSettingsVar, toolsVar, triangleSettingsVar} from "../../Apollo/Storage";
import {TOOLS} from "../../Constants/Tools";
import drawTriangle from "../../CanvasUtils/DrawingShapes/DrawTriangle";
import drawStar from "../../CanvasUtils/DrawingShapes/DrawStar";
import drawRegularPolygon from "../../CanvasUtils/DrawingShapes/DrawRegularPolygon";

const Canvas = () => {
	const canvas = useRef(null);

	const draw = (ctx: CanvasRenderingContext2D) => {
		ctx.strokeStyle = "green"; // draw smile
		ctx.beginPath();
		ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
		ctx.moveTo(110, 75);
		ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
		ctx.moveTo(65, 65);
		ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
		ctx.moveTo(95, 65);
		ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
		ctx.stroke();
	};

	const handleWindowResize = () => {
		// @ts-ignore
		const parent = canvas.current.parentNode;
		const styles = getComputedStyle(parent);
		const w = parseInt(styles.getPropertyValue("width"), 10);
		const h = parseInt(styles.getPropertyValue("height"), 10);

		// @ts-ignore
		const context = canvas.current.getContext("2d");
		context.canvas.width = w - 4; // border = 2+2px
		context.canvas.height = h - 10;

		draw(context);
	}

	useEffect(() => {
		handleWindowResize();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClick: React.MouseEventHandler<HTMLCanvasElement> = (e: React.MouseEvent<HTMLCanvasElement>) => {
		// @ts-ignore
		const context = canvas.current.getContext("2d");
		const rect = context.canvas.getBoundingClientRect();
		const pos = {
			x: (e.clientX - rect.left) / (rect.right - rect.left) * context.canvas.width,
			y: (e.clientY - rect.top) / (rect.bottom - rect.top) * context.canvas.height
		};
		// console.log(pos);
		switch (toolsVar()) {
			case TOOLS.circle:
				drawCircle(context, pos.x, pos.y, circleSettingsVar().size, circleSettingsVar().color, circleSettingsVar().filled);
				break;
			case TOOLS.square:
				drawSquare(context, pos.x, pos.y, squareSettingsVar().size, squareSettingsVar().color, squareSettingsVar().filled);
				break;
			case TOOLS.triangle:
				drawTriangle(context, pos.x, pos.y, triangleSettingsVar().size, triangleSettingsVar().rotation, triangleSettingsVar().color, triangleSettingsVar().filled);
				break;
			case TOOLS.star: {
				let settings = starSettingsVar();
				drawStar(context, pos.x, pos.y, settings.size, settings.verticesNumber, settings.rotation, settings.color, settings.filled);
				break;
			}
			case TOOLS.regularPolygon: {
				let settings = regularPolygonSettingsVar();
				drawRegularPolygon(context, pos.x, pos.y, settings.size, settings.verticesNumber, settings.rotation, settings.color, settings.filled);
				break;
			}
		}
	}

	return (
		<canvas ref={canvas} className={styles.canvas} onClick={onClick}/>
	);
}

export default Canvas;