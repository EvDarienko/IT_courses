var tank = document.querySelector(".tank");
var fire = document.querySelector(".fire");
var bullet = document.querySelector(".bullet");

document.addEventListener("keydown", function(e) {
   var tankTop = tank.getBoundingClientRect().top;
   var tankLeft = tank.getBoundingClientRect().left;
   var tankBottom = tank.getBoundingClientRect().bottom;
   var tankRight = tank.getBoundingClientRect().right;
   var tankHeight = tank.getBoundingClientRect().height;
   var tankWidth = tank.getBoundingClientRect().width;
   var computedStyle = getComputedStyle(tank)
   step = 10;

   switch (e.code) {
      case "KeyD":
         tank.style.transform = "rotate(0deg)";
         tank.style.left = tankRight + step < window.innerWidth
                           ? tankLeft + step + "px"
                           : tankLeft 
      break;
      case "KeyA":
         tank.style.transform = "rotate(180deg)";
         tank.style.left = tankLeft - step > 0
                           ? tankLeft - step + "px"
                           : tankLeft
      break;
      case "KeyS":
         tank.style.transform = "rotate(90deg)";
         if (window.innerHeight > tankBottom + step) {
            if (tank.getBoundingClientRect().top < 0) {
               tank.style.top = parseInt(computedStyle.top) + Math.abs(tank.getBoundingClientRect().top) + step + "px"
            } else {
               tank.style.top = parseInt(computedStyle.top) + step + "px"
            }
         }
      break;
      case "KeyW":
         tank.style.transform = "rotate(270deg)";
         tank.style.top = (Math.ceil(tankBottom) + step == Math.ceil(tankHeight) + step)
                          ? tank.style.top
                          : parseInt(computedStyle.top) - step + "px"
      break;
      case "Space":
         switch (tank.style.transform) {
            case "rotate(0deg)":
               setFire(tankLeft, tankWidth, tankTop, tankHeight, "rotate(90deg) translateX(-61%)", 1, 2);
               setBullet(tankLeft, tankWidth, tankTop, tankHeight, "rotate(90deg) translate(-100%, -200%)", 1, 2);
            break;
            case "rotate(180deg)":
               setFire(tankLeft, 1, tankTop, tankHeight, "rotate(-90deg) translate(61%, -90%)", 1, 2);
               setBullet(tankLeft, 1, tankTop, tankHeight, "rotate(-90deg) translate(100%, -300%)", 1, 2);
            break;
            case "rotate(90deg)":
               setFire(tankLeft, tankWidth, tankBottom, 1, "rotate(180deg) translateX(50%)", 2, 1);
               setBullet(tankLeft, tankWidth, tankBottom, 1, "rotate(180deg) translate(50%, -200%)", 2, 1);
            break;
            case "rotate(270deg)":
               setFire(tankLeft, tankWidth, tankTop, 1, "rotate(0deg) translate(-50%, -100%)", 2, 1);
               setBullet(tankLeft, tankWidth, tankTop, 1, "rotate(0deg) translate(-50%, -300%)", 2, 1);
            break;
         }
   }
})

document.addEventListener("keyup", function(e) {
   if (e.code == "Space") {
      fire.style.display = "none";
   }
})

function setFire(tankParam1, tankParam2, tankParam3, tankParam4, tankParam5, num1, num2) {
   fire.style.display = "block";
   fire.style.left = tankParam1 + tankParam2 / num1 + "px";
   fire.style.top = tankParam3 + tankParam4 / num2 + "px";
   fire.style.transform = tankParam5;
}

function setBullet(tankParam1, tankParam2, tankParam3, tankParam4, tankParam5, num1, num2) {
   bullet.style.display = "block";
   bullet.style.left = tankParam1 + tankParam2 / num1 + "px";
   bullet.style.top = tankParam3 + tankParam4 / num2 + "px";
   bullet.style.transform = tankParam5;
}