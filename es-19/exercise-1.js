const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = 'Michael'

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
//The reason why, when person2 is modified it gets reflected in the person1 object is because person2 is a reference to person 1.
//They are essentially the same.