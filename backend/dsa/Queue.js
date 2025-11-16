// Node class for linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue using linked list
export class Queue {
  constructor() {
    this.front = null; // front node
    this.back = null;  // back node
    this.size = 0;
  }

  // Add item to back
  enqueue(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size++;
  }

  // Remove item from front
  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.back = null; // queue is empty now
    this.size--;
    return value;
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Convert queue to array
  toArray() {
    const arr = [];
    let current = this.front;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}
