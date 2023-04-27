function repeatHello(callback){
    callBackInterval = setInterval(function (){
        callback()
        setTimeout(function (){
            clearInterval(callBackInterval)
        },5000)
    },1000)


}
function printHello(){
    return console.log('Hello')
}
repeatHello(printHello)