function randomNumber(isLogged){
    return new Promise(function (resolve,reject){
        if (isLogged){
            resolve(Math.floor(Math.random()* 4))
        }
        else reject(new Error('error'))
    })
}
function giveDate(number){
    return new Promise(function (resolve, reject){
        if (number > 0.5){
            resolve('{name: "John", age: 24}')
        }
        else reject(new Error('error'))
    })
}
const isLogged = true;
randomNumber(isLogged).then(function (result){
    return giveDate(result)
})
    .then(function (result){
        console.log(result)
    })
    .catch(function (result){
    console.log('Number is less than 0.5')
})


