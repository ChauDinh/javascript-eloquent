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