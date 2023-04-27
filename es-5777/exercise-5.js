function sortPeopleByAge(arr) {
  arr.sort(function (a,arrElement){
      return a.age - arrElement.age
  })
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name)
  }
}

const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const sortingByAge = sortPeopleByAge(people)
console.log(sortingByAge)