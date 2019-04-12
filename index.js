// Methods

let rabbit = {};
rabbit.talk = function(speak) {
  console.log(`The rabbit says ${speak}`);
};

rabbit.talk("I love you"); 

// the rabbit.talk is a method

// Notes: When a function is called as a method, the binding called `this` in its body automatically points at the object it was called on.

function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = { type: "white", speak };
let redRabbit = { type: "red", speak };

whiteRabbit.speak("Oh my ears");
speak.call(redRabbit, "Oh My God!!!");

// Notes: the `this` is as an extra parameter that is passed in different ways. We can use function's call method as the example above.

// Each function has its own `this` binding.

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 });

// Prototypes

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

// Notes: besides a set of properties, most objects also have a prototype - just like another object that is used as a fallback source of properties. Particularly, when we request a property that does not have in an object, its prototype will be searched for the property, then the prototype's prototype, and so on.

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // Function derive on Function.prototype

console.log(Object.getPrototypeOf([]) == Array.prototype); // Array derive on Array.prototype


// We can use Object.create to create an object with a specific prototype as following: 
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SRKARERRC");
