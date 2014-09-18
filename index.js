var Person = function(interest) {
  this.interest = interest;
};

var person = new Person();
person.interest = "running and";
person.interest2 = "climbing";
console.log('%s %s', person.interest, person.interest2);