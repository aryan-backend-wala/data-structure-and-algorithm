class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value;
  }
}

const p = new Person('Aryan Verma');
console.log(p.name)
p.name = 'Gandalf'
console.log(p.name)