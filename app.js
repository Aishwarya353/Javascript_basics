//ECMA script is just the standard on which javascript is based on.
//ES-6 latest version of ECMA script



//ES-6 functions
/*console.log(add(12,23))
const add=(a=0,b=0)=>{
    return a+b
}
console.log(add(12,23))*/
//in above syntax for 1st console ull get a error as it can"t be hoisted.



/*console.log(add(12,23))
const add=(a=0,b=0)=>{
    return a+b
}*/
//In this syntax we'll get 35 because it can be hoisted.

//But => this one is preferred because it doesn't break the flow and makes debugging easy.
//commit as ES-6 function


// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')
// //action is just a parameter that does nothing an empty parameter.
// const handler=(action)=>{
//     console.log("You clicked "+action)
// }
// //rock.addEventListener('click',handler('rock'))
// //paper.addEventListener('click',handler('paper'))
// //scissor.addEventListener('click',handler('scissor'))
// //above 3 is just a function call so we rephrased the code as below.

// rock.addEventListener('click',() => {
//     handler('rock')
// })
// paper.addEventListener('click',() => {
//     handler('paper')
// })
// scissor.addEventListener('click',() => {
//     handler('scissor')
// })
// //now it responds as per our click on rock,paper,scissor
// const handler=(event)=>{
//     const action=event.taget.id
//     if(action==='rock'){
//         console.log("Rock crushes scissors")
//     }
//     else if(action==='paper'){
//         console.log("Paper trabs rock")
//     }else if(action==='scissor'){
//         console.log("Scissor cuts paper")
//     }else{
//         console.log("Click on something ")
//     }
// }
// rock.addEventListener('click',handler)
// paper.addEventListener('click',handler)
// scissor.addEventListener('click',handler)


const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector("#board")


const handler = (e) => {
    const action = e.target.id

    switch (action) {
        case "rock":
            board.innerHTML = "Rock crushes scissors"
            break
        case 'paper':
            board.innerHTML = "Paper traps Rock"
            break
        case 'scissor':
            board.innerHTML = "Scissor cuts paper"
            break
        default:
            board.innerHTML = "Click something"
    }

}



rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)