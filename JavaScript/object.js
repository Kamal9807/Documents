/*object, constructor, prototype */
//creating object
let person = {
  fruit: "mango",
  color: "yellow",
  quantity: 1,
  fruit2: {
    type: "apple",
    color: "green",
  },
};
//overwriting object
person.quantity = 3;

document.write(person);
console.log(person.fruit);
console.log(person.quantity);
console.log(person["color"]);
console.log(person.fruit2);
console.log(person.fruit2.type);

//constructor in object (parameterized constructor)
function person1(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
}
const father = new person1("kamal", "nath", 12);
console.log(father);
console.log(father.firstname);
console.log(father.lastname);

//default constructor
function person2() {
  this.name = "sharan";
  this.age = 23;
  this.address = "aaa";
}
const father1 = new person2();
console.log(father1.name);
console.log(father1);

function Zoo(animal, snake, insect) {
  this.animal = animal;
  this.snake = snake;
  this.insect = insect;
}
const myVisit = new Zoo("lion", "cobra", "bee");
const myVisit1 = new Zoo("tiger", "anacoda", "spider");
console.log(myVisit.snake);
//Adding members to a first object
myVisit.birds = "parrot";
Zoo.Reptiles = "Turtle";
console.log(myVisit.birds);
console.log(myVisit.Reptiles);
//using prototype keyword
Zoo.prototype.fish = "goldenFish";
console.log(myVisit.fish);

// Adding method to a constructor function using prototype
const car = function (number, model) {
  this.number = number;
  this.model = model;
};
const buyingPer1 = new car(12, "bmw");
console.log(buyingPer1.model);
//adding method
car.prototype.getRate = function () {
  console.log("adding prototype method :", this.model);
};
buyingPer1.getRate();
