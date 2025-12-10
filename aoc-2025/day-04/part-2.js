import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n").map((x) => x.split(""));

let sum = 0;

function check_roll_count(location, max_row, max_column) {
	let row = location[0];
	let column = location[1];

	let roll_count = 0;

	// look at adjacent co-ordinates
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			if (
				row + i < 0 ||
				column + j < 0 ||
				row + i >= max_row ||
				column + j >= max_column
			) {
				// out of bounds
				continue;
			} else {
				if (input[row + i][column + j] == "@") {
					roll_count += 1;
				}
			}
		}
	}
	return roll_count - 1; // -1 as we're also counting itself
}

for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < input[i].length; j++) {
		if (input[i][j] == "@") {
			// toilet roll found
			if (check_roll_count([i, j], input.length, input[i].length) < 4) {
				// fork lift accessible
				sum += 1;
			}
		}
	}
}

// recursive?
console.log(sum);
