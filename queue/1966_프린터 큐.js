// // 1. 중요도 확인
// // 2. 큐에 현재 요소보다 중요도가 높은 요소가 존재하면 enqueue
// // 3. 아니면 인쇄
// // 첫번째 입력은 테스트케이스 수
// // 두번째 입력은 문서의 갯수, 찾고자 하는 문서의 현재 인덱스
// // 세번째 입력은 중요도

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().split("\r\n");

// const [num, ...arr] = input;
// const result = [];

// function solution(num, arr) {
//   const result = [];
//   while (num-- > 0) {
//     const queue = [];
//     const printer = arr.shift();
//     const [length, location] = printer.split(" ").map(Number);

//     const priorities = arr
//       .shift()
//       .split(" ")
//       .map((v, i) => {
//         return { data: i + 1, priority: v };
//       });

//     const queue2 = [];
//     while (priorities.length > 0) {
//       let count = 0;
//       const firstElem = priorities.shift();
//       const check = priorities.some((ele) => ele.priority > firstElem.priority);
//       console.log(check, firstElem.data);

//       if (check) {
//         // console.log("target" + target);
//         priorities.push(firstElem);
//         count++;
//         console.log(priorities);
//       } else {
//         // console.log(firstElem);
//         queue2.push(priorities[count]);
//         count++;
//       }
//     }
//     result.push(queue2);
//   }
//   return result;
// }

// console.log(solution(num, arr));
