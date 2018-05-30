// Implement a queue object
// Again, feel free to use either array or linked lists to achieve your goals (brownie points if you do both variants)
// Write unit tests for each of the functions

class Queue {
  // Constructor to initialize the queue
  constructor() {
    this.list = [];
    this.size = 0;
  }

  // Adds element at the end of the queue
  enqueue(element) {
    this.list[this.size] = element;
    this.size++;
  }

  // Removes element from the front, and returns that element
  dequeue() {
    this.list.reverse().length = this.list.length - 1;
    this.list.reverse();
    this.size--;
  }

  // Returns front-most element from queue, but doesn't remove it
  first() {
    return this.list[0];
  }

  // Return true if queue has no elements in it, otherwise false
  isEmpty() {
    return this.list.length === 0;
  }

  // Remove all elements from queue
  clear() {
    this.list.length = 0;
  }
}

module.exports = Queue;
