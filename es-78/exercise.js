function randomNumber(isLogged) {
    return new Promise(function(resolve, reject) {
        if (isLogged) {
            resolve(Math.floor(Math.random() * 4));
        } else {
            reject(new Error('isLogged is false'));
        }
    });
}

function giveDate(number) {
    return new Promise(function(resolve, reject) {
        if (number > 0.5) {
            resolve({ name: 'John', age: 24 });
        } else {
            reject(new Error('Number is less than or equal to 0.5'));
        }
    });
}

const isLogged = true;

randomNumber(isLogged)
    .then(function(result) {
        return giveDate(result);
    })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error.message);
    })
    .finally(function() {
        console.log('Promise settled');
    });

