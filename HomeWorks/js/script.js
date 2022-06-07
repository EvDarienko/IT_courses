// Создание элементов

var gameField = document.createElement("div");
var button = document.createElement("button");
var container = document.createElement("div");
var title = document.createElement("h1");

document.body.append(container);
container.append(gameField);
container.append(button);
document.body.append(title);

container.style.cssText = "display: flex; justify-content: space-evenly; padding-top: 50px;";
gameField.style.cssText = "width: 500px; display: flex; flex-wrap: wrap; border: 2px solid black;";
button.style.cssText = "display: block; width: 200px; height: 100px; font-size: 30px; font-weight: 500; cursor: pointer;";
title.style.cssText = "text-align: center; margin-top: 20px;";
button.innerHTML = "RESET";

for (var i = 0; i < 9; i++) {
  var box = document.createElement("div");
  var img = document.createElement("img");
  gameField.append(box);
  box.append(img);
  img.style.cssText = "width: 100%;";
  box.style.cssText = "flex-basis: calc(100% / 3); height: calc(500px / 3); border: 2px solid black; cursor: pointer;";
}

/////////////////////////////

var combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

var user1 = [];
var user2 = [];

var flag = {
  click: true,
}

gameField.addEventListener("click", setEvent)

function setEvent(e) {
  if (e.target.closest("div") && flag.click == true && e.target.firstElementChild) {
    e.target.firstElementChild.src = "images/circle.png";
    flag.click = false;
    user1.push(+e.target.dataset.id);
    getResult(user1, 1);
  } else if (e.target.closest("div") && flag.click == false && e.target.firstElementChild) {
    e.target.firstElementChild.src = "images/cross.png";
    flag.click = true;
    user2.push(+e.target.dataset.id);
    getResult(user2, 2);
  }
}


Array.from(gameField.children).forEach(function(item, index) {
  item.setAttribute("data-id", index + 1);
})

function getResult(user, num) {
  combinations.forEach(function(item, index) {
    var winCombination = item.filter(function(elem, i) {
      if (user.includes(elem)) {
        return elem;
      }
    })
    if (winCombination.length == 3) {
      title.innerHTML = "Победил Игрок " + num + "!";
      gameField.removeEventListener("click", setEvent);
    }
  })
}

button.addEventListener("click", function(e) {
  document.querySelectorAll("img").forEach(function(item) {
    item.src = "";
  })
  flag.click = true;
  user1 = [];
  user2 = [];
  title.innerHTML = "";
  gameField.addEventListener("click", setEvent);
})