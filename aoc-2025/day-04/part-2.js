import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n").map((x) => x.split(""));

function get_roll_count(grid, [row, column]) {
	let roll_count = 0;

	// look at adjacent co-ordinates
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			if (i == 0 && j == 0) {
				// skip itself
				continue;
			}

			if (grid[row + i]?.[column + j] == "@") {
				roll_count += 1;
			}
		}
	}
	return roll_count;
}

let sum = 0;
let current_state = JSON.parse(JSON.stringify(input));

while (true) {
	// keep checking until no more accessible toilet rolls
	let accessible_rolls = 0;
	let next_state = JSON.parse(JSON.stringify(current_state));

	for (let i = 0; i < current_state.length; i++) {
		for (let j = 0; j < current_state[i].length; j++) {
			if (
				current_state[i][j] == "@" &&
				get_roll_count(current_state, [i, j]) < 4
			) {
				// toilet roll found && fork lift accessible
				sum += 1;
				accessible_rolls += 1;
				next_state[i][j] = "x";
			}
		}
	}

	if (accessible_rolls == 0) {
		break;
	}

	// reset counter
	accessible_rolls = 0;
	current_state = next_state;
}

console.log(sum);
// 8317
