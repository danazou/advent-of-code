import test from "./test.js";
import input_str from "./input.js";

let input = input_str
	.split("\n")
	.map((x) => x.split("").map((x) => parseInt(x)));

let joltage = 0;

function find_largest_joltage(battery) {
	let largest = 0;
	let second = 0;
	for (let i = 0; i < battery.length - 1; i++) {
		if (battery[i] > largest) {
			largest = battery[i];
			second = battery[i + 1];
		} else if (battery[i] > second) {
			second = battery[i];
		}
	}

	if (battery[battery.length - 1] > second) {
		//check last number
		second = battery[battery.length - 1];
	}

	return parseInt(String(largest) + String(second));
}

for (let i = 0; i < input.length; i++) {
	let battery = input[i];
	joltage += find_largest_joltage(battery);
}

console.log(joltage);
// 17207
