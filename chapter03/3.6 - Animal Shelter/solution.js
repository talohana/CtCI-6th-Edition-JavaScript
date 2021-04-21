class AnimalShelter {
  count = 0;
  dogsHead = null;
  dogsTail = null;
  catsHead = null;
  catsTail = null;

  enqueue(name, type) {
    if (type === 'dog') {
      this.enqueueDog(name);
    } else if (type === 'cat') {
      this.enqueueCat(name);
    }
  }

  enqueueDog(name) {
    const node = { value: { name, index: count }, next: null };

    if (dogsHead === null) {
      this.dogsHead = node;
      this.dogsTail = node;
    } else {
      this.dogsTail.next = node;
      this.dogsTail = node;
    }

    count++;
  }

  enqueueCat(name) {
    const node = { value: { name, index: count }, next: null };

    if (catsHead === null) {
      this.catsHead = node;
      this.catsTail = node;
    } else {
      this.catsTail.next = node;
      this.catsTail = node;
    }

    count++;
  }

  dequeueAny() {
    if (this.dogsHead === null) {
      return this.dequeueCat();
    } else if (this.catsHead === null) {
      return this.dequeueDog();
    } else if (this.dogsHead.value.index < this.catsHead.value.index) {
      return this.dequeueDog();
    } else {
      return this.dequeueCat();
    }
  }

  dequeueDog() {
    if (this.dogsHead === null) {
      return null;
    }

    const value = this.dogsHead.value.name;
    this.dogsHead = this.dogsHead.next;

    return value;
  }

  dequeueCat() {
    if (this.catsHead === null) {
      return null;
    }

    const value = this.catsHead.value.name;
    this.catsHead = this.catsHead.next;

    return value;
  }
}
