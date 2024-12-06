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

	let count = 0;
	for (const report of reports) {
		// console.log("new report", report);
		let is_increasing = report[0] < report[1];
		let is_safe = false;
		let bad_levels = 0;
		let removals = {
			dropped: null,
			potential: null,
			index: null,
		};
		const check_safety = (prev, num) => {
			const diff = Math.abs(num - prev);
			const is_consistent = num > prev == is_increasing;
			const has_adequate_diff = diff > 0 && diff < 4;
			is_safe = is_consistent && has_adequate_diff;
		};
		// look through each level of the report
		for (let i = 1; i < report.length; i++) {
			// start at 1st num instead of 0th
			const num = report[i];
			const prev = report[i - 1];

			// check if report is safe
			const diff = Math.abs(num - prev);
			const is_consistent = num > prev == is_increasing;
			const has_adequate_diff = diff > 0 && diff < 4;
			is_safe = is_consistent && has_adequate_diff;

			if (!is_safe) {
				console.log(
					report,
					"not safe because!",
					prev,
					num,
					is_consistent ? "bad difference" : "inconsistent"
				);
				bad_levels += 1;
				console.log(bad_levels);
				// only remove first unsafe level
				if (bad_levels == 1) {
					console.log("remove a level and try again");
					removals = { dropped: prev, potential: num, index: i - 1 };
					// delete prev
					report.splice(removals.index, 1);
					// reset
					is_increasing = report[0] < report[1];
					i = 0;
				} else if (bad_levels == 2) {
					console.log("remove the other level and try again");
					// swap dropped and potential to create new report option
					report.splice(removals.index, 1, removals.dropped);
					// reset
					is_increasing = report[0] < report[1];
					i = 0;
				} else if (bad_levels > 2) {
					console.log("uh oh, unsafe regardless of which level removed");
					break;
				}
			}
		}
		// if (is_safe) {
		// 	console.log(report, "is safe!");
		// }
		count += is_safe ? 1 : 0;
	}
	console.log(count);
});
