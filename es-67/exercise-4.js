function sum(...spread) {
  return spread.reduce(function (a,b){
    return a + b;
  });
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));