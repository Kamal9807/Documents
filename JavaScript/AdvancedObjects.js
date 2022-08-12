//camelcase --> myFirstName
//pascal case --> MyFirstName
let employee2 = {
  name1: "kamal",
  age: 21,
  address: ["aaaa, bbbbb cccc dddd."],
  isAlive: true,
  address2: {
    city: "chennai",
    state: "Tamil nadu",
  },
  greeting: function () {
    let msg = "My name is " + this.name1 + " and my address is" + this.address;
    console.log(msg);
    let msg1 = `my self ${this.name1} my address is ${this.address}`;
    console.log(msg1);
  },
};

console.log(employee2.name1);
console.log(employee2.address);
console.log(employee2.address2.city);
console.log(employee2.greeting);
employee2.greeting();

//factory functions
function createperson(name1) {
  return {
    name1,
    greeting: function () {
      let msg1 = `my self ${this.name1}`;
      console.log(msg1);
    },
  };
}
let variable = createperson("Factory Function1");
let variable2 = createperson("Factory Function2");
variable.greeting();
variable2.greeting();

//constructor functions
function createPerson2(name1) {
  (this.name1 = name1),
    (this.greeting = function () {
      console.log(`my name is ${this.name1}`);
    });
}

let constructorFunct = new createPerson2("constructor Function");
constructorFunct.greeting();

//Dynamic object:
//It means we can access, delete, create after creation
const object = {
  name3: "dynamic object",
};
object.age = 12;
object.array = [1, 2, 3, 4, 5];
object.invite = function () {};

console.log(object);
delete object.name3;
delete object.array;
delete object.invite;
console.log(object);

//object with new and without new keyword
let name4 = "stringLiterls";
let number = 3; //numberLiterls
let isRain = true; //booleanLiterals
console.log(name4, number, isRain);

//with new key word
let name5 = new String("str");
console.log(name5);
