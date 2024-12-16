const fs = require("fs");
let file = "input.txt";
let input = "";
let count = 0;

const find_cross_mas = (index, word_search) => {
	const i = index[0];
	const j = index[1];
	const rows = word_search.length;
	const columns = word_search[0].length;

	if (i == 0 || i == rows - 1 || j == 0 || j == columns - 1) {
		return 0;
	}
	// look at positive and negative diagonal
	const pos_diag = word_search[i - 1][j - 1] + "A" + word_search[i + 1][j + 1];
	const neg_diag = word_search[i + 1][j - 1] + "A" + word_search[i - 1][j + 1];

	if (
		(pos_diag == "MAS" || pos_diag == "SAM") &&
		(neg_diag == "MAS" || neg_diag == "SAM")
	) {
		return 1;
	}
	return 0;
};

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

	// find all positions of A's and go from there
	for (let i = 0; i < word_search.length; i++) {
		for (let j = 0; j < word_search[0].length; j++) {
			const letter = word_search[i][j];
			if (letter == "A") {
				count += find_cross_mas([i, j], word_search);
			}
		}
	}

	console.log(count);
	// 1930
});
