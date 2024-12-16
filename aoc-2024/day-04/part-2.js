const fs = require("fs");
let file = "input.txt";
let input = "";
let count = 0;

fs.readFile(file, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading the file", err);
		return;
	}

	input = data.split("\n");

	let word_search = [];
	for (line of input) {
		word_search.push(line.split(""));
	}
	let indexes = [];
	const rows = word_search.length;
	const columns = word_search[0].length;
	// find all positions of A's and go from there
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			const letter = word_search[i][j];
			if (letter == "A") {
				indexes.push([i, j]);
			}
		}
	}

	for (index of indexes) {
		const i = index[0];
		const j = index[1];

		if (i == 0 || i == rows - 1 || j == 0 || j == columns - 1) {
			continue;
		} else {
			// look at positive and negative diagonal
			const pos_diag =
				word_search[i - 1][j - 1] + "A" + word_search[i + 1][j + 1];
			const neg_diag =
				word_search[i + 1][j - 1] + "A" + word_search[i - 1][j + 1];
			// console.log(pos_diag, neg_diag);

			if (
				(pos_diag == "MAS" || pos_diag == "SAM") &&
				(neg_diag == "MAS" || neg_diag == "SAM")
			) {
				count += 1;
			}
		}
	}
	console.log(count);
	// 1930
});
