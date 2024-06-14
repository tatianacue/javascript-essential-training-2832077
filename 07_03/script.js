/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push("pencil", 5); //adds new items to end of array (pop is opposite)
backpackContents.unshift("pencil", 5); //add to front of array (shift removes first item)
console.log(backpackContents.join(", ")); // comma separated list, you can do any parameter

backpackContents.forEach(function (item) {
  // use for each loop to iterate through item
  item = `<li>${item}</li>`; // manipulate contents in array
  console.log(item); // prints item in console
});

let longItems = backpackContents.find(function (item) {
  //first element where condition is met
  // grabs each item
  if (item.length >= 5) {
    // sees if each item is greater than equal to 5
    return item;
  }
});
console.log("longItems:", longItems);
