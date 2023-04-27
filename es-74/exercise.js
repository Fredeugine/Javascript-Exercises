function repeatHello(callback){
    setInterval(callback,1000)
}
function printHello(){
    return console.log('Hello')
}
repeatHello(printHello)