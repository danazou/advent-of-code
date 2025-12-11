import test from "./test.js";
import input_str from "./input.js";

let input = input_str.split("\n\n").map((x) => x.split("\n"));

let fresh_ids = input[0].map((x) => x.split("-").map((x) => parseInt(x)));
let available_ids = input[1].map((x) => parseInt(x));

function is_fresh(id, fresh_ids) {
	for (let i = 0; i < fresh_ids.length; i++) {
		let [start, end] = fresh_ids[i];

		if (id >= start && id <= end) {
			return true;
		}
	}
	return false;
}

let sum = 0;
for (let i = 0; i < available_ids.length; i++) {
	let id = available_ids[i];
	if (is_fresh(id, fresh_ids)) {
		sum += 1;
	}
}
console.log(sum);
// 888
