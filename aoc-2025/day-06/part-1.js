import test from "./test.js";
import input_str from "./input.js";

let input = input_str
	.split("\n")
	.map((x) => x.split(" ").filter((x) => x != ""));

let operations = input.pop();
let worksheets = input.map((row) => row.map((num) => parseInt(num)));

let total = 0;
for (let i = 0; i < operations.length; i++) {
	let operation = operations[i];
	let nums = worksheets.map((row) => row[i]);

	if (operation == "+") {
		total += nums.reduce((prev, curr) => prev + curr, 0);
	} else if (operation == "*") {
		total += nums.reduce((prev, curr) => prev * curr, 1);
	}
}

console.log(total);
// 7644505810277
