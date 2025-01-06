console.log("number 1");
setTimeout(()=>console.log("number 2"));
setTimeout(()=>console.log("number 3"));
process.nextTick(()=>console.log("number 4"));
console.log("number 5");

//output 1,5,4,2,3
