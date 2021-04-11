// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.root = new ListNode(null);
  }

  get size() {
    let counter = 0;
    let cur = this.root;
    while (cur.next !== null) {
      cur = cur.next;
      counter += 1;
    }

    return counter;
  }

  enqueue(item) {
    const node = new ListNode(item);

    let cur = this.root;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = node;

    return this;
  }

  dequeue() {
    const top = this.root.next.value;
    this.root.next = this.root.next.next;

    return top;
  }
}

module.exports = Queue;
