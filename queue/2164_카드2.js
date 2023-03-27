const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  dequeue() {
    if (!this.head) return null;
    else {
      const removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode.data;
    }
  }

  print() {
    if (!this.head) return null;
    else {
      let currentNode = this.head;
      const result = [];

      while (currentNode) {
        result.push(currentNode);
        currentNode = currentNode.next;
      }

      console.log(result[0].data);
    }
  }
}

const queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.enqueue(i);
}

while (queue.size != 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

queue.print();
