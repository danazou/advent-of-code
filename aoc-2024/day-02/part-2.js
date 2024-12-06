// problem dampener

const fs = require("fs");
let file = "input.txt";
let input = "";
fs.readFile(file, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading the file", err);
		return;
	}

	input = data.split("\n");
	reports = [];
	for (const string of input) {
		// convert string to int
		reports.push(string.split(" ").map((x) => parseInt(x)));
	}
	const check_safety = (report) => {
		const is_increasing = report[0] < report[1];
		let safe;
		for (let i = 1; i < report.length; i++) {
			// start at 1st num instead of 0th
			const num = report[i];
			const prev = report[i - 1];
			const diff = Math.abs(num - prev);
			const is_consistent = num > prev == is_increasing;
			const has_adequate_diff = diff > 0 && diff < 4;
			safe = is_consistent && has_adequate_diff;
			if (!safe) {
				break;
			}
		}
		return safe;
	};
	let count = 0;
	for (const report of reports) {
		let is_safe = check_safety(report);

		if (!is_safe) {
			for (let i = 0; i < report.length; i++) {
				alternative = report.toSpliced(i, 1);
				is_safe = check_safety(alternative);
				if (is_safe) {
					break;
				}
			}
		}
		count += is_safe ? 1 : 0;
	}
	console.log(count);
	// 398
});
