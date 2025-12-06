import test from "./test.js";
import input_str from "./input.js";

let input = input_str
	.split(",")
	.map((x) => x.split("-").map((x) => parseInt(x.split())));

let sum = 0;

for (let i = 0; i < input.length; i++) {
	let start = input[i][0];
	let end = input[i][1];
	// console.log(start, end);

	for (let j = start; j <= end; j++) {
		// console.log(j);
		// look in the middle
		let str = j.toString();
		let middle = str.length / 2;
		let first_half = str.substring(0, middle);
		let second_half = str.substring(middle);
		// console.log(str);
		// console.log(first_half, second_half);

		if (first_half == second_half) {
			sum += j;
		}
	}
}

console.log(sum);
