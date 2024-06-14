/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "camera";
collection[collection.length] = "new item"; //add new item;
collection[9] = "at the end"; // you can add anywhere in the array
console.log(collection[8]);
console.log(collection);
