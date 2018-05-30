const Stack = require("./stack");
const Queue = require("./queue");
const Set = require("./set");
const test = require("tape");
const tapSpec = require("tap-spec");

test
  .createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test("Stack class", t => {
  const s = new Stack();

  t.test("List must be array and initial size is 0", t => {
    t.true(Array.isArray(s.list) && s.size === 0, "Shoud return true");
    t.end();
  });

  t.test("Push method adds to stack", t => {
    s.push(1);
    t.true(s.list.length === 1 && s.size === 1, "Should return true");
    t.end();
  });

  t.test("Pop method removes item from stack and decrements size by one", t => {
    s.pop();
    t.true(s.list.length === 0 && s.size === 0, "Should return true");
    t.end();
  });

  t.test("Top returns the element at last index", t => {
    s.push("not top");
    s.push("top");
    let top = s.top();
    t.true(top === "top" && s.list.indexOf(top) === 1, "Should return true");
    t.end();
  });

  t.test("Stack is empty", t => {
    let empty = s.isEmpty();
    t.false(empty === true && s.size === 0, "Should return flase");
    t.end();
  });

  t.test("Stack was cleared", t => {
    s.clear();
    t.true(s.list.length === 0 && s.size === 0, "Should return true");
    t.end();
  });
});

test("Queue class", t => {
  const q = new Queue();

  t.test("Check order in which elements are added is correct", t => {
    q.enqueue("first");
    q.enqueue("second");
    q.enqueue("third");
    t.true(
      q.list[0] === "first" && q.list[1] === "second",
      "Shoud return true"
    );
    t.end();
  });

  t.test("Check that element at index 0 was removed", t => {
    q.dequeue();
    t.true(q.list[0] === "second", "Should return true");
    t.end();
  });

  t.test("Return element at index 0", t => {
    q.first();
    t.true(q.list[0] === "second", "Should return true");
    t.end();
  });

  t.test("Is the list empty return t or f", t => {
    t.false(q.isEmpty(), "Should return true");
    t.end();
  });
});

test("Set class", t => {
  const s = new Set();

  t.test("Set inserts elements not alredy in set", t => {
    s.insert(2);
    s.insert(2);
    t.true(s.list.length === 1, "Should return true");
    t.end();
  });

  t.test("Set remove cuts out a provided element", t => {
    s.remove(2);
    console.log(s.list)
    t.true(s.list.length === 0, "Should return true");
    t.end();
  });

  t.test("If element exists return true", t => {
    t.false(s.has(2), "Should return false");
    t.end();
  });

  t.test("Returns the list of elements", t => {
    s.insert(5);
    s.insert(4);
    s.insert(3);
    t.true(
      true,
      "Should return true"
    );
    t.end();
  });
});

// t.test('', t => {
//   t.true( , 'Should return true');
//   t.end();
// });
