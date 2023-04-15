class Person {
 constructor(firstName,lastName,age) {
     this.firstName = firstName
     this.lastName = lastName
     this.age = age
 }
    set loot(firstname){
        return  this.firstName = firstname
    }
    get loot(){
        return this.firstName
    }
    set beet(lastname){
        return this.lastName = lastname
    }
    get beet(){
        return this.lastName
    }
    set drool(age){
        return age = this.age
    }
    get drool(){
        return this.age
    }
    get fullName(){
     return this.firstName + ' ' + this.lastName
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.loot = 'Maria';
person.beet = 'Verdi';
console.log(person.fullName);