import input_str from "./input.js";

let input = input_str.split("\n").map((x) => {
	if (x[0] == "L") {
		return -parseInt(x.slice(1));
	} else {
		return parseInt(x.slice(1));
	}
});

let x = 50;
let count = 0;
// console.log(input);
let pass_through_0 = 0;

for (let i = 0; i < input.length; i++) {
	x += input[i];

	if (x <= 0 || x > 99) {
		// pass through 0
		if (x < 0) {
			// x is negative
			if (x - input[i] == 0) {
				// x started at 0
				if (x > -99) {
					console.log("x > -99"); // doesn't pass through 0 again, do nothing
				} else {
					pass_through_0 -= Math.floor(x / 100) + 1; // pass through 0, but remove 1 from start
				}
			} else if (x % 100 == 0) {
				// ends at 0, add additional count
				pass_through_0 -= Math.floor(x / 100) - 1;
			} else {
				pass_through_0 -= Math.floor(x / 100);
			}
		} else if (x > 99) {
			// x is positive
			pass_through_0 += Math.floor(x / 100);
		} else if (x == 0) {
			pass_through_0 += 1;
		}
	}

	while (x < 0 || x > 99) {
		x < 0 ? (x += 100) : (x -= 100);
	}

	if (x == 0) {
		count += 1;
	}
}

console.log(count);
console.log(pass_through_0);
