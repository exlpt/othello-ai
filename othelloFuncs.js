export function moveOnBoard(board, move) {
	let newBoard = JSON.parse(JSON.stringify(board));
	newBoard[move.y][move.x] = move.player;

	// Check for hits upwards
	for (let currentY = move.y - 1; currentY >= 0; currentY--) {
		if (board[currentY][move.x] == "_") break;
		if (board[currentY][move.x] == move.player) {
			currentY++;
			for (; currentY < move.y; currentY++) newBoard[currentY][move.x] = move.player;
			break;
		}
	}

	// Check for hits downwards
	for (let currentY = move.y + 1; currentY < board.length; currentY++) {
		if (board[currentY][move.x] == "_") break;
		if (board[currentY][move.x] == move.player) {
			currentY--;
			for (; currentY > move.y; currentY--) newBoard[currentY][move.x] = move.player;
			break;
		}
	}

	// Check for hits to the left
	for (let currentX = move.x - 1; currentX >= 0; currentX--) {
		if (board[move.y][currentX] == "_") break;
		if (board[move.y][currentX] == move.player) {
			currentX++;
			for (; currentX < move.x; currentX++) newBoard[move.y][currentX] = move.player;
			break;
		}
	}

	// Check for hits to the right
	for (let currentX = move.x + 1; currentX < board[0].length; currentX++) {
		if (board[move.y][currentX] == "_") break;
		if (board[move.y][currentX] == move.player) {
			currentX--;
			for (; currentX > move.x; currentX--) newBoard[move.y][currentX] = move.player;
			break;
		}
	}

	// Check for hits to the top left
	for (
		let currentPos = [move.x - 1, move.y - 1];
		currentPos[0] >= 0 && currentPos[1] >= 0;
		currentPos[0]--, currentPos[1]--
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) {
			currentPos[0]++, currentPos[1]++;
			for (; currentPos[0] < move.x && currentPos[1] < move.y; currentPos[0]++, currentPos[1]++) {
				newBoard[currentPos[1]][currentPos[0]] = move.player;
			}
			break;
		}
	}

	// Check for hits to the bottom right
	for (
		let currentPos = [move.x + 1, move.y + 1];
		currentPos[0] < board[0].length && currentPos[1] < board.length;
		currentPos[0]++, currentPos[1]++
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) {
			currentPos[0]--, currentPos[1]--;
			for (; currentPos[0] > move.x && currentPos[1] > move.y; currentPos[0]--, currentPos[1]--) {
				newBoard[currentPos[1]][currentPos[0]] = move.player;
			}
			break;
		}
	}

	// Check for hits to the top right
	for (
		let currentPos = [move.x + 1, move.y - 1];
		currentPos[0] < board[0].length && currentPos[1] >= 0;
		currentPos[0]++, currentPos[1]--
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) {
			currentPos[0]--, currentPos[1]++;
			for (; currentPos[0] > move.x && currentPos[1] < move.y; currentPos[0]--, currentPos[1]++) {
				newBoard[currentPos[1]][currentPos[0]] = move.player;
			}
			break;
		}
	}

	// Check for hits to the bottom left
	for (
		let currentPos = [move.x - 1, move.y + 1];
		currentPos[0] >= 0 && currentPos[1] < board.length;
		currentPos[0]--, currentPos[1]++
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) {
			currentPos[0]++, currentPos[1]--;
			for (; currentPos[0] < move.x && currentPos[1] > move.y; currentPos[0]++, currentPos[1]--) {
				newBoard[currentPos[1]][currentPos[0]] = move.player;
			}
			break;
		}
	}

	return newBoard;
}

export function scoreBoard(board) {
	return board.reduce(
		(score, row) =>
			score + row.reduce((rowSore, current) => rowSore + (current == "B" ? 1 : current == "W" ? -1 : 0), 0),
		0
	);
}

export function gameIsFinished(board) {
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			if (board[row][col] == "_") return false;
		}
	}
	return true;
}

export function moveIsAvailable(board, move) {
	// Check for hits upwards
	for (let currentY = move.y - 1; currentY >= 0; currentY--) {
		if (board[currentY][move.x] == "_") break;
		if (board[currentY][move.x] == move.player) return true;
	}

	// Check for hits downwards
	for (let currentY = move.y + 1; currentY < board.length; currentY++) {
		if (board[currentY][move.x] == "_") break;
		if (board[currentY][move.x] == move.player) return true;
	}

	// Check for hits to the left
	for (let currentX = move.x - 1; currentX >= 0; currentX--) {
		if (board[move.y][currentX] == "_") break;
		if (board[move.y][currentX] == move.player) return true;
	}

	// Check for hits to the right
	for (let currentX = move.x + 1; currentX < board[0].length; currentX++) {
		if (board[move.y][currentX] == "_") break;
		if (board[move.y][currentX] == move.player) return true;
	}

	// Check for hits to the top left
	for (
		let currentPos = [move.x - 1, move.y - 1];
		currentPos[0] >= 0 && currentPos[1] >= 0;
		currentPos[0]--, currentPos[1]--
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) return true;
	}

	// Check for hits to the bottom right
	for (
		let currentPos = [move.x + 1, move.y + 1];
		currentPos[0] < board[0].length && currentPos[1] < board.length;
		currentPos[0]++, currentPos[1]++
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) return true;
	}

	// Check for hits to the top right
	for (
		let currentPos = [move.x + 1, move.y - 1];
		currentPos[0] < board[0].length && currentPos[1] >= 0;
		currentPos[0]++, currentPos[1]--
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) return true;
	}

	// Check for hits to the bottom left
	for (
		let currentPos = [move.x - 1, move.y + 1];
		currentPos[0] >= 0 && currentPos[1] < board.length;
		currentPos[0]--, currentPos[1]++
	) {
		if (board[currentPos[1]][currentPos[0]] == "_") break;
		if (board[currentPos[1]][currentPos[0]] == move.player) return true;
	}

	return false;
}
