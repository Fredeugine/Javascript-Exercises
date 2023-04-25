function printName(){
    let helloName = "Hello John";
    function inner(){
        return helloName
    }
    return inner

}
setTimeout(function (){
    return console.log(printName()())
},1000)

