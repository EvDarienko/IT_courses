var fieldset = document.querySelector("fieldset");
var titleError = document.querySelector(".title-error");
var priceError = document.querySelector(".price-error");
var unitError = document.querySelector(".unit-error");
var descriptionError = document.querySelector(".description-error");
var referenceError = document.querySelector(".reference-error");


fieldset.addEventListener("focusout", function(e) {
   
   if (e.target == title && !/^([А-ЯA-Z]|\s){1,25}$/i.test(title.value) && !/^$/.test(title.value)) {
      titleError.style.display = "block";
      title.value = "";
   } else {
      titleError.style.display = "none";
      title.value = checkCaps(title.value) || title.value;
   }

   if (e.target == price && /^(0(?!\d)|[1-9]\d*)[,.]?$/.test(price.value)) {
     price.value = price.value.replace(/^(0(?!\d)|[1-9]\d*)[,.]?$/, function(match) {
      if (/[,.]$/.test(match)) {
         return match + "00"
      } else if (/\d$/.test(match)) {
         return match + ".00"
      }
     })
   } else if (!/^(0(?!\d)|[1-9]\d*)[,.]\d{1,2}$/.test(price.value) && !/^$/.test(price.value)) {
      priceError.style.display = "block";
      price.value = "";
   } else {
      priceError.style.display = "none";
   }

   if (e.target == unit && !/^(шт|кг|л|ед)$/.test(unit.value) && !/^$/.test(unit.value)) {
      unitError.style.display = "block";
      unit.value = "";
   } else {
      unitError.style.display = "none";
   }

   if (e.target == description && !/^([А-ЯA-Z]|\s){1,150}$/i.test(description.value) && !/^$/.test(description.value)) {
      descriptionError.style.display = "block";
      description.value = "";
   } else {
      descriptionError.style.display = "none";
      description.value = checkCaps(description.value) || description.value;
   }

   if(e.target == reference && /^https:\/\/.+(\.ua|\.com|\.net)/i.test(reference.value) || /^$/.test(reference.value)) {
      referenceError.style.display = "none";
   } else if (/\w+(\.ua|\.com|\.net)/i.test(reference.value) && !/^https:\/\//.test(reference.value)) {
      reference.value = reference.value.replace(/\w+(\.ua|\.com|\.net)/i, function(match) {return "https://" + match});
   } else {
      referenceError.style.display = "block";
      reference.value = "";
   }
})

function checkCaps(value) {
   if (/([А-ЯA-Z]|\s)+/.test(value)) {
      return value = value.replace(/[А-ЯA-Z]+/g, function(match) {
         match = match.toLowerCase();
         return match[0].toUpperCase() + match.slice(1)
      })
   }
}