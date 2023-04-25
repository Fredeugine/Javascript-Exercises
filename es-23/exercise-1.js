const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
const newFormat = Object.keys(person);
newFormat.forEach(function (value){
  console.log(value + '/' + person[value])
})

// Print values of person using Object.keys