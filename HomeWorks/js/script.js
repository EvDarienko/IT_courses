// ДЗ 4 (Задача 1)

var sign = "";
var sum = "";

for (var i = 0; i < 7; i++) {
	sign += "#";
	sum += sign + "\n";
}

console.log(sum);

// ДЗ 4 (Задача 2)

var sum1 = '';

for (var i = 1; i <= 12; i++) {
	var str = '';

	for(var j = 1; j <= 28; j++) {

		for(;j <= 28;j++) {

			// 1 строка

			if (i == 1) {

				str += '#';
				continue;
			}

			// 2 строка

			if (i == 2 && (j <= 5 || j >= 23)) { 

				str += '#';
				continue;

			}

			// 3 строка

			if (i == 3 && (j <= 2 || j >= 27)) { 

				str += '#';
				continue;

			} else if (i == 3 && (j >= 6 && j <= 8)) {

				str += '*';
				continue;

			} else if (i == 3 && (j >= 25 && j <= 26)) {

				str += '*';
				continue;
			}

			// 4 строка

			if (i == 4 && (j == 1 || j >= 27 || (j >= 6 && j <= 7))) { 

				str += '#';
				continue;

			} else if (i == 4 && (j == 5 || (j >= 8 && j <= 9) || (j >= 19 && j <= 20) || j == 26)) {

				str += '*';
				continue;

			} else if (i == 4 && j == 23) {

				str += "O";
				continue;
			}

			// 5 строка

			if (i == 5 && (j == 1 || j == 28 || (j >= 19 && j <= 20))) { 

				str += '#';
				continue;

			} else if (i == 5 && ((j >= 6 && j <= 8) || (j >= 21 && j <= 22) || j == 27)) {

				str += '*';
				continue;

			} else if (i == 5 && j == 14) {

				str += 'O';
				continue;
			}

			// 6 строка

			if (i == 6 && (j == 1 || j == 28 || (j >= 19 && j <= 20))) {

				str += '#';
				continue;

			} else if (i == 6 && (j >= 21 && j <= 23)) {

				str += '*';
				continue;

			} else if (i == 6 && j == 9) {

				str += 'O';
				continue;
			}

			// 7 строка

			if (i == 7 && (j == 1 || j == 28 || (j >= 19 && j <= 20))) {

				str += '#';
				continue;

			} else if (i == 7 && (j >= 21 && j <= 22)) {

				str += '*';
				continue;
			} 

			// 8 строка

			if (i == 8 && (j == 1 || j == 13 || j == 28)) {

				str += '#';
				continue;

			} else if (i == 8 && j == 14) {

				str += '*';
				continue;

			} else if (i == 8 && j == 5) {

				str += 'O';
				continue;
			}

			// 9 строка

			if (i == 9 && (j == 1 || j == 13 || j == 28)) {

				str += '#';
				continue;

			} else if (i == 9 && (j == 2 || (j >= 14 && j <= 15))) {

				str += '*';
				continue;

			} else if (i == 9 && j == 23) {

				str += 'O';
				continue;
			}

			// 10 строка

			if (i == 10 && (j == 1 || j == 28 || (j >= 13 && j <= 14))) {

				str += '#';
				continue;

			} else if (i == 10 && ((j >= 2 && j <= 4) || (j >= 15 && j <= 16) || (j >= 26 && j <= 27))) {

				str += '*';
				continue;

			} else if (i == 10 && j == 21) {

				str += 'O';
				continue;
			}

			// 11 строка

			if (i == 11 && ((j >= 1 && j <= 2) || (j >= 12 && j <= 14) || j >= 26)) {

				str += '#';
				continue;

			} else if (i == 11 && ((j >= 3 && j <= 6) || (j >= 15 && j <= 17) || j == 25)) {

				str += '*';
				continue;
			}

			// 12 строка

			if (i == 12) {

				str += '#';
				continue;
			}

			break;
		}

		if (j < 28) {
			str += ' ';
		}
	}

sum1 += '"' + str + '"' + '\n';
}

console.log(sum1);