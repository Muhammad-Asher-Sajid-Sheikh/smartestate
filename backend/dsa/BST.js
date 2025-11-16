class BSTNode {
  constructor(property) {
    this.property = property;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  insert(property) {
    const newNode = new BSTNode(property);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let curr = this.root;
    while (true) {
      if (property.price < curr.property.price) {
        if (curr.left) curr = curr.left;
        else {
          curr.left = newNode;
          break;
        }
      } else {
        if (curr.right) curr = curr.right;
        else {
          curr.right = newNode;
          break;
        }
      }
    }
  }

  inorder(result = []) {
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.property);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}
