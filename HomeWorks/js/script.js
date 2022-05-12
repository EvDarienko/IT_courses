// Задача 1

var password = 12345;

function makePassword(initialPassword) {
  return function() {
    var userPassword = prompt("Введите пароль");
    if (userPassword == initialPassword) {
      console.log("TRUE")
    } else {
      console.log("FALSE");
    }
  }
}

var checkPassword = makePassword(password);

checkPassword();

// Задача 2

function numbersGenerator() {
    var arr = [];
    return function() {
      var random = Math.ceil(Math.random()*100);
      if (arr.includes(random)) {
        console.log(random + " - " + "Такое число уже существует");
      } else {
        arr.push(random);
        console.log(arr);
      }
    }
  }
  
  var generator = numbersGenerator();
  
  generator();
  generator();
  generator();
  