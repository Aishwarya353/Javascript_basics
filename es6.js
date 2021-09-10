console.log("ES6 Destructureing")
 arr=[1,2,3,4];
console.log(arr[2]);

var [one,two,three]=[arr]; //ES6 Destructuring
//one=1;two=2;three=3;4 can't be accessed
var [one,two,three,four,five]=[arr];
console.log(three);//3
console.log(five);//undefined


function getscore(){
return [90,100];
}

let [x,y,z] = getscores();

console.log(x);//90
console.log(y);//100
console.log(z);//undefined

//it can be let,const,var

//all this stuffs are used when we connect it to api's



//object destructuring

const obj={
fullname:"Aishwarya",
email:"aishwaryav353@gmail.com",
age:20,
}

console.log(obj.email)//aishwaryav353@gmail.com
let {fullname,email,age,number} = obj;
console.log(email);//aishwaryav353@gmail.com
console.log(number)//undefined

//if its modified as below
let {fullname1,age1,email1,number} = obj;
console.log(email1);//undefined
console.log(fullname1)//undefined


//if its let {fullname,age,email,number} = obj;
console.log(email);//aishwaryav353@gmail.com

//Conclusion is that object variable name should be same in { }

let person={
firstname:"Aishwarya",
lastname="V",
age1=20,
}
let{age1,firstname,lastname,middlename=" "}=person;
console.log(age1);//20
console.log(firstname);//Aishwarya
console.log(lastname);//V
console.log(middlename);// 
//space is printed instead of undefined in "middlename" as we have set default 
//default is printed if its value is not there

//Arrow functions
//conventional

function add(x,y){
return x+y
}

let add=function(x,y){
return x+y;
}
console.log(add(10,20))

//Arrow function method

let add=(x,y)=>x+y;
console.log(add(10,20))

//"function" keyword is not required
//return is not required in this method

const counter = {
count:2,
manipulate:function() {
return (this.count)*100;
return ++(this.count);
},
key:this // refers the whole window so not preferred
}
console.log(counter.manipulate());//1
console.log(counter.manipulate());//2
//console.log(counter.manipulate());//200

//"this" executes currently running object
//above is same as 
console.log(counter);

//this works fine inside object
//outside object also it is valid but not used
//manipulate is not a keyword we can use anything over there
//"this" can't be used in arrow fuunction
//if u use this in arrow function ull get "nan" error
//Successfully completed.