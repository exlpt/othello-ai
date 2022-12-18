import * as othelloFuncs from "./othelloFuncs.js";
import * as uiFuncs from "./uiFuncs.js";
import { boardElements } from "./index.js";
import Move from "./move.js";

export function handleCellClick(board, player, x, y) {
	// move on current board and set board
	const newBoard = othelloFuncs.moveOnBoard(board, new Move(x, y, player));
	window.localStorage.setItem("board", JSON.stringify(newBoard));

	// toggle currentPlayer
	const nextPlayer = player == "B" ? "W" : "B";
	window.localStorage.setItem("currentPlayer", nextPlayer);

	// update ui
	uiFuncs.updateBoard(newBoard, nextPlayer, boardElements);
}
