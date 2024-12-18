const fs = require("fs");
let file = "input.txt";
let sum = 0;

fs.readFile(file, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file", err);
		return;
	}

	const rules = data
		.split("\n\n")[0]
		.split("\n")
		.map((x) => x.split("|").map((x) => parseInt(x)));

	let rulesDict = {};

	for (rule of rules) {
		const key = rule[0];
		const value = rule[1];
		if (rulesDict[key]) {
			rulesDict[key].push(value);
		} else {
			rulesDict[key] = [value];
		}
	}

	const updates = data
		.split("\n\n")[1]
		.split("\n")
		.map((x) => x.split(",").map((x) => parseInt(x)));

	for (update of updates) {
		let isInOrder = true;
		// check numbers in reverse order
		checkOrder: for (let i = update.length - 1; i > 0; i--) {
			const current = update[i];
			const subArray = update.slice(0, i);
			// go through subArray, check if it's a value in rulesDict[current]
			if (rulesDict[current]) {
				for (num of subArray) {
					isInOrder = !rulesDict[current].includes(num);
					if (!isInOrder) {
						console.log("not in order!!!");
						break checkOrder;
					}
				}
			}
		}

		if (isInOrder) {
			console.log("in order!");
			sum += update[Math.floor(update.length / 2)];
		}
	}
	console.log(sum);
	// 4905
});
