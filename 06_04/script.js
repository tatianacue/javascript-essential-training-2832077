/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple"; // since this is let we have to containers two "colors"

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titleColor = "blue"; // let is more local, so it only changes it inside the function
  document.querySelector(".title").style.color = titleColor;
  console.log("inside", titleColor);
}

headingColor();
console.log("outside", titleColor); //locally scoped so it doesn't exist (javascript stalls cuz error)

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// changeable use let (most of the time use this)
// var is only used when you want global scope all the time (that is mutable)
