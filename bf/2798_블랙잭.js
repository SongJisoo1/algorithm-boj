const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\r\n");

const [num, limit] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

function solution(num, limit, list) {
    let max = -1;
    for (let i = 0; i < num - 2; i++) {
        for (let j = i + 1; j < num - 1; j++) {
            for (let k = j + 1; k < num; k++) {
                const curr = list[i] + list[j] + list[k];
                if (max < curr && curr <= limit) max = curr;
            }
        }
    }
    return max;
}

console.log(solution(num, limit, list));
