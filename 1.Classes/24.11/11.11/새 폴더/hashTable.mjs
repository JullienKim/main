// import

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }
  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.Next;
    }
    return null;
  }
  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt();
      }
      currentNode = currentNode.Next;
      deletedIndex++;
    }
    return null;
  }
}

export { HashTable };
