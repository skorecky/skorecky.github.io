Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var MAXSHAPESIZE = 300
var aHeight = (window.screen.availHeight - MAXSHAPESIZE);
var aWidth = (window.screen.availWidth - MAXSHAPESIZE);
var shape = document.getElementById("shape");
var shapes = ["square","circle","star","oct"];
var colors = ["red","green","blue","black"];

var randomNumber = function(min, max) {
    return Math.random() * (max - min) + min;
}

var moveShape = function(top, left) {
  console.log("moveShape");
  shape.style.left = left + "px";
  shape.style.top = top + "px";
  shape.className = shapes.random();
  shape.style.backgroundColor = colors.random();
  console.log(shape, aWidth, aHeight);
};

shape.addEventListener("click", () => {
  var randomHeight = randomNumber(0, aHeight);
  var randomWidth = randomNumber(0, aWidth);
  moveShape(randomHeight, randomWidth)
  console.log("shape click");
});


document.addEventListener("DOMContentLoaded", () => {
  // moveShape();
  console.log("loaded");
});
