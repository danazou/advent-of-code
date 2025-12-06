import test from "./test.js";
import input_str from "./input.js";

let input = input_str
	.split("\n")
	.map((x) => x.split("").map((x) => parseInt(x)));
let joltage = 0;
function find_largest_joltage(battery) {
	//  12 numbers
	let index = 0;
	let num = "";
	let end = battery.length - 11;
	for (let i = 12; i > 0; i--) {
		let window = battery.slice(index, battery.length - i + 1);
		let largest = Math.max(...window);
		num += largest;
		index += window.indexOf(largest) + 1;
	}
	return parseInt(num);
}

for (let i = 0; i < input.length; i++) {
	joltage += find_largest_joltage(input[i]);
}

console.log(joltage);
// 170997883706617
