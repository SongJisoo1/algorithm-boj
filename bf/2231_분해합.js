const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString();

// K(4) = K + K1 + K2 + K3 + K4
// k(4) - (K1 + K2 + K3 + K4) = K

function solution(input) {
    const range = input.length * 9;
    const min = input - range;
    let result = 0;

    for (let i = min; i < +input; i++) {
        let sum = 0;
        let curr = i;

        while (curr !== 0) {
            sum += curr % 10;
            curr = parseInt(curr / 10);
        }

        if (input == sum + i) {
            result = i;
            break;
        }
    }

    return result;
}

console.log(solution(input));
