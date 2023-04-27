function printAsyncName(callback1,name){
   setTimeout(callback1,1000)
    setTimeout(function (){
        console.log(name)
    },2000)
}
function printHello(){
    return console.log('hello')
}
printAsyncName(printHello,'Manu')