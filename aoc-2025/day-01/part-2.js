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
	console.log(x, input[i]);

	x += input[i];
	console.log(x);

	if (x <= 0 || x > 99) {
		console.log("x is less than 0 or greater than 99");
		if (x < 0) {
			if (x - input[i] == 0) {
				console.log("x previously was 0");
				if (x > -99) {
					console.log("x > -99");
				} else {
					pass_through_0 -= Math.floor(x / 100) + 1;
				}
			} else if (x % 100 == 0) {
				console.log("ends at 0");
				pass_through_0 -= Math.floor(x / 100) - 1; // ends at 0
			} else {
				pass_through_0 -= Math.floor(x / 100);
			}
		} else if (x > 99) {
			pass_through_0 += Math.floor(x / 100);
		} else if (x == 0) {
			console.log("x is zero");
			pass_through_0 += 1;
		} else {
			console.log("didnt match");
		}
	}
	console.log("pass; ", pass_through_0);

	while (x < 0 || x > 99) {
		x < 0 ? (x += 100) : (x -= 100);
	}

	if (x == 0) {
		count += 1;
		// pass_through_0 += 1;
		// console.log(count);
	}
	// console.log("count: ", count);
	console.log("pass_through_0: ", pass_through_0);
}

console.log(count);
console.log(pass_through_0);
