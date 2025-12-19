import test from "./test.js";
import input_str from "./input.js";

let input = input_str
	.split("\n")
	.map((x) => x.split(" ").filter((x) => x != ""));

let operations = input.pop();
let worksheets = input.map((x) => x.map((x) => parseInt(x)));

let total = 0;
for (let i = 0; i < operations.length; i++) {
	let operation = operations[i];
	let nums = [];
	for (let j = 0; j < worksheets.length; j++) {
		nums.push(worksheets[j][i]);
	}
	if (operation == "+") {
		total += nums.reduce((prev, curr) => prev + curr, 0);
	}

	if (operation == "*") {
		total += nums.reduce((prev, curr) => prev * curr, 1);
	}

	console.log(nums);
}

console.log(total);
// 7644505810277
