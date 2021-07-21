class LinkedListNode {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  map = {};
  listHead = null;
  listTail = null;

  constructor(maxSize) {
    this.maxSize = maxSize;
  }

  getValue(key) {
    if (key in this.map) {
      const item = this.map[key];

      if (item !== this.listHead) {
        this.removeFromLinkedList(item);
        this.insertAtFrontOfLinkedList(item);
      }
    }

    return null;
  }

  removeFromLinkedList(node) {
    if (node === null) return;
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    if (node === this.listHead) this.listHead = node.next;
    if (node === this.listTail) this.listTail = node.prev;
  }

  insertAtFrontOfLinkedList(node) {
    if (this.listHead === null) {
      this.listHead = node;
      this.listTail = node;
    } else {
      this.listHead.prev = node;
      node.next = this.listHead;
      this.listHead = node;
      this.listHead.prev = null;
    }
  }

  removeKey(key) {
    const node = this.map[key];
    this.removeFromLinkedList(node);
    delete this.map[key];
  }

  setKeyValue(key, value) {
    this.removeKey(key);

    if (Object.keys(this.map) >= this.maxSize && this.listTail !== null) {
      this.removeKey(this.listTail.key);
    }

    const node = new LinkedListNode(key, value);
    this.insertAtFrontOfLinkedList(node);
    this.map[key] = node;
  }
}
