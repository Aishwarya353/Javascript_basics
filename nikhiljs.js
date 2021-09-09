//map creates a new array
//foreach does not create an array
console.log("MERGED CLASS 2 ES6");

let ranks1 = [1, 2, 3];

console.log(
  ranks1.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks1.forEach((e, index) => {
    return e * 100;
  })
);

let newarr = ranks1.map((e, index) => {
    if(e%2===0)
        return e //returns undefined for odd numbers
});
console.log(newarr);


//filter

console.log("MERGED CLASS 2 ES6");

let ranks2 = [1, 2, 3];

console.log(
  ranks2.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks2.forEach((e, index) => {
    return e * 100;
  })
);

let newfilterarr = ranks2.filter((e, index) => {
    console.group(e)
    if(e%2===0)
        return e; //returns only even numbers
})
console.log(newfilterarr);



//Promise is an object

let consert = true;
let attendConcert = new Promise(function(resolve,reject){
    setTimeout(() => 
    {
        if(consert){
                resolve("Bob attended the concert");//this is also a function passed as parameter in above functon
        } 
        else{
            reject("Bob did not attended the concert");
        }
        
    }, 2000);
});
console.log(attendConcert)

//settimeout is to make the program to get executed in 2 sec
//first it will print pending, After 2sec(if expanded afr 2sec) u'll get fullfilled as consert==true
//2000ms = 2sec
//we an use promise without settime also.
//its just to understand how asynchronous tasks are done in realtime applications


//Then and Catch
//Then is to schedule a call back function

attendConcert.then((data) => console.log(data)).catch((error) => console.log(error));//max time it takes resolve only into account

//then is executed only after 2 sec

//attendConcert.catch((error) => console.log(error));//always takes reject state only into account

//using then without catch is a blender as false condition is unhandled

console.log("Hello participants");//printed first then the "then" statements

//this is used mainly white connected the frontend to api's

