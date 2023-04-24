import drawPolygon from "./DrawPolygon";
import {degreesToRadians, linearShiftPolygon, rotatePoint} from "./DrawTriangle";

/**
 * Function for drawing star on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {number} x X position of shape center
 * @param {number} y Y position of shape center
 * @param {number} size=10 Star circumscribed circle radius
 * @param {number} verticesNumber=5 Number of star vertices
 * @param {number} rotationAngle=0 Rotation angle in degrees
 * @param {string} color="#000000" color
 * @param {boolean} fill=false need to fill or only border
 */
const drawStar = (
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

	const r = size / 2; // inscribed circle radius
	let vertexAngle = rotationAngle;
	let deltaVertexAngle = degreesToRadians(360 / verticesNumber);
	let inscribedVertexAngle = deltaVertexAngle / 2 + rotationAngle;

	// start coordinates calculated as if shape center at (0, 0)
	let starCoordinates: Array<[number, number]> = [];

	for (let i = 0; i < verticesNumber; i++) {
		starCoordinates.push(
			rotatePoint(0, size, Math.sin(vertexAngle), Math.cos(vertexAngle))
		);
		starCoordinates.push(
			rotatePoint(0, r, Math.sin(inscribedVertexAngle), Math.cos(inscribedVertexAngle))
		);
		vertexAngle += deltaVertexAngle;
		inscribedVertexAngle += deltaVertexAngle;
	}

	// linear shift to coordinates
	starCoordinates = linearShiftPolygon(starCoordinates, x, y);

	drawPolygon(cvsContext, starCoordinates, color, fill);
};

export default drawStar;