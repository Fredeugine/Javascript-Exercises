// Class definition
function Person (firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
