//This script is just a basic intro script for different things in JavaScript

function clicked(){
    //Changing the text inside the html object wioth the id "demo"

    document.getElementById("demo").innerHTML = "Psych!";

}

function piracyMessage(){
    //Note: document.write() deletes all other existing HTML stuff.

    document.write("You don't belong here!");

}

function nerdAlert(){
    //Note: this is a popup style message

    window.alert("You are in danger!");

}

function consoleDebug(){
    //Note: Check the output using tjhe console of developer tools

    let x = 5;
    let y = 6;

    console.log(x+y);

    console.log("\n");

    var w = 5;
    var v = 6;

    console.log(w+v);
}

//Printing the typeof of different data typoes in the browser console
function dataTypes(){

    const pi = 3.14159;
    var obj = {name:"Rohan Singh", age : 17, favConstant : pi};

    console.log(typeof(obj));
    console.log(typeof(obj.name));
    console.log(typeof(obj.age));
    console.log(typeof(obj.favConstant));

}

//Traversing through an array and writinng the output in an unordered list
function printArray(){
    //Creating the array
    const carList = ["BMW","Mercedes-Benz","Volkswagen","Audi","Porsche"];

    var text = "Here's a list of my favorite cars: <br>";

    //Adding the list item into the text variable
    for(let i = 0; i < carList.length; i++){
        text += "<li>" + carList[i] + "</li>";
        
    }

    //Debugging
    //console.log(text);

    //Writing the html text into the list section
    document.getElementById("Some List").innerHTML = text;

}

//Creating a function with parameters and using a return statement
function changeTemperature(fahrenheit){

    let cel = (5/9) * (fahrenheit - 32);

    return cel;
}

//Using a function within a different function
//Printing the first 100 degress fahrenheit in celsius
function displayTemp(){
    
    //Initializing a temporary storage variable
    let temp = 0;

    console.log("Fahrenheit : Celsius");

    //Traversing through an array
    for(let i = 0; i <= 100; i++){
        temp = changeTemperature(i);

        //Printing the 2 variables into the console
        console.log(i, temp);
    }

}