const fs = require("fs");
let text = "input.txt";
let input = "";

fs.readFile(text, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file", err);
    return;
  }

  input = data.split("\n");
  let left = [];
  let right = [];

  for (let i = 0; i < input.length; i++) {
    left.push(parseInt(input[i].split("   ")[0]));
    right.push(parseInt(input[i].split("   ")[1]));
  }

  // count occurences of each number in right list
  let counts = {};
  for (const num of right) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let score = 0;
  for (const num of left) {
    // check whether num exists in right list
    if (num in counts) {
      score += num * counts[num];
    }
  }

  console.log(score);
  // 20719933
});
