import { Node } from "../../helper.js";

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const node = new Node(value)
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const node = new Node(value)
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    const after = prev.next;
    const node = new Node(value);
    node.next = after;
    prev.next = node;
    this.length++;
    return this;
  }

  remove(index) {
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    let del = prev.next;
    const after = del.next;
    prev.next = after;
    del = null;

    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }

  print() {
    const list = [];
    let currNode = this.head;
    while (currNode !== null) {
      list.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(list);
    return this;
  } 
}
  
  
  var sll = new SinglyLinkedList(10);
  sll.append(5);
  sll.append(16);
  sll.append(1);
  sll.append(56);
  sll.append(1);
  sll.print();
  sll.reverse();
  sll.print();
  