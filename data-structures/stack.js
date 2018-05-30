"user strict";

// 1 Implement a stack class
// 1 Use either the array or a linked list as basis (if you're a pro, implement it once with array and once with linked list)
// 1 If you use the array as base data structure, follow these two rules:


// Try to implement it by only using the array access array[i] and array length array.length

// Do NOT use array.push(...) and array.pop(...)

// (This is not to make your life harder, but to see in the inner workings of a stack...)
// 1 Write unit tests for each of the functions. Remember TDD: write your unit tests BEFORE you start coding the stack.


class Stack {
  // Constructor to initialize the stack
  constructor() {
    this.list = [];
    this.size = 0;
  }

  // Pushes a new element on top of the stack and retruns the length of the stack
  push(element) {
    this.list[this.size] = element;
    this.size++;
    return this.size;
  }

  // Removes the top most element from the stack and returns that element
  pop() {
    this.list.length = this.list.length - 1;
    this.size--;
    return this.list;
  }

  // Returns the top-most element, but doesn't change the stack
  top() {
    return this.list[this.size - 1];
  }

  // Returns true if stack has no elements in it, otherwise false
  isEmpty() {
    return this.size === 0;
  }

  // Removes all elements from the stack
  clear() {
    this.list.length = 0;
    this.size = 0;
    return this.list;
  }
}

module.exports = Stack;
