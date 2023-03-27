const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((v) => +v);

function solution(N, K) {
  const result = [];
  let count = 1;

  const queue = Array(N)
    .fill()
    .map((v, i) => i + 1);

  while (queue.length) {
    const data = queue.shift();

    if (count % K === 0) result.push(data);
    else queue.push(data);

    count++;
  }

  return result;
}

console.log("<" + solution(N, K).join(", ") + ">");
