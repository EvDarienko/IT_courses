// Задача 1

var allElems = document.body.querySelectorAll("*");

allElems.forEach(function(item, index) {
  (item.classList.contains("zzz") && item.closest(".task1")) && (item.innerHTML = index + 1);
})

// // Отсчёт ведётся от body, где body = 0

// // Задача 2

var elems = document.querySelector(".task2").children;

Array.from(elems).forEach(function(item) {
  item.textContent.includes("www") && (item.style.color = "blue");
})

// Задача 3

var elemTask3 = document.querySelector(".task3");
var elemKids = elemTask3.children;
var ul = document.createElement("ul");

elemTask3.append(ul);

Array.from(elemKids).forEach(function(item) {
  if (item.classList.contains("zzz")) {
    var li = document.createElement("li");
    ul.append(li);
    li.textContent = item.textContent;
  }
})