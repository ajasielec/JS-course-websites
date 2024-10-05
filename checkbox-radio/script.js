// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElemnt = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);

//     if (age >= 18){
//         resultElemnt.textContent = "You're old enough to enter this site.";
//     }
//     else if(age <= 0){
//         resultElemnt.textContent = "Your age can't be 0 or below."
//     }
//     else{
//         resultElemnt.textContent = "You must be 18+ to enter this site.";
//     }

// }

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const kotGif = document.getElementById('kotGif');
const konGif = document.getElementById('konGif');

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are subscribed';
    }
    else{
        subResult.textContent = 'You are NOT subscribed';
    }

    kotGif.style.display = 'none';
    konGif.style.display = 'none';

    if(visaBtn.checked){
        paymentResult.textContent = 'You are paying with Visa';
        kotGif.style.display = 'block';
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = 'You are paying with MasterCard';
        konGif.style.display = 'block';
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = 'You are paying with PayPal';
    }
    else{
        paymentResult.textContent = 'You must selected a payment type';
    }
}
