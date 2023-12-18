import React from "react";
import {Button} from "antd";
import {CANVAS_HTML_ID} from "../../../Constants/Canvas";
import {DownloadOutlined} from "@ant-design/icons";

/**
 * Download button
 * @component
 */
const DownloadBtn = (props: any) => {
	/** Function to download canvas as image */
	const downloadImg = () => {
		const downloadLink = document.createElement("a");
		downloadLink.setAttribute("download", "MyDrawing.png");
		const canvas: HTMLCanvasElement = document.getElementById(CANVAS_HTML_ID) as HTMLCanvasElement;
		canvas.toBlob((blob) => {
			downloadLink.setAttribute("href", URL.createObjectURL(blob as Blob));
			downloadLink.click();
		});
	};

	return (
		<Button
			type={"primary"}
			onClick={downloadImg}
			icon={<DownloadOutlined/>}
		>
			Сохранить
		</Button>
	);
}

export default DownloadBtn;
