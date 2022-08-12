//arrays
let employee = ["one", "two", "three"];
employee[4] = "four";
console.log(employee);
console.log(employee[2]);
console.info(employee[0]);
console.log(employee.length);
console.table(employee);

const bike = ["fz", "Honda", "TVS", "yamaha"];
const cars = ["BMW", "Hundai", "TATA", "Honda"];
let BikeCars = bike.concat(cars);
window.console.log(BikeCars);
let z = bike + cars;
console.log(z);

let x = "kamal";
let y = "nath";
let z1 = x.concat(y);
console.log(z1);

//object to array
const zoo = {
  animal1: "lion",
  animal2: "tiger",
  animal3: "fox",
};
// Object.keys(zoo);
// Object.values(zoo);
console.log(zoo);
let objecttoarray = Object.entries(zoo);
console.log(objecttoarray);

// filter() method
function canVote(age) {
  return age >= 18;
}
function func() {
  let filtered = [24, 33, 16, 40].filter(canVote);
  document.write("people eligible for voting ");
  document.write(filtered);
}
func();

let numb = [-87, 12, 1, 4, 0, 23];
let check = numb.filter(NumberCheck);
console.log(check);

function NumberCheck(number6) {
  return number6 > 0;
}

//map() function
let numb2 = [4, 8, 16, 25];
let k1 = numb2.map(Math.sqrt);
console.log(k1);

let numbs = [2, 3, 1, 12];
let k2 = numbs.map(numarr);
console.log(k2);
function numarr(tables) {
  return tables * 5;
}

let rate = [1500, 1221, 2131, 4744, 2134, 2452, 1234];
let newrate = rate.map(Math.sqrt);
console.log(newrate);

const array1 = [5, 2, 1, 10];
const map1 = array1.map((x) => x * 2);
console.log(map1);

//custom arrow function
const string = "Kamalnath";
const stringArr = string.split("");

let asciiArr = stringArr.map((x) => x.charCodeAt(0));
console.log(stringArr);
console.log(asciiArr);

//reduce() method
const numbers = [2, 3, 10];
let value = numbers.reduce(reducefunction);
function reducefunction(total, numm) {
  return total - numm;
}
console.info(value);

//for each in array
let text = "";
let color = ["red", "green", "yellow", "blue"];
let output = color.forEach(forFunction);
console.info(text);
function forFunction(item, index) {
  text = text + item;
}

function foreachloop() {
  const items = [65, 22, 12];
  const outputvalue = [];

  items.forEach(function (item) {
    outputvalue.push(item * 5);
  });
  console.log(outputvalue);
}
foreachloop();

//Array Constructor method
const ConstVar = ["hen", "pig", "cow", "cat"];
let Constoutput = ConstVar.constructor;
console.log(Constoutput);
//copywithin method
let outp = ConstVar.copyWithin(1, 2);
console.info(outp);

//isarray() method
const CheckArray = ["cat", "dog", "lion", "cow"];
let output2 = Array.isArray(CheckArray);
console.log(output2);

let CheckString = "sdudug";
let output3 = Array.isArray(CheckString);
console.info(output3);

//converting object to  array and checking isarray method
let Alphabetic = {
  one: "aaa",
  two: "bbb",
  three: "ccc",
  four: "ddd",
};
Object.keys(Alphabetic);
Object.values(Alphabetic);
let output4 = Object.entries(Alphabetic);
console.log(output4);
let output5 = Array.isArray(output4);
console.info(output5);

let CheckNum = [1, 3, 5];
let output6 = Array.isArray(CheckNum);
console.log(output6);

//array length
let length = output4.length;
console.log(length);
console.info(CheckNum.length);

//array indexof() method

let banu = ["aaa", "bbb", "ccc", "bbb", "dddd"];
let index = banu.indexOf("ccc");
console.log(index);
console.log(banu.lastIndexOf("bbb"));

//push pop shift unshhift
const people = ["aravind", "hema", "hari", "vinoth"];
console.log(people);
people.push("bala", "vishnu");
console.log(people);
people.pop();
console.log(people);
people.unshift("karan");
console.log(people);
people.shift();
console.log(people);

//pop more then 2 elements
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

removeItems(numbers1, 2);
console.log(numbers1);
