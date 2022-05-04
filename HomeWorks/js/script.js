// Задача 1

var arr = [{name: 'Vasya', age: 24}, 
          {name: 'Petya', age: 12}, 
          {name: 'Fedya', age: 6}, 
          {name: 'Ann', age: 18}, 
          {name: 'Nastya', age: 40}]

arr.sort(function(a, b) {
  return a.age - b.age
})

console.log(arr);

// Задача 2

var arr = [NaN, 0, 77, -0, false, -17, '', undefined, 99, null];

function findFalse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (!array[i]) {
      array.splice(i, 1);
    }
  }
}

findFalse(arr);
console.log(arr);

// Задача 3

var arr = [NaN, 0, 77, 99, false, -17, '', undefined, 99, null, 77];

function find(array, value) {
    var test = [];
    array.forEach(function(item, index) {
        if (item === value) {
            test.push(index);
        } else if (Number.isNaN(value) && Number.isNaN(item)) {
            test.push(index);
        }
    })
    return test;
}

console.log(find(arr, 99));

// Задача 4

function createMatrix(row, col) {
    var test = [];
    for (var i = row; i > 0; i--) {
        test.push([]);
    }
    test.forEach(function(item, index) {
        for (var j = 0; j < col; j++) {
            var random = Math.ceil(Math.random()*100);
            item.push(random);
        }
    })
    return test;
}

console.log(createMatrix(5, 5));
