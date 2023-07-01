// Wheel element
let container = document.querySelector(".container");
// Spin button
let btn = document.getElementById("spin");
let number;

btn.onclick = function () {
  if (!number) {
    number = 360; // Set initial rotation to land on "8"
  } else {
    number += Math.ceil(Math.random() * 1000); // Generate random rotation
  }

  //For rotation styling
  container.style.transform = "rotate(" + number + "deg)";
  
};
