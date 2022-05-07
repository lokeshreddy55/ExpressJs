var a;
process.stdin.on("data",(data)=>{        
    a = data.toString();
    console.log(`my name is : `+a);         //can use inside this callback fn only
})
console.log(a);

//=========  waits on input, but remaining code is executed ahead  ==========
// var a = process.stdin.read();
// console.log(a);

////// command line args ////////////////
var a = process.argv;
console.log(`my name is : `+a[2]);