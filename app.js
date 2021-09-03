//Conditional statements
const a=0
if(typeof a==='number' && a!=0){
    if(a%2===0)//use 3 =
    {
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
else if(a===0){
    console.log("Neither even nor odd")
}
else{
    console.log("Not a number")
}