const LinkedList = require('./LinkedList');

class HashMap {
  constructor(size = 20) {
    this.buckets = new Array(size);
    this.size = 0;
    for (let i = 0; i < size; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return Math.abs(hashCode);
  }

  set(key, value) {
    const index = this.hash(key);
    let current = this.buckets[index].headNode;
    while (current) {
      if (current.value.key === key) {
        current.value.value = value;
        return;
      }
      current = current.next;
    }
    this.buckets[index].append({ key, value });
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index].headNode;
    while (current) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.next;
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    let current = this.buckets[index].headNode;
    let prev = null;
    while (current) {
      if (current.value.key === key) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.buckets[index].headNode = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new LinkedList();
    }
    this.size = 0;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i].headNode;
      while (current) {
        keys.push(current.value.key);
        current = current.next;
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i].headNode;
      while (current) {
        values.push(current.value.value);
        current = current.next;
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i].headNode;
      while (current) {
        entries.push([current.value.key, current.value.value]);
        current = current.next;
      }
    }
    return entries;
  }
}

module.exports = HashMap;
