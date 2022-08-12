//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}

// for loop another method
let i = 0;
for (; i <= 10; ) {
  i++;
  console.count("numbers", i);
}

//while loop
let j = 0;
while (j <= 5) {
  j++;
  console.log("numbers", j);
}

//for-in loop
const employee = {
  id: 21,
  name: "hari",
  salary: 20000,
}; // object
console.log(employee.id);

for (let output in employee) {
  console.table(output + ":", employee[output]);
}
for (let key in employee) {
  console.log(key);
  console.log(employee[key]);
}

//for-in using array
const color = ["green", "orange", "blue", "red"];
for (let out in color) {
  console.log(out + ":", color[out]);
}

//for-of loop
let forOfvar = ["insert", "delete", "enter", "shift"];
for (let outp of forOfvar) {
  console.log(outp);
}

// for loop
let n = 5;
for (let i = 0; i <= n; i++) {
  document.write("wonderful");
  break;
  document.write(i);
}

let sum = 0;
const k = 5;
for (let i = k; i >= 1; i--) {
  sum += i;
}
console.log(sum);

const cars = ["bmw", "volvo", "saab", "ford"];
console.log("array length :", cars.length);
let text = "";
for (let h = 0; h < cars.length; h++) {
  text += cars[h];
}
console.log(text);

let txttext = "";
for (let i = 0; i < 5; i++) {
  txttext += i;
}
console.log(txttext);
