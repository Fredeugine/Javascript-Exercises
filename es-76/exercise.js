
function checkIfGreaterThan15(num) {
    return new Promise(function (resolve, reject) {
        if (num > 10) {
            resolve(num)
        } else reject(num)
    });
}



const number = 15;
checkIfGreaterThan15(number).then(function (numbers){
    console.log(numbers + ' is greater than 10')
}).catch(function (data){
    console.error(data + ' is less than or equal to 10')
})