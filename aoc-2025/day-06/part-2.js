import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n");
// console.log(input);
let operations_str = input.pop();
// console.log(operations_str);

let operations_indices = [];
let worksheet = [];
let split_nums = [];
for (let i = 0; i < operations_str.length; i++) {
	if (operations_str[i] == " ") {
		continue;
	}
	operations_indices.push(i);
}

for (let i = 0; i < input.length; i++) {
	let nums = [];
	for (let j = 0; j < operations_indices.length; j++) {
		// split string at operations indices
		let [start, end] = [operations_indices[j], operations_indices[j + 1]];
		nums.push(input[i].substring(start, end));
	}
	// console.log(nums);
	split_nums.push(nums);
}

let operations = operations_str.split("").filter((x) => x != " ");
// console.log(operations);
let total = 0;
for (let i = 0; i < operations.length; i++) {
	let operation = operations[i];
	let column = split_nums.map((row) => row[i]);

	// console.log(column);
	let max_length = column[0].length;
	let transformed_nums = [];
	// look at one column at a time - figure out how many columns there are
	for (let j = 0; j < max_length; j++) {
		let num_array = [];
		for (let k = 0; k < column.length; k++) {
			let digit = column[k][j];
			num_array.push(digit);
		}
		// console.log(num_array);

		if (num_array.every((x) => x == " ")) {
			// console.log("wont be a number");
			continue;
		}

		transformed_nums.push(parseInt(num_array.filter((x) => x != " ").join("")));
		// console.log(transformed_nums);
	}

	if (operation == "+") {
		total += transformed_nums.reduce((prev, curr) => prev + curr, 0);
	} else if (operation == "*") {
		total += transformed_nums.reduce((prev, curr) => prev * curr, 1);
	}
}
console.log(total);
// 12841228084455
