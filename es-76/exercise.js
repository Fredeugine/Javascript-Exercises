const number = 15;

function checkIfGreaterThan15(number) {
    return new Promise(function (resolve, reject) {
        if (number > 10) {
            resolve(number)
        } else reject(number)
    });
}


function results(number) {
    checkIfGreaterThan15(number).then(greaterThan10).catch(lessThan10)
}
function greaterThan10(data) {
    console.log(data + ' is greater than 10')
}

function lessThan10(data) {
    console.error(data + ' is less than or equal to 10')
}
results(number)