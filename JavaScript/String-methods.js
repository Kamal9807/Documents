//String methods
///string length
let str1 =
  "But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.";
let output = str1.length;
console.log(output);
///slice method
let str2 = "once up a time there lived a ghost";
hello = str2.slice(29);
hello2 = str2.slice(5, 20);
hello3 = str2.slice(-12, -8);
console.log(hello);
console.log(hello2);
console.log(hello3);

//sub string
sub1 = str2.substring(29);
console.log(sub1);
let str3 = str2.toUpperCase();
console.log(str3);
let str4 = str2.toLocaleUpperCase();
console.log(str4);
let str5 = str4.toLocaleLowerCase();
console.log(str5);

//concat
let per1 = "kamal";
let per2 = "nath";
let result = per1.concat(per2);
console.log(result); //trim
let per3 = "    Kamal     ";
let per4 = per3.trim();
console.log(per4);
//padding
let per5 = "kamal";
let per6 = per5.padEnd(9, "nath");
console.log(per6);
//number to string
let per7 = 123;
let per8 = per7.toString();
let per9 = per8.padStart(5, "temple");
console.log(per9);
//charAt
console.log(per5.charAt(3));
//split
console.log(per5.split(" "));

//indexof() method
let people = "Life is a continuous adventure. Those experiences and beautiful ";
let resul = people.indexOf("continuous");
console.log(resul);

let text = "Hello world, welcome to the universe.";
let result2 = text.indexOf("Welcome");
let result3 = text.indexOf("e");
let result4 = text.indexOf("H");
let result5 = text.indexOf("e", 5);
console.log(result5);
console.log(result4);
console.log(result3);
console.log(result2);
