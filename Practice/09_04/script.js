/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  // when entering grid, border is red
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  // turns grid yellow when mouse leaves
  gridContainer.style.outline = "6px solid yellow";
});

const gridCells = document.querySelectorAll(".cell"); //get all cells

gridCells.forEach((cell) => {
  //set cell border to yellow when entering cell
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid yellow";
  });

  cell.addEventListener("mouseleave", (e) => {
    //remove outline
    console.log(e);
    cell.style.outline = "";
  });

  cell.addEventListener("click", () => {
    //on click the cell becomes yellow
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = "yellow";
    }
  });
});

const body = document.body;
body.addEventListener("keydown", (event) => {
  console.log(event.code); //holds current key pressed

  if (event.code == "KeyL") {
    //when you press L key the background turns blue
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "blue")
      : (body.style.backgroundColor = "");
  }
});
