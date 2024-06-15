/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addText(stuff) {
  const newArticle = document.createElement("article");
  newArticle.innerText = stuff;
  return newArticle;
}

const main = document.querySelector("main");
main.append(addText("Hello There"));

const respondtoKenobi = function (response) {
  const newHeading = document.createElement("h1");
  newHeading.innerText = response;
  return newHeading;
};

main.append(respondtoKenobi("General Kenobi"));

// arrow function
const addHighGround = (response) => {
  const newHeading = document.createElement("h2");
  newHeading.innerText = response;
  return newHeading;
};

main.append(addHighGround("It's over Anakin. I have the high ground."));
