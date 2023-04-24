/**
 * Function for drawing circle on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {number} x X position of circle center
 * @param {number} y Y position of circle center
 * @param {number} radius=10 circle radius
 * @param {string} color="#000" color
 * @param {boolean} fill=false need to fill or only border
 */
const drawCircle = (
	cvsContext: CanvasRenderingContext2D,
	x: number,
	y: number,
	radius = 10,
	color = "#000",
	fill = false
) => {
	cvsContext.fillStyle = color;
	cvsContext.strokeStyle = color;
	cvsContext.beginPath();
	cvsContext.arc(x, y, radius, 0, 2 * Math.PI);
	if (fill)
		cvsContext.fill();
	else
		cvsContext.stroke();
};

export default drawCircle;