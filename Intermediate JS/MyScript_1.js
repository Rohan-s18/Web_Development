function clicked(){
    document.getElementById("demo").innerHTML = "Psych!";
}

function piracyMessage(){
    //Note: document.write() deletes all other existing HTML stuff.
    document.write("You don't belong here!");
}

function nerdAlert(){
    //Note: this is a popup
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