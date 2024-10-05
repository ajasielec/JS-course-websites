// RANDOM PASSWORD GENERATOR

function generatePassword(){
    const length = Number(document.getElementById("textBox").value);
    const includeLowercase = document.getElementById("includeLowercase");
    const includeUpppercase = document.getElementById("includeUpppercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const result = document.getElementById("result");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase.checked ? lowercaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked ? numberChars : "";
    allowedChars += includeSymbols.checked ? symbolChars : "";

    if(length <= 0){
        result.textContent = `(password length must be at least 1)`;
    }
    else if(allowedChars.length === 0){
        result.textContent = `(At least 1 set of character needs to be selected)`;
    }
    else{
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        result.textContent = `${password}`;
    }
}
