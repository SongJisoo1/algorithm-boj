const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

function solution(input) {
    const [a, b, c, d, e, f] = input;

    for (let x = -999; x <= 999; x++) {
        for (let y = -999; y <= 999; y++) {
            if (a * x + b * y === c && d * x + e * y === f) {
                return `${x} ${y}`;
            }
        }
    }
}

console.log(solution(input));
