/**
 * Function for drawing polygon on canvas
 * @param {CanvasRenderingContext2D} cvsContext Canvas context
 * @param {Array<[number, number]>} polygon Array of points [x, y]
 * @param {string} color="#000" color
 * @param {boolean} fill=false need to fill or only border
 */
const drawPolygon = (
	cvsContext: CanvasRenderingContext2D,
	polygon: Array<[number, number]>,
	color = "#000000",
	fill = false
) => {
	cvsContext.fillStyle = color;
	cvsContext.strokeStyle = color;

	cvsContext.beginPath();
	cvsContext.moveTo(...polygon[polygon.length - 1] as [number, number]);
	polygon.forEach(([x, y]) => {
		cvsContext.lineTo(x, y);
	});

	if (fill)
		cvsContext.fill();
	else
		cvsContext.stroke();

	cvsContext.closePath();
};

export default drawPolygon;
