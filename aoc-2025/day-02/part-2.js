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

	// never divide by 1; 2, 3, 4, 5, 6, 7 (until length of number) -> how many parts it can be divided into

	for (let j = start; j <= end; j++) {
		let str = j.toString();
		let length = str.length;
		let factors = [length]; // can always divide by itself

		for (let k = 2; k < length; k++) {
			if (length % k == 0) {
				factors.push(k);
			}
		}
		// console.log(str);
		// console.log("factors: ", factors);

		for (let ii = 0; ii < factors.length; ii++) {
			// look through possible factors
			// console.log("looping through factors");
			let factor = factors[ii];
			let part_length = length / factor;
			let repeat = true;
			let search = str.substring(0, part_length);
			let index = part_length;

			// console.log(search, index);

			while (repeat == true) {
				let next = str.substring(index, index + part_length);
				if (next == search) {
					repeat = true;
					// console.log(search, next, " is a repeat");
				} else {
					repeat = false;
					// console.log(search, next, " not a repeat");
					break;
				}
				index += part_length;
				if (index == length) {
					break;
				}
			}

			if (repeat == true) {
				sum += j;
				// console.log(sum);
				break;
			}
		}
	}
}

console.log(sum);
