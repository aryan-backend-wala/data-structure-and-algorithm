export class Stack {
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element)
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0;
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  print() {
    console.log(this[_items].toString())
  }
}

let _items = Symbol();