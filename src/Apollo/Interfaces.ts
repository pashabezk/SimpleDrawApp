import {TOOLS} from "../Constants/Tools";

/** Interface for tool settings */
export interface IToolSettingsVar {
	size: number;
	rotation?: number; // rotation angle in degrees
}

/** Interface for regular polygon settings tool */
export interface IRegularPolygonSettingsTool extends IToolSettingsVar {
	verticesNumber: number // number of vertices
}

/** Interface for draw settings variable */
export interface IDrawSettingsVar {
	color: string;
	filled: boolean;
}

/** Interface for stored shape */
export interface IShapeStoreData {
	type: TOOLS;
	position: {
		x: number,
		y: number
	}
	color: string;
	filled: boolean;
	size: number;
	rotation?: number; // rotation angle in degrees
	verticesNumber?: number // number of vertices
}

/** Interface for commentaries storage */
export interface ICommentary {
	projectId: number,
	commentId: number,
	authorId: number,
	authorName: string,
	text: string,
	date: string,
	time: string,
	x: number,
	y: number,
	isOpened: boolean
}

/** Interface describing temp data while creating new commentary */
export interface INewCommentary {
	isCreating: boolean,
	text: string,
	x: number,
	y: number
}
