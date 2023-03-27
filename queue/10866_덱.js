const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [num, ...arr] = input;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  empty() {
    if (!this.head) return 1;
    else return 0;
  }

  push_front(data) {
    const newNode = new Node(data);
    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
    }

    this.size++;
  }

  push_back(data) {
    const newNode = new Node(data);
    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
      newNode.prev = oldTail;
    }

    this.size++;
  }

  pop_front() {
    if (this.empty()) {
      return -1;
    } else {
      const removedNode = this.head;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = removedNode.next;
        this.head.prev = null;
      }

      this.size--;
      return removedNode.data;
    }
  }

  pop_back() {
    if (this.empty()) {
      return -1;
    } else {
      const removedNode = this.tail;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = removedNode.prev;
        this.tail.next = null;
        removedNode.prev = null;
      }

      this.size--;
      return removedNode.data;
    }
  }

  front() {
    if (this.empty()) return -1;
    else return this.head.data;
  }

  back() {
    if (this.empty()) return -1;
    else return this.tail.data;
  }
}

function solution(num, arr) {
  const deque = new Deque();
  const result = [];

  while (num--) {
    const [cmd, data] = arr.shift().split(" ");

    switch (cmd) {
      case "push_front":
        deque.push_front(data);
        break;
      case "push_back":
        deque.push_back(data);
        break;
      case "pop_front":
        result.push(deque.pop_front());
        break;
      case "pop_back":
        result.push(deque.pop_back());
        break;
      case "size":
        result.push(deque.getSize());
        break;
      case "empty":
        result.push(deque.empty());
        break;
      case "front":
        result.push(deque.front());
        break;
      case "back":
        result.push(deque.back());
        break;
    }
  }

  return result;
}

console.log(solution(num, arr).join("\n"));
