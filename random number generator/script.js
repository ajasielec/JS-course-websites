const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("result");

let min, max;
let randomNum; 

function getRandomInt(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

myButton.onclick = function(){
    min = document.getElementById("min").value;
    min = Number(min);
    max = document.getElementById("max").value;
    max = Number(max);
    if(min>max){
        myLabel.textContent = "Min must be lower than max!";
    }
    else{
    randomNum = getRandomInt(min, max);
    myLabel.textContent = randomNum;
    }
}