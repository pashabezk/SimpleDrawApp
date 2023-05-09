import {makeVar, ReactiveVar} from "@apollo/client";
import {TOOLS} from "../Constants/Tools";
import {ICommentary, IDrawSettingsVar, INewCommentary, IRegularPolygonSettingsTool, IShapeStoreData, IToolSettingsVar} from "./Interfaces";

// Storage for apollo client

/** Var for storing current tool */
export const toolsVar = makeVar(TOOLS.square);

/** Storage for all shapes on canvas */
export const shapesStorageVar: ReactiveVar<IShapeStoreData[]> = makeVar([] as IShapeStoreData[]);

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

/** Commentaries only for test */
const testComments: ICommentary[] = [{
	projectId: 1,
	authorId: 1,
	authorName: "Pavel",
	commentId: 1,
	text: "hello",
	date: "22.10.2023",
	time: "13:00",
	x: 10,
	y: 10,
	isOpened: false
}, {
	projectId: 1,
	authorId: 1,
	authorName: "Ivan",
	commentId: 2,
	text: "hello2",
	date: "22.10.2023",
	time: "13:00",
	x: 100,
	y: 100,
	isOpened: true
}, {
	projectId: 1,
	authorId: 1,
	authorName: "Alice",
	commentId: 3,
	text: "Here is a longlonglonglong longlonglong longlonglonglonglong longlonglong comment",
	date: "22.10.2023",
	time: "13:00",
	x: 150,
	y: 150,
	isOpened: true
}];

/** Storage for commentaries */
export const commentariesStorageVar: ReactiveVar<ICommentary[]> = makeVar(testComments as ICommentary[]);

/** Var for storing temp data while creating new commentary */
export const newCommentaryVar: ReactiveVar<INewCommentary> = makeVar({
	isCreating: false,
	text: "",
	x: 0,
	y: 0
} as INewCommentary);
