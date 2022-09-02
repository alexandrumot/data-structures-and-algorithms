import { Node } from "../../helper.js";

class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    peek() {
      if (!this.top) {
        return "This stack is empty";
      }
      console.log("Length: " + this.length)
      return this.top;
    }

    push(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }

    pop() {
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return this;
    }

    clear() {
      const currLength = this.length;
      for (let i=0; i <= currLength; i++) {
        this.pop()
      }
    }
}


const stack = new Stack();
stack.peek();
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.peek();
stack.clear();
stack.peek();