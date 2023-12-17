import {describe, expect, test} from "@jest/globals";
import {degreesToRadians, linearShiftPolygon, rotatePoint, rotatePolygon} from "../CoordinatesUtils";

/** Function to round number (to simplify tests) */
const round = Math.round;

describe('Degrees to radians function', () => {
	test('0 degree', () => {
		expect(degreesToRadians(0)).toBe(0);
	});
	test('90 degree', () => {
		expect(degreesToRadians(90)).toBe(Math.PI / 2);
	});
	test('180 degree', () => {
		expect(degreesToRadians(180)).toBe(Math.PI);
	});
	test('270 degree', () => {
		expect(degreesToRadians(270)).toBe(3 * Math.PI / 2);
	});
	test('360 degree', () => {
		expect(degreesToRadians(360)).toBe(0);
	});
	test('720 degree', () => {
		expect(degreesToRadians(360)).toBe(0);
	});
	test('-180 degree', () => {
		expect(degreesToRadians(-180)).toBe(-Math.PI);
	});
	test('-360 degree', () => {
		expect(degreesToRadians(-360)).toBe(-0);
	});
	test('one degree', () => {
		expect(degreesToRadians(1)).toBe(Math.PI / 180);
	});
	test('one radian', () => {
		expect(degreesToRadians(180 / Math.PI)).toBe(1);
	});
});

describe('Rotate point', () => {
	const getSinCos = (angle: number): [number, number] => {
		const rad = degreesToRadians(angle);
		return [Math.sin(rad), Math.cos(rad)];
	};

	test('rotate (0, 0)', () => {
		expect(rotatePoint(0, 0, ...getSinCos(0))).toEqual([0, 0]);
		expect(rotatePoint(0, 0, ...getSinCos(90))).toEqual([0, 0]);
		expect(rotatePoint(0, 0, ...getSinCos(180))).toEqual([-0, 0]);
		expect(rotatePoint(0, 0, ...getSinCos(270))).toEqual([0, -0]);
		expect(rotatePoint(0, 0, ...getSinCos(360))).toEqual([0, 0]);
	});

	test('rotate (5, 0)', () => {
		expect(rotatePoint(5, 0, ...getSinCos(0))).toEqual([5, 0]);
		expect(rotatePoint(5, 0, ...getSinCos(90)).map(round)).toEqual([0, 5]);
		expect(rotatePoint(5, 0, ...getSinCos(180)).map(round)).toEqual([-5, 0]);
		expect(rotatePoint(5, 0, ...getSinCos(270)).map(round)).toEqual([-0, -5]);
		expect(rotatePoint(5, 0, ...getSinCos(360)).map(round)).toEqual([5, 0]);
	});

	test('rotate (0, 5)', () => {
		expect(rotatePoint(0, 5, ...getSinCos(0))).toEqual([0, 5]);
		expect(rotatePoint(0, 5, ...getSinCos(90)).map(round)).toEqual([-5, 0]);
		expect(rotatePoint(0, 5, ...getSinCos(180)).map(round)).toEqual([-0, -5]);
		expect(rotatePoint(0, 5, ...getSinCos(270)).map(round)).toEqual([5, -0]);
		expect(rotatePoint(0, 5, ...getSinCos(360)).map(round)).toEqual([0, 5]);
	});

	test('rotate (5, 7)', () => {
		expect(rotatePoint(5, 7, ...getSinCos(0))).toEqual([5, 7]);
		expect(rotatePoint(5, 7, ...getSinCos(90))).toEqual([-7, 5]);
		expect(rotatePoint(5, 7, ...getSinCos(180)).map(round)).toEqual([-5, -7]);
		expect(rotatePoint(5, 7, ...getSinCos(270)).map(round)).toEqual([7, -5]);
		expect(rotatePoint(5, 7, ...getSinCos(360))).toEqual([5, 7]);
	});
});

describe('Rotate polygon', () => {
	const round2 = (arr: number[]) => arr.map(round); // to round all numbers in matrix
	const polygon: [number, number][] = [[0, 0], [3, 0], [3, 3], [0, 3]];
	test('0 degrees', () => {
		expect(rotatePolygon(polygon, 0))
			.toEqual([[0, 0], [3, 0], [3, 3], [0, 3]]);
	});
	test('90 degrees', () => {
		expect(rotatePolygon(polygon, 90).map(round2))
			.toEqual([[0, 0], [0, 3], [-3, 3], [-3, 0]]);
	});
	test('180 degrees', () => {
		expect(rotatePolygon(polygon, 180).map(round2))
			.toEqual([[-0, 0], [-3, 0], [-3, -3], [-0, -3]]);
	});
	test('270 degrees', () => {
		expect(rotatePolygon(polygon, 270).map(round2))
			.toEqual([[0, -0], [-0, -3], [3, -3], [3, -0]]);
	});
	test('360 degrees', () => {
		expect(rotatePolygon(polygon, 360))
			.toEqual([[0, 0], [3, 0], [3, 3], [0, 3]]);
	});
});

describe('Linear shift polygon', () => {
	const polygon: [number, number][] = [[0, 0], [3, 0], [3, 3], [0, 3]];
	test('zero shift', () => {
		expect(linearShiftPolygon(polygon, 0, 0))
			.toEqual([[0, 0], [3, 0], [3, 3], [0, 3]]);
	});
	test('x0 = 5', () => {
		expect(linearShiftPolygon(polygon, 5, 0))
			.toEqual([[5, 0], [8, 0], [8, 3], [5, 3]]);
	});
	test('y0 = 5', () => {
		expect(linearShiftPolygon(polygon, 0, 5))
			.toEqual([[0, 5], [3, 5], [3, 8], [0, 8]]);
	});
	test('x0 = 5, y0 = 7', () => {
		expect(linearShiftPolygon(polygon, 5, 7))
			.toEqual([[5, 7], [8, 7], [8, 10], [5, 10]]);
	});
});
