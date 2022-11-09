var Person = function () {};
Person.prototype.initialize = (name, age) => {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};

Teacher.prototype.teach = subject => {
  console.log(this.name + " is now teaching " + subject);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

let him = new Teacher();
him.initialize("Radhe", 32);
him.teach("Psychology");
