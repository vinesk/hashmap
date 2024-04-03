const LinkedList = require('./LinkedList');

class HashMap {
  constructor(size = 20) {
    this.map = new Array(size);
    for (let i = 0; i < size; i++) {
      this.map[i] = new LinkedList();
    }
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.map.length;
  }

  set(key, value) {
    const index = this.hash(key);
    let current = this.map[index].head;
    while (current) {
      if (current.value.key === key) {
        current.value.value = value;
        return;
      }
      current = current.next;
    }
    this.map[index].append({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    let current = this.map[index].head;
    while (current) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.next;
    }
    return undefined;
  }
}

module.exports = HashMap;
