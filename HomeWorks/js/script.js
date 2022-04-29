// Задача 1

for(;;) {
	var num1 = prompt("Введите число (1)");
	if (!checkIsNaN(num1, "Первый")) {
		break
	}
	var num2 = prompt("Введите число (2)");
	if (!checkIsNaN(num2, "Второй")) {
		break
	}
	checkNumbers();
}

function checkNumbers() {
	if (num1 == num2) {
		console.log("Числа равны")
	} else if (num1 < num2) {
	console.log("Первое число меньше")
	} else if (num2 < num1) {
	console.log("Второе число меньше")
	}
}

function checkIsNaN(number, word) {
	if ((number >= 0 || number <= 0) && number) {
		return true
	} else {
		console.log(word + " ввод не число");
		return false
	}
}

// Задача 2

function getNumberOfEntrance(floor, entrance, quantityOfApartment, numberOfApartment) {
	var num = 0;
	floor = +prompt("Введите этажность дома (1-25)");
	if (!checkCondition(floor, 25)) return;
	entrance = +prompt("Введите количество подъездов в доме (1-10)");
	if (!checkCondition(entrance, 10)) return;
	quantityOfApartment = +prompt("Введите количество квартир на этаже (1-20)");
	if (!checkCondition(quantityOfApartment, 20)) return;
	numberOfApartment = prompt("Введите номер квартиры");
	if (!checkCondition(numberOfApartment, (floor * entrance * quantityOfApartment), numberOfApartment)) return;
	outer:
	for (var i = 1; i <= entrance; i ++) {
		for (var j = 0; j < (quantityOfApartment * floor); j++) {
			num += 1;
			if (num == numberOfApartment) {
				if (i == 3) {
					console.log("Данная квартира находится в " + i + "-ьем подъезде");
					break outer;
				} else if (i == 2) {
					console.log("Данная квартира находится во " + i + "-ом подъезде");
					break outer;
				} else {
					console.log("Данная квартира находится в " + i + "-ом подъезде");
					break outer;
				}
			}
		}
	}
}

function checkCondition(a, b, c) {
	if ((a == c) && (a < 1 || a > b || isNaN(a))) {
		console.log("Данная квартира не находится в этом доме либо введено некоректное значение");
		return false;
	} else if (a < 1 || a > b || isNaN(a)) {
		console.log("Введите значение в пределах допустимого диапазона");
		return false;
	} else {
		return true;
	}
}

getNumberOfEntrance();

// Задача 3

function checkNumbers1(num1, num2) {
	if ((num1 % 2 == 0) && (num2 % 2 == 0)) {
		return num1 * num2
	} else if ((num1 % 2 != 0) && (num2 % 2 != 0)) {
		return num1 + num2
	} else if ((num1 % 2 == 0) && (num2 % 2 != 0)) {
		return num2
	} else {
		return num1
	}
}

console.log(checkNumbers1(+prompt("Введите число (1)"), +prompt("Введите число (2)")));

// Задача 4

function calcRect(x1, y1, x2, y2, x3, y3, x4, y4) {
	if (!x1 || !x2 || !x3 || !x4 || !y1 || !y2 || !y3 || !y4 || isNaN(x1+x2+x3+x4+y1+y2+y3+y4)) {
		console.log("Введите коректные значения")
	} else  if (x1 == x4 && x2 == x3 && y1 == y4 && y2 == y3) {
		console.log("Заданные координаты образуют прямоугольник")
	} else {
		console.log("Заданные координаты не образуют прямоугольник")
	}
}

calcRect(
	prompt("Введите х1"),
	prompt("Введите y1"),
	prompt("Введите x2"),
	prompt("Введите y2"),
	prompt("Введите x3"),
	prompt("Введите y3"),
	prompt("Введите x4"),
	prompt("Введите y4")
	);

	// Задача 5

function getSequence(start, step) {
	function generator() {
		if (start === undefined) {
			start = 0;
		}
		if (step === undefined) {
			step = 1;
		}
		start = start + step;
		return start - step;
	}
	return generator;
}

var anotherGenerator = getSequence(20, 5);

console.log(anotherGenerator());
console.log(anotherGenerator());
console.log(anotherGenerator());