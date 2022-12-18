import * as othelloFuncs from "./othelloFuncs.js";
import * as uiHandlers from "./uiHandlers.js";
import Move from "./move.js";

export function updateBoard(board, playerAfterUpdate, boardElements) {
	for (let row = 0; row < boardElements.length; row++) {
		for (let col = 0; col < boardElements[0].length; col++) {
			if (board[row][col] == "_") {
				const posMovable = othelloFuncs.moveIsAvailable(board, new Move(col, row, playerAfterUpdate));
				boardElements[row][col].setAttribute(
					"class",
					`board_cell cell_${row}-${col}` + (posMovable ? " possible_move" : "")
				);

				boardElements[row][col].onclick = posMovable
					? () => uiHandlers.handleCellClick(board, playerAfterUpdate, col, row)
					: null;
			} else if (board[row][col] == "B") {
				boardElements[row][col].setAttribute("class", `board_cell cell_${row}-${col} black_piece`);
			} else {
				boardElements[row][col].setAttribute("class", `board_cell cell_${row}-${col} white_piece`);
			}
		}
	}
}
