//class
class hello {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let mydetail = new hello("kamal", 10);
let ans = mydetail.name;
let ans1 = mydetail.age;
console.log(ans);
console.log(ans1);

class person {
  constructor(name1) {
    this.name = name1;
  }
}
let parent1 = new person("kishore"); //object1
let parent2 = new person("james"); //object2
console.log(parent1.name);
console.log(parent2.name);

// class with a method
class person2 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.info("hello this is method");
  }
}
let personObject = new person2("hema");
console.log(personObject);
personObject.greet();

class person3 {
  constructor(num1, num2, num3) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4;
  }
  method() {
    let sum = this.num1 + this.num2 + this.num3;
    console.log(sum);
  }
}
let person3Object = new person3(3, 4, 8);
let anotherObject = new person3(5, 3, 1);
console.log(person3Object);
console.log(anotherObject);
person3Object.method();
anotherObject.method();
console.info(person3Object.num1);

//class with many constructor;
/*class employee {
  constructor(rollnumber, name, address) {
    this.rollnumber = rollnumber;
    this.name = name;
    this.address = address;
  }
  constructor(contact, age){
    this.contact = contact;
    this.age = age;
  }
  constructor(){
    this.phno;
  }
}
let object = new employee("aaa", 12);
let object3 = new employee(1, "hari", "yyy");
console.log(object);
console.log(object3); // this program shows UnCaught syntax error */

// class extend keyword
class book {
  constructor(brand, number) {
    this.name = brand;
    this.number = number;
  }
  method() {
    return "my work is" + this.name;
  }
}
class book2 extends book {
  constructor(brand, author) {
    super(brand);
    this.author = author;
  }
  release() {
    return "book will be release soon " + this.author;
  }
}
let object4 = new book2("hero", "aaaa");
let methodcall = object4.release();
console.log(methodcall);
console.log(object4);
