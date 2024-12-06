const fs = require("fs");
let file = "input.txt";
let input = "";
let sum = 0;

fs.readFile(file, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading the file", err);
		return;
	}
	const regex = /(mul\((\d)+,(\d)+\))/g;
	// find all instructions
	input = data.match(regex);

	// execute multiplication
	for (command of input) {
		sum += command
			.match(/(\d)+/g)
			.map((x) => parseInt(x))
			.reduce((a, b) => a * b);
	}
	console.log(sum);
});
