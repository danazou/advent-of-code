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
				column + j >= max_column ||
				(i == 0 && j == 0)
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
	return roll_count;
}

let accessible_rolls = 0;
let has_accessible_rolls = true;

while (has_accessible_rolls == true) {
	let next_state = JSON.parse(JSON.stringify(input));

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[i].length; j++) {
			if (input[i][j] == "@") {
				// toilet roll found
				if (check_roll_count([i, j], input.length, input[i].length) < 4) {
					// fork lift accessible
					sum += 1;
					accessible_rolls += 1;
					next_state[i][j] = "x";
				}
			}
		}
	}

	if (accessible_rolls > 0) {
		// reset counter
		accessible_rolls = 0;
		input = next_state;
	} else {
		has_accessible_rolls = false;
	}
}

console.log(sum);
// 8317
