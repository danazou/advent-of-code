const fs = require("fs");
let file = "input.txt";
let input = "";
let sum = 0;

fs.readFile(file, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading the file", err);
		return;
	}
	// split at do(), and then split at don't(), and then find mul
	const regex_do = /do\(\)+/g;
	const regex_dont = /don't\(\)+/g;
	const regex_instruction = /(mul\((\d)+,(\d)+\))/g;
	input = data.split(regex_do);

	for (line of input) {
		let instruction = line.split(regex_dont)[0].match(regex_instruction);
		for (command of instruction) {
			sum += command
				.match(/(\d)+/g)
				.map((x) => parseInt(x))
				.reduce((a, b) => a * b);
		}
	}
	console.log(sum);
	// 79845780
});
