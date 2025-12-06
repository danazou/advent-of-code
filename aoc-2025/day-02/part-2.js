import test from "./test.js";
import input_str from "./input.js";

let input = input_str
	.split(",")
	.map((x) => x.split("-").map((x) => parseInt(x.split())));

function invalid_id(id) {
	let str = id.toString();
	let length = str.length;
	for (let i = 2; i <= length; i++) {
		if (length % i == 0) {
			let substr = str.substring(0, length / i);
			if (substr.repeat(i) == str) {
				// multiply substring i times, compare to actual string
				return id;
			}
		}
	}
	return 0;
}

let sum = 0;

for (let i = 0; i < input.length; i++) {
	let start = input[i][0];
	let end = input[i][1];

	for (let j = start; j <= end; j++) {
		sum += invalid_id(j);
	}
}

console.log(sum);
// 15704845910
