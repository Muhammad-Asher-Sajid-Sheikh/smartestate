// Node class for linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack using linked list
export class Stack {
  constructor() {
    this.top = null; // top node
    this.size = 0;
  }

  // Push item onto stack
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  // Pop item from stack
  pop() {
    if (this.isEmpty()) return null;
    const value = this.top.value;
    this.top = this.top.next;
    this.size--;
    return value;
  }

  // Check if stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Convert stack to array (optional)
  toArray() {
    const arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}
