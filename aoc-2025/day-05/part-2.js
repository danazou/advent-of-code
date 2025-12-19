import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n\n").map((x) => x.split("\n"));
let input_ranges = input[0].map((x) => x.split("-").map((x) => parseInt(x)));

let ranges = [];

function merge_if_overlapping(range, ranges) {
	let is_overlapping = false;
	let [start, end] = range;
	for (let i = 0; i < ranges.length; i++) {
		// check if there's overlap
		let [range_start, range_end] = ranges[i];
		if (start > range_end || end < range_start) {
			continue;
		}

		is_overlapping = true;
		// update range
		ranges[i][0] = Math.min(start, range_start);
		ranges[i][1] = Math.max(end, range_end);
	}

	return is_overlapping;
}

while (true) {
	for (let i = 0; i < input_ranges.length; i++) {
		if (merge_if_overlapping(input_ranges[i], ranges)) {
			continue;
		}

		ranges.push(input_ranges[i]);
	}

	if (ranges.length >= input_ranges.length) {
		break;
	}
	input_ranges = ranges;
	ranges = [];
}

let count = ranges.reduce((sum, [start, end]) => sum + (end - start + 1), 0);

console.log(count);
// 344378119285354
