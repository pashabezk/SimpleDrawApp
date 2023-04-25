import {makeVar, ReactiveVar} from "@apollo/client";
import {TOOLS} from "../Constants/Tools";

// Storage for apollo client

export const toolsVar = makeVar(TOOLS.square);

/** Interface for tool settings */
interface IToolSettingsVar {
	size: number;
	rotation?: number; // rotation angle in degrees
}

/** Interface for regular polygon settings tool */
interface IRegularPolygonSettingsTool extends IToolSettingsVar {
	verticesNumber: number // number of vertices
}

/** Interface for draw settings variable */
interface IDrawSettingsVar {
	color: string;
	filled: boolean;
}

/** Settings for all tools */
export const drawSettingsVar: ReactiveVar<IDrawSettingsVar> = makeVar({
	color: "#000000",
	filled: false
} as IDrawSettingsVar);

/** Parameters for circle tool */
export const circleSettingsVar: ReactiveVar<IToolSettingsVar> = makeVar({
	size: 10
} as IToolSettingsVar);

/** Parameters for square tool */
export const squareSettingsVar: ReactiveVar<IToolSettingsVar> = makeVar({
	size: 10,
	rotation: 0
} as IToolSettingsVar);

/** Parameters for triangle tool */
export const triangleSettingsVar: ReactiveVar<IToolSettingsVar> = makeVar({
	size: 10,
	rotation: 0
} as IToolSettingsVar);


/** Parameters for star tool */
export const starSettingsVar: ReactiveVar<IRegularPolygonSettingsTool> = makeVar({
	size: 10,
	rotation: 0,
	verticesNumber: 5
} as IRegularPolygonSettingsTool);

/** Parameters for regular polygon tool */
export const regularPolygonSettingsVar: ReactiveVar<IRegularPolygonSettingsTool> = makeVar({
	size: 10,
	rotation: 0,
	verticesNumber: 5
} as IRegularPolygonSettingsTool);