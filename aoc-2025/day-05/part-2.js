import test from "./test.js";
import input_str from "./input.js";

let input = test.split("\n\n").map((x) => x.split("\n"));
let fresh_range = input[0].map((x) => x.split("-").map((x) => parseInt(x)));

let count = 0;
let unique_ranges = [];

function find_unique_range([start, end], unique_ranges) {
	let new_start = start;
	let new_end = end;

	for (let i = 0; i < unique_ranges.length; i++) {
		let [range_start, range_end] = unique_ranges[i];

		if (new_start >= range_start && new_start <= range_end) {
			// start is between existing range
			new_start = range_end + 1;
		}

		if (new_end >= range_start && new_end <= range_end) {
			// end is between existing range
			new_end = range_start - 1;
		}
	}

	return [new_start, new_end];
}

for (let i = 0; i < fresh_range.length; i++) {
	let unique_range = find_unique_range(fresh_range[i], unique_ranges);
	unique_ranges.push(unique_range);
	count += unique_range[1] - unique_range[0] + 1;
}
console.log(unique_ranges);
console.log(count);
// 262170254992853 too low
// 256760477268802
