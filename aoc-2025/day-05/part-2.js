import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n\n").map((x) => x.split("\n"));

let fresh_range = input[0].map((x) => x.split("-").map((x) => parseInt(x)));

let fresh_ids = [];

function find_all_ids([start, end]) {
	return Array.from({ length: end - start + 1 }, (v, i) => start + i);
}

function find_unique_ids(ids) {
	return new Set(ids);
}

for (let i = 0; i < fresh_range.length; i++) {
	console.log(fresh_range[i]);
	fresh_ids.push(...find_all_ids(fresh_range[i]));
}

console.log(find_unique_ids(fresh_ids).size);
// console.log(fresh_ids);
