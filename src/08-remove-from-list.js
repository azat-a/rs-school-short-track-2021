/**
 * Deep clone object (recursively)
 *
 * @param {Object} object
 * @return {Object}
 *
 * @example
 * For object = {a: 5, b: {c: 10}, d: {e: {f: 15}}}
 * returns cloned {a: 5, b: {c: 10}, d: {e: {f: 15}}}
 */

function deepClone(object) {
  const newObject = {};
  for (const key in object) { // eslint-disable-line
    if (object[key] instanceof Object) {
      newObject[key] = deepClone(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

/**
 * Given a singly linked list of integers and an integer,
 * remove all elements from list that have a value equal to this integer.
 *
 * @param {List} list
 * @param {Number} num
 * @return {List}
 *
 * @example
 * For list = [3, 1, 2, 3, 4, 5] and num = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, num) {
  let list = deepClone(l);
  let prev;
  let current = list;

  while (current.next !== null) {
    if (current === list && current.value === num) {
      list = current.next;
    } else if (current.value === num) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return list;
}

module.exports = removeKFromList;
