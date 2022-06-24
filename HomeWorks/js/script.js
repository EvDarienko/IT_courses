// Задача 1

var str = 'ahb acb aeb aeeb adcb axeb';

var regexp = /a.b/g;

console.log(str.match(regexp));

// Задача 2

var str1 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';

var regexp1 = /\*q+\+/g;

console.log(str1.match(regexp1));

// Задача 3

var str2 = "2010-09-30 23:59";

var regexp2 = /^(1\d{3}|20[0-1][0-2])-(1[0-2]|0\d)-([0-2]\d|30) ([0-1]\d|2[0-3]):([0-5]\d)/;

console.log(str2.match(regexp2));

// Задача 4

var str3 = "Extra   spaces";
var str4 = "Sentence.   Sentence.";

console.log(str3.replace(/(?<=\w)\s+/, " "));
console.log(str4.replace(/(?<=\.)\s+/, "  "));