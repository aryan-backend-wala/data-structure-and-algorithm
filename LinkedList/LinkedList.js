export class LinkedList {
  #Node = class {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  };

  #length = 0;
  #head = null;

  append = (element) => {
    const node = new this.#Node(element);
    if (this.#head === null) {
      this.#head = node;
    } else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.#length++;
  };

  insert = (position, element) => {
    if (position >= 0 && position <= this.#length) {
      const node = new this.#Node(element);
      let current = this.#head;
      let previous = null;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this.#head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.#length++;
      return true;
    }
    return false;
  };

  removeAt = (position) => {
    if (position >= 0 && position < this.#length) {
      let current = this.#head;
      let previous = null;
      let index = 0;

      if (position === 0) {
        this.#head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.#length--;
      return current.element;
    }
    return null;
  };

  remove = (element) => {
    const index = this.indexOf(element);
    return this.removeAt(index);
  };

  indexOf = (element) => {
    let current = this.#head;
    let index = 0;

    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };

  isEmpty = () => this.#length === 0;

  size = () => this.#length;

  toString = () => {
    let current = this.#head;
    let string = '';

    while (current) {
      string += current.element + (current.next ? ' -> ' : '');
      current = current.next;
    }
    return string;
  };

  print = () => console.log(this.toString());
}
