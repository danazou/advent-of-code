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
    let is_increasing = report[0] < report[1];
    let is_safe = false;

    // look through each level of the report
    for (let i = 1; i < report.length; i++) {
      // start at 1st num instead of 0th
      const diff = Math.abs(report[i] - report[i - 1]);
      const is_consistent = report[i] > report[i - 1] == is_increasing;
      const has_adequate_diff = diff > 0 && diff < 4;

      is_safe = is_consistent && has_adequate_diff;
      if (!is_safe) {
        break;
      }
    }
    count += is_safe ? 1 : 0;
  }
  console.log(count);
  // 332
});
