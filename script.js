let correctLetterLength = 0;
const answers = ['arsenal', 'chelsea', 'tottenham', 'liverpool', 'everton', 'wolverhampton', 'ajax', 'bayern']

let generateRandom = answers[Math.floor(Math.random()*answers.length)];
console.log("Word is: " + generateRandom);
generateRandom = generateRandom.toUpperCase();
let generateRandomLength = generateRandom.length;
console.log("total letters: " + generateRandomLength)
// console.log(generateRandomLength)

let answerLetters = document.getElementsByClassName("answerLetters")[0]
for(let i = 0; i < generateRandomLength; i++){
//    step 1 create a new div
    let dottedLine = document.createElement("div");
    // step 2 add class of slot to div
    dottedLine.classList.add("slot");
// appendChild the div to the container
    answerLetters.appendChild(dottedLine);
}

function checkLetter(letter){
    console.log(letter);
    if(generateRandom.includes(letter)){
        console.log('correct guess!')
        // for(let e = 0; e < generateRandom.length; e++){
        //     if(generateRandom[e] == letter){
        //         document.getElementById(letter).classList.add('clicked');
        //         correctLetterLength = correctLetterLength +1;
        //         if(correctLetterLength == generateRandom.length){
        //             document.getElementById("win").innerHTML = generateRandom;
        //             document.getElementById("winnerMessage").style.display="block";
        //         }
        //     }
        // }
    } else {
        console.log('wrong guess!')
    }
}

// function startGame()