import test from "./test.js";
import input_str from "./input.js";

function get_indices_of_char(string) {
	let indices = [];
	for (let i = 0; i < string.length; i++) {
		if (string[i] == " ") {
			continue;
		}
		indices.push(i);
	}
	return indices;
}

function split_string(string, indices) {
	let post_split = [];
	for (let i = 0; i < string.length; i++) {
		let nums = [];
		for (let j = 0; j < indices.length; j++) {
			let [start, end] = [indices[j], indices[j + 1]];
			nums.push(string[i].substring(start, end));
		}
		post_split.push(nums);
	}
	return post_split;
}

function get_columnar_nums(grid) {
	let columnar_nums = [];
	let max_length = grid[0].length;
	for (let j = 0; j < max_length; j++) {
		let num_array = [];
		for (let k = 0; k < grid.length; k++) {
			num_array.push(grid[k][j]);
		}

		if (num_array.every((x) => x == " ")) {
			continue;
		}

		columnar_nums.push(parseInt(num_array.filter((x) => x != " ").join("")));
	}

	return columnar_nums;
}

let input = test.split("\n");
let operations_str = input.pop();

let operations_indices = get_indices_of_char(operations_str);
let split_nums = split_string(input, operations_indices);

let operations = operations_str.split("").filter((x) => x != " ");
let total = 0;

for (let i = 0; i < operations.length; i++) {
	let operation = operations[i];
	let column = split_nums.map((row) => row[i]);

	let transformed_nums = get_columnar_nums(column);

	if (operation == "+") {
		total += transformed_nums.reduce((prev, curr) => prev + curr, 0);
	} else if (operation == "*") {
		total += transformed_nums.reduce((prev, curr) => prev * curr, 1);
	}
}

console.log(total);
// 12841228084455
