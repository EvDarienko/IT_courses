var setDate = new Date();

var time = prompt("Введите время в формате чч:мм");

time = time.split(":");

setDate.setHours(time[0], time[1], 0);

var viewTime = document.querySelector("h1");

var countTime = setInterval(function() {
    var date = new Date();
    viewTime.textContent = date.toLocaleTimeString();
    if (setDate - Date.now() <= 0) {
        viewTime.textContent = "ЗВОНОК!"
        clearInterval(countTime);
    }
}, 1000)

console.log("Будильник прозвенит в " + setDate);