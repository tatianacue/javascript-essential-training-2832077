/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Tardis from "./Tardis.js";

const elevensTardis = new Tardis(
  "Bluey",
  "Navy Blue",
  40,
  "Eleven",
  "dark brown",
  "tweed jacket",
  "boots",
  true
);

const twelvesTardis = new Tardis(
  "Library",
  "Dark Blue",
  40,
  "Twelve",
  "grey",
  "jacket",
  "boots",
  false
);

console.log("This is Eleven's TARDIS:", elevensTardis);
console.log("This is Twelve's TARDIS:", twelvesTardis);
twelvesTardis.useVortex(true);
console.log("Twelve's Tardis is now in orbit:", twelvesTardis.vortexStatus);
