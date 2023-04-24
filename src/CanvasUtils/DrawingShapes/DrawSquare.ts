/**
 * Function for drawing square on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {number} x X position of square center
 * @param {number} y Y position of square center
 * @param {number} size=10 Square size
 * @param {string} color="#000" color
 * @param {boolean} fill=false need to fill or only border
 */
const drawSquare = (
	cvsContext: CanvasRenderingContext2D,
	x: number,
	y: number,
	size = 10,
	color = "#000",
	fill = false
) => {
	cvsContext.fillStyle = color;
	cvsContext.strokeStyle = color;
	const halfSize = size / 2;
	if (fill)
		cvsContext.fillRect(x - halfSize, y - halfSize, size, size);
	else {
		cvsContext.strokeRect(x - halfSize, y - halfSize, size, size);
	}
};

export default drawSquare;