// import read file function
const fs = require("fs");
let input = "";
let sum = 0;

fs.readFile("input.txt", "utf8", (err, data) => {
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

  left.sort();
  right.sort();

  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(right[i] - left[i]);
  }

  console.log(sum);
  // 2164381
});
