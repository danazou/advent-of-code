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
	console.log(rulesDict);
	const updates = data
		.split("\n\n")[1]
		.split("\n")
		.map((x) => x.split(",").map((x) => parseInt(x)));

	for (let update of updates) {
		let isInOrder = true;
		let reordered = false;
		// check numbers in reverse order
		checkOrder: for (let i = update.length - 1; i > 0; i--) {
			const current = update[i];
			const subArray = update.slice(0, i);
			// go through subArray, check if it's a value in rulesDict[current]
			if (rulesDict[current]) {
				checkRules: for (const [index, num] of subArray.entries()) {
					isInOrder = !rulesDict[current].includes(num);
					if (!isInOrder) {
						console.log(
							"not in order!!! because",
							current,
							"is not before",
							num
						);
						// move current to before num
						update.splice(i, 1);
						update.splice(index, 0, current);

						// reordered = true; recheck until isInOrder
						reordered = true;
						i = update.length;
						break checkRules;
					}
				}
			}
		}

		if (isInOrder && reordered) {
			console.log("in order!", update);
			sum += update[Math.floor(update.length / 2)];
		}
	}
	console.log(sum);
	// 6204
});
