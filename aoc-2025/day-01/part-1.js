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

for (let i = 0; i < input.length; i++) {
	x += input[i];
	while (x < 0 || x > 99) {
		x < 0 ? (x = x + 100) : (x = x - 100);
	}

	if (x == 0) {
		count += 1;
	}
}

console.log(count);
