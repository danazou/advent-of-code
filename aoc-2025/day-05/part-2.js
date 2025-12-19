import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n\n").map((x) => x.split("\n"));
let fresh_range = input[0].map((x) => x.split("-").map((x) => parseInt(x)));

let ranges = [];

function check_range(range, ranges) {
	let is_overlapping = false;
	let [start, end] = range;
	for (let i = 0; i < ranges.length; i++) {
		// check if there's overlap
		let [range_start, range_end] = ranges[i];
		if (start > range_end || end < range_start) {
			continue;
		}

		is_overlapping = true;
		// if overlapping, update range
		if (start < range_start) {
			ranges[i][0] = start;
		}

		if (end > range_end) {
			ranges[i][1] = end;
		}
	}
	return is_overlapping;
}

while (true) {
	for (let i = 0; i < fresh_range.length; i++) {
		if (check_range(fresh_range[i], ranges)) {
			continue;
		}
		ranges.push(fresh_range[i]);
	}

	if (ranges.length >= fresh_range.length) {
		break;
	}
	fresh_range = ranges;
	ranges = [];
}

let count = 0;
for (let i = 0; i < ranges.length; i++) {
	count += ranges[i][1] - ranges[i][0] + 1;
}

console.log(count);
// 344378119285354
