/* TODO ============
 - Add UI handlers
*/

const boardContainer = document.createElement("div");
boardContainer.setAttribute("class", "container");
document.querySelector(".content").appendChild(boardContainer);

const boardElements = [];
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
