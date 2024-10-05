import {getCircumference, getArea} from './mathUtil.js';
//-------- GETTERS SETTERS ----------------//

// class Rectangle{

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a positive number")
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number")
//         }
//     }

//     get width(){
//         return this._width.toFixed(1);
//     }

//     get height(){
//         return this._height.toFixed(1);
//     }

//     get area(){
//         return (this._width * this._height).toFixed(1);
//     }
// }

// const rectangle = new Rectangle;

// rectangle.width = 5;
// rectangle.height = 6;


// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


//---------------DESTRUCTURING-----------------//
//SWAP THE VALUE
let a = 1;
let b = 2;
[a, b] = [b, a];

// SWAP 2 ELEMENT IN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]]

//ASSINGN ARRAY ELEMENTS TO VAR
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

//EXTRACT VALUES FROM OBJECTS
const person2 = {
    firstName: "DUpa",
    lastName: "Chuj",
    age: 25,
}

const {firstName, lastName, age, job="Unemployed"} = person2;

//DESTRUCT IN FUNCTION PARAMETERS
function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log("name: " + firstName + " " + lastName);
    console.log("age: " + age);
}


//--------Nested Objects---------//

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}


const fruits = [{name: "apple", color: "red", calories: "123"},
                {name: "zanana", color: "yellow", calories: "66"},
                {name: "orange", color: "orange", calories: "76"}];


// SORTING
const numbers = [1, 10, 2, 5, 7, 12, 9, 3];
numbers.sort((a,b) => a - b ); // or b - a
fruits.sort( (a, b) => a.calories - b.calories);
fruits.sort( (a, b) => a.name.localeCompare(b.name));

// FISHER-YATES ALGORITHM
function shuffle(array){
    for(let i= array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}

// CLOSURES - INNER FUNCTIONS
function outer(){

    let message = "Hello!";

    function inner(){
        console.log(message);
    }

    return {inner};
}

const game = new outer();
game.inner();

// SET TIMEOUT
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(()=> window.alert("Hello"), 3000);
}

function clearTimer(){
    clearTimeout(timeoutId);
}


//-----------CALLBACKS-------------//
function func1(callback){
    setTimeout(() => {console.log('Task 1');
                    callback()}, 3000);
}
function func2(){
    console.log('Task 2');
    console.log('Task 3');
    console.log('Task 4');
}

// func1(func2);

//-----ERRORS--------//
// try{
//     let x = 0;
//     if(x == 0){
//         throw new Error("message");
//     }
// }
// catch(error){
//     console.error(error);
// }


//----ELEMENT SELECTOR-----//
document.getElementById("myId");            //ELEMENT OR NULL
document.getElementsByClassName("buttons"); //HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4"); //HTML COLLECTION

// Array.from(liElements).forEach(h4Element =>
//     h4Element.style.color = "yellow"
// );

document.querySelector("h4");   // FIRST ELEMENT
document.querySelectorAll(".fruits");    //  NODE LIST, nie trzeba castowac na array


//------MODYFYING HTML--------//
// 1. CREATE AN  ELEMENT
const newH1 = document.createElement('h1');

// 2. ADD ATTRIBUTES
newH1.textContent = "Hello!";
newH1.id = "myH1";
newH1.style.color = "tomato";

// 3. APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
const divElement = document.querySelector("div");
document.body.insertBefore(newH1, divElement);


//-----------MOUSE EVENTS------------//
const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Cipek 🐈";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "No dawaj 😘";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "Click me 😊";
})

// keyboard
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>
{
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
        myBox.textContent = '🐈';
    }
});

document.addEventListener("keyup", event =>
    {
        myBox.textContent = '😊';
    });


// CLASS LIST - reusable classes, methods:
// element.classList.add("className");
// element.classList.remove("className");
// element.classList.toggle("className"); - removes if present, add if not
// element.classList.replace(oldClass, newClass);
// element.classList.remove("className");

