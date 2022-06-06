var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var ships = ["1-a", "3-a", "4-a", "6-b", "2-c", "6-c", "2-d", "2-e", "6-f", "7-f", "8-f", "1-h", "2-h", "3-h", "4-h"];

// Создание элементов

var body = document.body;
var wrapper = document.createElement("div");
var title = document.createElement("div");

body.append(wrapper);
body.append(title);

wrapper.style.cssText = "width: 600px;";
wrapper.classList.add("wrap");

title.style.cssText = "display: flex; justify-content: center; align-items: center; width: 300px; height: 100px; font-size: 30px; font-weight: 600; background-color: grey;";
title.textContent = "Get ready!";

body.style.cssText = "display: flex; justify-content: space-around; padding-top: 100px;";

for (var i = 0; i < 9; i++) {
  var rowContainer = document.createElement("div");
  wrapper.append(rowContainer);
  rowContainer.style.cssText = "display: flex; text-align: center;";
  for (var j = 0; j < 9; j++) {
    var boxItem = document.createElement("div");
    rowContainer.append(boxItem);
    boxItem.style.cssText = "width: 11.111%; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 20px; border: 1px solid black;";
    (j != 0 && i == 0) && (boxItem.textContent = field[j - 1].toUpperCase());
    (i != 0 && j == 0) && (boxItem.textContent = i);
    (j < 9 && i == 0 || j == 0) && (boxItem.style.border = "none");
  }
}

///////////////////////////////////////////

var elems = wrapper.children;

function setCoordinates() {
  Array.from(elems).forEach(function(item) {
    item.querySelectorAll("*").forEach(function(item, index) {
      if (item.textContent == "" && index != 0) {
        item.style.cursor = "pointer";
        item.setAttribute("data-id", item.parentElement.textContent + "-" + field[index - 1]);
      }
    })
  })
}

function setShips(arr) {
  arr.forEach(function(item) {
    wrapper.querySelectorAll("*").forEach(function(elem) {
      if (item == elem.dataset.id) {
        elem.style.backgroundColor = "red";
      }
    })
  })
}

function getResult() {
  wrapper.querySelectorAll("*").forEach(function(item, index) {
    if (item.hasAttribute("data-id")) {
      item.addEventListener("click", function(e) {
        if (item.dataset.check == "busy") {
          e.stopImmediatePropagation();
          title.textContent = "Занято!";
        }
      })
      item.addEventListener("click", function(e) {
        if (ships.includes(e.target.dataset.id)) {
          item.style.backgroundColor = "black";
          title.textContent = "Ранил!";
          item.setAttribute("data-check", "busy");
        } else {
          item.setAttribute("data-check", "busy");
          item.textContent = "X";
          item.style.fontSize = "30px";
          item.style.fontWeight = "400";
          title.textContent = "Мимо!";
        }
      })
    }
  })
}

setCoordinates();
setShips(ships);
getResult();