// Implement a set object
// Important! Avoid using ECMAScript 5 maps. Try to implement all functions by yourself by using arrays or objects.
// Write unit tests for each of the functions.

class Set {
  // Constructor to initialize the set
  constructor() {
    this.list = [];
    this.size = 0;
  }

  // inserts an element
  insert(element) {
    if (this.list.indexOf(element) === -1) {
      this.list[this.size] = element;
      this.size++;
    }
  }

  // removes an element
  remove(element) {
    const i = this.list.indexOf(element);
    if (i !== -1) {
      this.list.splice(i, 1);
      this.size--;
    }
  }

  // checks if an element exists in the set
  has(element) {
    return this.list.indexOf(element) !== -1;
  }

  // returns array of all entries
  all() {
    return this.list;
  }

  // returns the number of all entries
  length() {
    return this.list.length;
  }
}

module.exports = Set;
