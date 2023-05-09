import drawPolygon from "./DrawPolygon";
import {linearShiftPolygon, rotatePolygon} from "../CoordinatesUtils";

/**
 * Function for drawing triangle on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {number} x X position of shape center
 * @param {number} y Y position of shape center
 * @param {number} side=10 Triangle side size
 * @param {number} rotationAngle=0 Rotation angle in degrees
 * @param {string} color="#000000" color
 * @param {boolean} fill=false need to fill or only border
 */
const drawTriangle = (
	cvsContext: CanvasRenderingContext2D,
	x: number,
	y: number,
	side = 10,
	rotationAngle = 0,
	color = "#000000",
	fill = false
) => {
	cvsContext.fillStyle = color;
	cvsContext.strokeStyle = color;

	// circumscribed circle radius: R = side * sqrt(3) / 3
	const R = side * 0.5773502691896258;
	const r = -R / 2; // inscribed circle radius
	const halfSide = side / 2;

	// triangle coordinates
	// start coordinates calculated as if triangle center at (0, 0)
	let triangleCoordinates: Array<[number, number]> = [
		[0, R],
		[halfSide, r],
		[-halfSide, r]
	];

	triangleCoordinates = rotatePolygon(triangleCoordinates, rotationAngle);
	triangleCoordinates = linearShiftPolygon(triangleCoordinates, x, y);

	drawPolygon(cvsContext, triangleCoordinates, color, fill);
};

export default drawTriangle;
