/* TODO ============
 - Add UI handlers
*/

import * as uiFuncs from "./uiFuncs.js";

const boardContainer = document.createElement("div");
boardContainer.setAttribute("class", "container");
document.querySelector(".content").appendChild(boardContainer);

export const boardElements = [];
for (let row = 0; row < 8; row++) {
	const rowOfElements = [];
	for (let col = 0; col < 8; col++) {
		const cell = document.createElement("div");
		cell.setAttribute("class", `board_cell cell_${row}-${col}`);
		boardContainer.appendChild(cell);
		rowOfElements.push(cell);
	}
	boardElements.push(rowOfElements);
}

let currentBoard = JSON.parse(window.localStorage.getItem("board"));
if (!currentBoard) {
	let initialBoard = [
		["_", "_", "_", "_", "_", "_", "_", "_"],
		["_", "_", "_", "_", "_", "_", "_", "_"],
		["_", "_", "_", "_", "_", "_", "_", "_"],
		["_", "_", "_", "W", "B", "_", "_", "_"],
		["_", "_", "_", "B", "W", "_", "_", "_"],
		["_", "_", "_", "_", "_", "_", "_", "_"],
		["_", "_", "_", "_", "_", "_", "_", "_"],
		["_", "_", "_", "_", "_", "_", "_", "_"],
	];
	
	window.localStorage.setItem("board", JSON.stringify(initialBoard));
	window.localStorage.setItem("currentPlayer", "B");

	currentBoard = initialBoard;
}

uiFuncs.updateBoard(currentBoard, "B", boardElements);