const Node = require('./Node');

class LinkedList {
  constructor() {
    this.headNode = null;
    this.listSize = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.listSize++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.headNode;
    this.headNode = newNode;
    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.listSize) {
      throw new Error('Index out of bounds');
    }
    let count = 0;
    let current = this.headNode;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  pop() {
    if (!this.headNode) return null;
    let current = this.headNode;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (prev) {
      prev.next = null;
    } else {
      this.headNode = null;
    }
    this.listSize--;
    return current.value;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.headNode;
    let str = '';
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.next;
    }
    return str + 'null';
  }

  insertAt(value, index) {
    if (index < 0 || index > this.listSize) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.listSize) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let count = 0;
    let current = this.headNode;
    let prev = null;
    while (count !== index) {
      prev = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    prev.next = newNode;
    this.listSize++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.listSize) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.headNode = this.headNode.next;
      this.listSize--;
      return;
    }
    let count = 0;
    let current = this.headNode;
    let prev = null;
    while (count !== index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
    this.listSize--;
  }
}

module.exports = LinkedList;
