let correctLetterLength = 0;
const answers = ['arsenal', 'chelsea', 'tottenham', 'liverpool', 'everton']

let generateRandom = answers[Math.floor(Math.random()*answers.length)];
console.log("Word is: " + generateRandom);
generateRandom = generateRandom.toUpperCase();
let generateRandomLength = generateRandom.length;
console.log("length is: " + generateRandomLength)


for(let i = 0; i < generateRandomLength; i++){
    document.getElementById("generateRandom").innerHTML =+ "<span class='letters' id='l"+i+"'></span>"
}

function checkLetter(letter){
    console.log(letter);
    if(generateRandom.includes(letter)){
        for(let e = 0; e < generateRandom.length; e++){
            if(generateRandom[e] == letter){
                document.getElementById(letter).classList.add('clicked');
                correctLetterLength = correctLetterLength +1;
                if(correctLetterLength == generateRandom.length){
                    document.getElementById("win").innerHTML = generateRandom;
                    document.getElementById("winnerMessage").style.display="block";
                }
            }
        }
    }else{
        let remLives = parseInt(document.getElementById("lives").innerHTML)
    }
}

// const question = document.querySelector('.question');
// const display = document.querySelector('.display');
// const hintDisplay = document.querySelector('.hintDisplay')
// const lives = document.querySelector('.lives');
// const keyboard = document.querySelector('.keyboard');
// const reset = document.querySelector('.reset');
// const hintBtn = document,querySelector('.hintBtn')
// const words = [
//     ['chelsea', 'they wear blue']
//     ['tottenham', 'they wear white']
//     ['liverpool', 'they wear red']
//     ['man city', 'they wear sky blue']
// ]
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
// let remLives;

// function startGame(){

// }

// function letterClick(){


// }

// function displayLetter(){

// }

// function hintClick(){

// }

// function resetClick(){

// }

// function win(){
    
// }