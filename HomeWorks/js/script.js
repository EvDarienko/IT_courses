// ДЗ 3

var sum;
 
for (;;) {
	var action = prompt("Введите операцию, которую хотите сделать (+ - / *)");
	switch(action) {
		case "+":
		case "-":
		case "/":
		case "*":
			break;
		default:
			console.log("Введите нужную операцию");
			continue;
	}
	for (;;) {
		argQuantity = +prompt("Введите количество аргументов");
		if (argQuantity < 2) {
			console.log("Количество аргументов должно быть больше 1");
			continue;
		} else if (isNaN(argQuantity)) {
			console.log("Введите число");
			continue;
		} else {
			break;
		}
	}
	for (var i = 0; i < argQuantity; i++) {
		var arg = prompt("Введите " + (i + 1) + "-ый " + "аргумент");
		if (isNaN(arg) || arg == null || arg == "") {
			console.log("Введите числовой аргумент");
			i = i - 1;
			continue;
		}
		if (i == 0) {
			sum = +arg;
		} else if (action == "+") {
			sum = sum + +arg;
		} else if (action == "-") {
			sum = sum - +arg;
		} else if (action == "*") {
			sum = sum * +arg;
		} else if (action == "/") {
			sum = sum / +arg;
		}
		console.log(sum);
	}
	console.log("Результат: " + sum)
	break;
}