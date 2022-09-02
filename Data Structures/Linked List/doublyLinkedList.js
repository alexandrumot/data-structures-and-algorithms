import { DoublyNode } from "../../helper.js";

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const node = new DoublyNode(value)
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  prepend(value) {
    const node = new DoublyNode(value)
    node.next = this.head;
    this.head.prev = this.head;
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
    const node = new DoublyNode(value);
    node.next = after;
    node.prev = prev;
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
    after.prev = prev;
    prev.next = after;
    del = null;

    this.length--;
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

  printIndex(index) {
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    
    console.log(prev);
    return this;
  } 
}
  
const dll = new DoublyLinkedList(100);
dll.prepend(20);
dll.append(842);
dll.remove(1);
dll.print();

