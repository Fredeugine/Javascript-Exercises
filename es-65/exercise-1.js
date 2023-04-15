function sum(...rest) {
    return rest.reduce(function (a,b){
       return a + b
    });
}

console.log(sum(1, 2, 3, 4, 5));