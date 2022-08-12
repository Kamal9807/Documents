var msg = "hello this is javascript code";
var name = "kamal";
console.info(msg);
console.clear(msg);

var message = "hello this " + message + " done by";
alert("Welcome");
let x = 4;
let y = 2;
let z = x * y;
document.write(z);
console.error(message);

//function
function helicopter(code) {
  //set of statement
  var message = "hello this " + code + " done by";
  console.log(message);
}
helicopter("tell");

function add(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
add(23, 52);

//function another method frequently used
let add2 = function (num3, num4) {
  return num3 + num4;
};
let sum = add2(6, 3);
console.log(sum);

//console.table
a = 24;
b = 45;
console.table(a, b);

// console.time() and console.timeEnd() method
console.time("time");
let funtime1 = function () {
  console.log("time function");
};
let funtime2 = function () {
  console.log("time function 2");
};
funtime1(); // calling function 1
funtime2(); // calling function 2
console.timeEnd("time");

//console warning
console.warn("This is warning  message");

//spread operators

const employee = ["ramu", "jagan", "kathir", "krishna"];
const staff = ["lokesh", "vijay"];
let spread = [...employee, ...staff];
console.log(spread);

//function without parameters
let addition = function () {
  console.log(arguments);
  let total1 = 0;
  for (let i = 0; i < arguments.length; i++) {
    total1 += arguments[i];
  }
  return total1;
};
let total = addition(2, 2, 2, 2);
console.log(total);

//arrow function
hello1 = function () {
  return "welcome to js arrow function";
};
console.info(hello1);

hello2 = () => {
  return "kamal";
};
console.log(hello2);

//Constructor Functions
let Car = function (color) {
  this.carColor = color;
  console.log(this.carColor);
};

//arrow function without a return type
hello3 = () => "welcome to js";
console.log(hello3);

//arrow function with parameter
let hello4 = (val) => "Good" + val;
let result = hello4("Morning");
console.log(result);

let hello5 = (number, details) => "Employee " + number + " " + details;
let result2 = hello5(5, "aaaaa");
console.log(result2);

//set timeout method
let varSet = setTimeout(greetFunction, 5000);
function greetFunction() {
  console.info("Hello world!"); //the output shows very slowly
}

//set interval with function
/** 
setInterval(funParameter, 1000);
function funParameter() {
  console.log("hello World!");
}

let count = 0;
let intervalId = (setInterval =
  (function (name) {
    count++;
    if (count > 10) {
      clearInterval(intervalId);
    }
    console.log(count);
  },
  1000,
  "kamal")); 

let count = 0;
const intervaId = setInterval(
  function (name) {
    count++;
    if (count > 10) {
      clearInterval(intervaId);
    }
    console.log(intervaId);
  },
  1000,
  "gopi"
); **/
