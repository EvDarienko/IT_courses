// Задача 1

var array = [2, 3, 4, 5, 6, 7];

function toSum(arr, n) {
  if (n < 0) {
    return 0;
  } else {
    return arr[n] + toSum(arr, n - 1);
  }
}

console.log(toSum(array, array.length - 1))

// Задача 2

function calcSum(start, end, step) {
  if (end < start) {
    return 0;
  } else if (start == end) {
    return start;
  } else if (step == 0) {
    return start;
  } else if (start > end) {
    return start;
  } else {
    return start + calcSum(start + step, end, step);
  }
}

console.log(calcSum(1, 10, 2));