// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){

    guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
    
    if(guess === null){
        window.alert("Game canceled. Goodbye!");
        break;
    }

    guess = Number(guess);
    

    if (isNaN(guess) || (guess < minNum || guess > maxNum)){
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if (guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}
