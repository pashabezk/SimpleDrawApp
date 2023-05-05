import React, {useEffect, useRef} from "react";
import styles from "./Canvas.module.css";
import drawSquare from "../../../CanvasUtils/DrawingShapes/DrawSquare";
import drawCircle from "../../../CanvasUtils/DrawingShapes/DrawCircle";
import {circleSettingsVar, drawSettingsVar, regularPolygonSettingsVar, shapesStorageVar, squareSettingsVar, starSettingsVar, toolsVar, triangleSettingsVar} from "../../../Apollo/Storage";
import {TOOLS} from "../../../Constants/Tools";
import drawTriangle from "../../../CanvasUtils/DrawingShapes/DrawTriangle";
import drawStar from "../../../CanvasUtils/DrawingShapes/DrawStar";
import drawRegularPolygon from "../../../CanvasUtils/DrawingShapes/DrawRegularPolygon";
import {useReactiveVar} from "@apollo/client";

const Canvas = () => {
	const canvas = useRef(null);
	const shapesStorage = useReactiveVar(shapesStorageVar);

	/**
	 * Function for redraw canvas
	 * @param {CanvasRenderingContext2D} context canvas context
	 */
	const draw = (context: CanvasRenderingContext2D) => {
		// clear canvas
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);

		// draw each shape
		shapesStorageVar().forEach(shape => {
			switch (shape.type) {
				case TOOLS.circle:
					drawCircle(context, shape.position.x, shape.position.y, shape.size, shape.color, shape.filled);
					break;
				case TOOLS.square:
					drawSquare(context, shape.position.x, shape.position.y, shape.size, shape.rotation, shape.color, shape.filled);
					break;
				case TOOLS.triangle:
					drawTriangle(context, shape.position.x, shape.position.y, shape.size, shape.rotation, shape.color, shape.filled);
					break;
				case TOOLS.star:
					drawStar(context, shape.position.x, shape.position.y, shape.size, shape.verticesNumber, shape.rotation, shape.color, shape.filled);
					break;
				case TOOLS.regularPolygon:
					drawRegularPolygon(context, shape.position.x, shape.position.y, shape.size, shape.verticesNumber, shape.rotation, shape.color, shape.filled);
					break;
			}
		});
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

	// need to calculate canvas size on first render
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

		let shapeSetting;
		switch (toolsVar()) {
			case TOOLS.circle: {
				shapeSetting = circleSettingsVar();
				break;
			}
			case TOOLS.square: {
				shapeSetting = squareSettingsVar();
				break;
			}
			case TOOLS.triangle: {
				shapeSetting = triangleSettingsVar();
				break;
			}
			case TOOLS.star: {
				shapeSetting = starSettingsVar();
				break;
			}
			case TOOLS.regularPolygon: {
				shapeSetting = regularPolygonSettingsVar();
				break;
			}
		}

		shapesStorageVar([
			...shapesStorage,
			{
				type: toolsVar(),
				position: {
					x: pos.x,
					y: pos.y
				},
				...drawSettingsVar(),
				...shapeSetting
			}
		]);

		console.log(shapesStorageVar());
		draw(context);
	};

	return (
		<canvas ref={canvas} className={styles.canvas} onClick={onClick}/>
	);
};

export default Canvas;
