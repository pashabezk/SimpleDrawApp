import drawPolygon from "./DrawPolygon";
import {degreesToRadians, linearShiftPolygon, rotatePoint} from "../CoordinatesUtils";

/**
 * Function for drawing regular polygon on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {number} x X position of shape center
 * @param {number} y Y position of shape center
 * @param {number} [size=10] Regular polygon circumscribed circle radius
 * @param {number} [verticesNumber=5] Number of polygon vertices
 * @param {number} [rotationAngle=0] Rotation angle in degrees
 * @param {string} [color="#000000"] Color
 * @param {boolean} [fill=false] need to fill or only border
 */
const drawRegularPolygon = (
	cvsContext: CanvasRenderingContext2D,
	x: number,
	y: number,
	size = 10,
	verticesNumber = 5,
	rotationAngle = 0,
	color = "#000000",
	fill = false
) => {
	cvsContext.fillStyle = color;
	cvsContext.strokeStyle = color;

	let vertexAngle = degreesToRadians(rotationAngle);
	let deltaVertexAngle = degreesToRadians(360 / verticesNumber);

	// start coordinates calculated as if shape center at (0, 0)
	let coordinates: Array<[number, number]> = [];

	for (let i = 0; i < verticesNumber; i++) {
		coordinates.push(
			rotatePoint(0, size, Math.sin(vertexAngle), Math.cos(vertexAngle))
		);
		vertexAngle += deltaVertexAngle;
	}

	// linear shift to coordinates
	coordinates = linearShiftPolygon(coordinates, x, y);

	drawPolygon(cvsContext, coordinates, color, fill);
};

export default drawRegularPolygon;
