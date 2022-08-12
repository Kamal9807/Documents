//JS Async
/** function call back */
let funVar = "first function";
function firstFun() {
  console.log(funVar);
}
function secondFun() {
  console.log("Second function");
}
firstFun();
secondFun();

function sum3(a, b, c) {
  return a + b + c;
}
/** calling sum function */
let res = sum3.call(this, 5, 13, 1);
console.log(res);
/** calling syntax:
 * func.call(thisArg, arg1, ... argN) */

let sub = (a, b) => {
  return a - b;
};
let result3 = sub(12, 7);
console.log("function without call method :", +result3);
let result4 = sub.call(this, 12, 7);
console.log("function with call method :", result4);

/**passing object as this value in call() */
/**creating object */
const human = {
  firsName: "Jhon",
  lastName: "Son",
  age: 23,
};
/**defining function */
let greet = () => {
  const string =
    "my name is  " +
    human.firsName +
    " " +
    human.lastName +
    "I am " +
    human.age;
  console.log(string);
};
greet.call(human);

/**synchronous */
console.log("hi");
console.log("how r u");
console.log("am fine");

/** Asynchronous:
 * Functions running in parallel with other functions are called asynchronous */
console.log("this");
console.log("is");
setTimeout(() => {
  console.log("asynchronous method");
}, 2000);
console.log("it will show after this");

/**promises:
 * "Producing code" is code that can take some time
 * "Consuming code" is code that must wait for the result
 * A Promise is a JavaScript object that links producing code and consuming code
 */
program = (run) => {
  console.log(run);
};
let mypromise = new Promise(function (myresolve, myreject) {
  let x = 0;
  if (x !== 0) {
    myresolve("ok");
  } else {
    myreject("error");
  }
});
mypromise.then(
  function (value) {
    program(value);
  },
  function (error) {
    program(error);
  }
);

//setTimeout syntax: setTimeout(() => {}, 3000);
const studentGrade = new Promise((resolve, reject) => {
  setTimeout(() => {
    let passGrade = true;
    if (passGrade) {
      resolve("student pass");
    } else {
      reject("student fail");
    }
  }, 4000);
});
const studentClass = new Promise((resolve, reject) => {
  let stuClass = true;
  if (stuClass) {
    resolve("first class");
  } else {
    reject("second class");
  }
});
const studentRemark = new Promise((resolve, reject) => {
  let Remark = true;
  if (Remark) {
    resolve("excellent keep it up");
  } else {
    reject("try to get more marks");
  }
});
Promise.all([studentGrade, studentClass, studentRemark]).then(
  function (value) {
    program(value);
  },
  function (error) {
    program(error);
  }
);

const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
});
weather
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
