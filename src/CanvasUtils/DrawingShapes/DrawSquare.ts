import drawRegularPolygon from "./DrawRegularPolygon";

/**
 * Function for drawing square on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {number} x X position of square center
 * @param {number} y Y position of square center
 * @param {number} [size=10] Square size
 * @param {number} [rotationAngle=45] Rotation angle in degrees
 * @param {string} [color="#000000"] color
 * @param {boolean} [fill=false] need to fill or only border
 */
const drawSquare = (
	cvsContext: CanvasRenderingContext2D,
	x: number,
	y: number,
	size = 10,
	rotationAngle = 0,
	color = "#000000",
	fill = false
) => {
	drawRegularPolygon(cvsContext, x, y, size, 4, rotationAngle + 45, color, fill);
};

export default drawSquare;
