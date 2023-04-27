function printAsyncName(name,callback1){
   setTimeout(callback1,1000)
    setTimeout(function (){
        console.log(name)
    },2000)
}
function printHello(){
    return console.log('hello')
}
printAsyncName('Manu',printHello)