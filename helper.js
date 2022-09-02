export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class DoublyNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}