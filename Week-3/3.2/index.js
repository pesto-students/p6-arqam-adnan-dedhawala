const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  nameAddress: function (address) {
    return this.firstName + " " + this.lastName + " Address: " + address;
  }
};

const member = {
  firstName: "Mohan",
  lastName: "Hegde"
};

const newMember = {
  firstName: "Ady",
  lastName: "Saxena"
};

let memberArr = Object.values(member);

let bindFullName = person.fullName.bind(member);
console.log("bind 1", bindFullName());

bindFullName = bindFullName.bind(newMember);
console.log("bind 2", bindFullName());

console.log("call 1", person.fullName.call(member));
console.log("call 2", person.fullName.call(newMember));

console.log("apply 1", person.nameAddress.apply(newMember, ["Mumbai"]));
