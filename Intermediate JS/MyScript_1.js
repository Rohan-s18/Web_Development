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
    //Check the output using developer tools

    let x = 5;
    let y = 6;

    console.log(x+y);

    console.log("\n");

    var w = 5;
    var v = 6;

    console.log(w+v);
}

function dataTypes(){
    //Printing the typeof of different data typoes in the browser console

    const pi = 3.14159;
    var obj = {name:"Rohan Singh", age : 17, favConstant : pi};

    console.log(typeof(obj));
    console.log(typeof(obj.name));
    console.log(typeof(obj.age));
    console.log(typeof(obj.favConstant));

}