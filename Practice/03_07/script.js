/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const tardis = {
  name: "Sexy",
  color: "blue",
  type: 40,
  doctor: {
    name: "Ten",
    hairColor: "brown",
    suit: "brown",
    shoes: "white converse",
  },
};

console.log("This is the current TARDIS:", tardis);
console.log("The current Doctor is: ", tardis.doctor.name);
console.log("The Doctor is wearing", tardis.doctor.shoes);
console.log("The TARDIS type is TYPE", tardis.type);

const sonicScrewdriver = {
  name: "Sonic",
  color: "Grey/Blue",
  length: "small",
  currentDoctor: "Ten",
};
