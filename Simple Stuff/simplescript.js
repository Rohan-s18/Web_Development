//Printing the date
function dateFunction(){
    document.getElementById("demo").innerHTML = Date();
    alert("You clicked the button!");
}

//Randomizing the color of the page
function randomizeColor(){
    const bgColors = new Array("white","black","red","blue","darkblue");
    var x = Math.floor(Math.random()*5);
    document.getElementById("myBody").style.backgroundColor = bgColors[x];
}

//Clears the document and writes down Hello World!
function docWrite(){
    document.write("Hello World!");
}

//Tries to print the html document
function docPrint(){
    window.print();
}
