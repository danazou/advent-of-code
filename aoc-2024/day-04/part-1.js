// vertical, horizontal, diagonal??
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
	// const term = /XMAS|SAMX/g;
	const term = /(?=(XMAS|SAMX))/g;
	let word_search = [];
	for (line of input) {
		// horizontal
		let matches = Array.from(line.matchAll(term), (match) => match[1]);
		count += matches !== null ? matches.length : 0;
		word_search.push(line.split(""));
	}
	console.log(count, "found in rows");
	// vertical
	const columns = word_search[0].length;
	const rows = word_search.length;

	for (let i = 0; i < columns; i++) {
		// assuming each row has same letter count
		let vertical = "";
		for (let j = 0; j < rows; j++) {
			vertical = vertical.concat(word_search[j][i]);
		}
		let matches = Array.from(vertical.matchAll(term), (match) => match[1]);
		count += matches !== null ? matches.length : 0;
	}
	console.log(count, "found in rows and columns");

	// diagonal
	// go through each letter of row 1
	for (let i = 0; i < columns; i++) {
		let diagonal = word_search[0][i];
		let reverse = word_search[rows - 1][i];
		for (let j = 1; j < rows - i; j++) {
			diagonal = diagonal.concat(word_search[j][i + j]);
			reverse = reverse.concat(word_search[rows - 1 - j][i + j]);
		}
		let matches = Array.from(diagonal.matchAll(term), (match) => match[1]);
		count += matches.length;

		matches = Array.from(reverse.matchAll(term), (match) => match[1]);
		count += matches.length;
	}
	console.log(count, "found in rows and columns and first row's diagonals");

	// go through diagonal of each row's first letter
	for (let i = 1; i < rows - 1; i++) {
		let diagonal = word_search[i][0];
		let reverse = word_search[rows - 1 - i][0];
		for (let j = 1; j < columns - i; j++) {
			diagonal = diagonal.concat(word_search[i + j][j]);
			reverse = reverse.concat(word_search[rows - 1 - (i + j)][j]);
		}
		let matches = Array.from(diagonal.matchAll(term), (match) => match[1]);
		count += matches.length;

		matches = Array.from(reverse.matchAll(term), (match) => match[1]);
		count += matches.length;
	}
	console.log(count, "found in entire word search");
	// 2543
});
