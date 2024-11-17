const averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

function printMatrix(matrix) {
  let str = ""
  for (let i = 0; i < matrix.length; i++) {
    str += '\n' + i + ' |'
    for (let j = 0; j < matrix[i].length; j++) {
      str += matrix[i][j] + " |"
    }
  }
  return str
}

const isEven = function (x) {
  return (x % 2 === 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multipleOf13(element, index, array) {
  return (element % 13 == 0) ? true : false;
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

var friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1
  } else if (a.age > b.age) {
    return 1
  } else {
    return 0;
  }
}

var names2 = ['Maève', 'Maeve'];

