import { Node } from "../../helper.js";

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log("Length: " + this.length)
    if (!this.first) {
      return "This stack is empty";
    }
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  clear() {
    const currLength = this.length;
    for (let i=0; i <= currLength; i++) {
      this.dequeue();
    }
  }
}

const queue = new Queue();
queue.peek();
queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Pavel');
queue.peek();
queue.clear();
queue.peek();