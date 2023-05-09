/**
 * Convert degrees to radians
 * @param {number} degrees
 */
export const degreesToRadians = (degrees: number): number => {
	return (degrees % 360) * Math.PI / 180;
};

/**
 * Function for rotating point around (0,0)
 * @param {number} x Point coordinate X
 * @param {number} y Point coordinate Y
 * @param {number} sinAngle Sine of rotation angle
 * @param {number} cosAngle Cosine of rotation angle
 * @return Array of new point coordinates [x, y]
 */
export const rotatePoint = (
	x: number,
	y: number,
	sinAngle: number,
	cosAngle: number
): [number, number] => {
	return [
		x * cosAngle - y * sinAngle,
		x * sinAngle + y * cosAngle
	];
};

/**
 * Function for rotating polygon around (0,0)
 * @param {Array<[number, number]>} polygon Array of points [x, y]
 * @param {number} angle Rotation angle
 * @return Coordinates of rotated polygon
 * @example rotatePolygon([[x1, y1], [x2, y2]], 60)
 */
export const rotatePolygon = (
	polygon: Array<[number, number]>,
	angle: number
): Array<[number, number]> => {
	// need to subtract angle from 360, because Y axis is reversed
	const angleInRadians = degreesToRadians(360 - angle);
	const sinAngle = Math.sin(angleInRadians);
	const cosAngle = Math.cos(angleInRadians);

	return polygon.map(([x, y]) => {
		return rotatePoint(x, y, sinAngle, cosAngle);
	});
};

/**
 * Function for linear shift all polygon points.
 * Note, that Y-axis is reversed on canvas.
 * @param {Array<[number, number]>} polygon Array of points [x, y]
 * @param {number} x0 X-axis value shift
 * @param {number} y0 Y-axis value shift
 * @return Coordinates of rotated polygon
 * @example rotatePolygon([[x1, y1], [x2, y2]], 10, 10)
 */
export const linearShiftPolygon = (
	polygon: Array<[number, number]>,
	x0 = 0,
	y0 = 0
): Array<[number, number]> => {
	return polygon.map(([x, y]) => {
		return [x0 + x, y0 - y];
	});
};
