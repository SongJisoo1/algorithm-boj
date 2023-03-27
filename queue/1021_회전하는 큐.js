const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, _] = input[0].split(" ").map(Number);
const target = input[1].split(" ").map(Number);

class Deque extends Array {
  popLeft() {
    return this.shift();
  }

  rotateToRight(index) {
    while (index--) {
      this.push(this.shift());
    }
  }

  rotateToLeft(index) {
    while (index--) {
      this.unshift(this.pop());
    }
  }
}

const solution = (target, N) => {
  const depue = new Deque();
  let count = 0;
  for (let i = 1; i <= N; i++) depue.push(i);

  target.forEach((elem) => {
    const index = depue.indexOf(elem);

    if (index === 0) {
      depue.popLeft();
    } else {
      if (index > Math.floor(depue.length / 2)) {
        depue.rotateToLeft(depue.length - index);
        count += depue.length - index;
        depue.popLeft();
      } else {
        depue.rotateToRight(index);
        count += index;
        depue.popLeft();
      }
    }
  });

  return count;
};

console.log(solution(target, N));
