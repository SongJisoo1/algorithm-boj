const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [_, ...arr] = input;

function solution(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        const command = arr[i].split("");
        const queue = JSON.parse(arr[i + 2]);
        let isReversed = false;
        let isError = false;

        for (let j = 0; j < command.length; j++) {
            if (command[j] === "R") {
                isReversed = !isReversed;
            } else {
                if (queue.length > 0) {
                    if (isReversed) queue.pop();
                    else queue.shift();
                } else {
                    isError = !isError;
                    break;
                }
            }
        }

        if (isError) {
            console.log("error");
        } else {
            if (isReversed) console.log(JSON.stringify(queue.reverse()));
            else console.log(JSON.stringify(queue));
        }
    }
}

solution(arr);
