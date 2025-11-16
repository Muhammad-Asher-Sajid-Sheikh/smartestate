export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }

  find(filterFn) {
    let curr = this.head;
    while (curr) {
      if (filterFn(curr.data)) return curr.data;
      curr = curr.next;
    }
    return null;
  }

  delete(filterFn) {
    if (!this.head) return;

    if (filterFn(this.head.data)) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    while (curr.next && !filterFn(curr.next.data)) {
      curr = curr.next;
    }
    if (curr.next) curr.next = curr.next.next;
  }

  toArray() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }
}
