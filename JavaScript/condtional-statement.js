//if class
let climate = "hot";
if (climate === "hot") {
  console.log("climate is hot");
} else {
  console.log("climate is cool");
}

let isRaining = false;
let isCloudy = true;
if (isRaining || isCloudy) {
  console.log("it will be rain today");
} else {
  console.log("climate is normal");
}

let age = 19;
if (age > 15) {
  document.write("adult");
} else {
  document.write("child");
}

//if else statement
let mark = 99;
if (mark >= 0 && mark <= 34) {
  console.log("failed");
} else if (mark >= 35 && mark <= 70) {
  console.log("Average");
} else if (mark > 70 && mark <= 100) {
  console.log("first class");
} else {
  console.log("Invalid");
}

// Switch class
let grade = "C";
switch (grade) {
  case "S":
    console.log("Excellent grade");
    break;
  case "A":
    console.log("Good grade");
    break;
  case "B":
  case "C":
    console.log("Average");
    break;
  case "E":
    console.log("just pass");
    break;
  case "U":
    console.log("failed");
}

let marks = 40;
switch (true) {
  case marks > 50:
    console.log("pass");
    break;
  case marks < 50:
    console.log("fail");
    break;
  default:
    console.log("unknown");
}
