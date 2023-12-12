//Nathaniel Kohtz
//Period 1
//Date Dec 15 2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

    var background = document.createElement("div");
    var tree1 = document.createElement("div");
    var tree2 = document.createElement("div");
    var tree3 = document.createElement("div");
    var trunk = document.createElement("div");
    var lights = document.createElement("div");
    var moon = document.createElement("div");
    var text = document.createElement("div");

background.style.width = "98%";
background.style.height = "800px";
background.style.backgroundColor = "#313633";
background.style.padding = "5px";

trunk.style.width = "0px";
trunk.style.height = "0px";
trunk.style.border = "solid 20px";
trunk.style.borderColor = "brown";
trunk.style.margin = "0 auto";
trunk.style.position = "relative";
trunk.style.top = "0";


text.innerHTML = "Merry Christmas"
text.style.backgroundColor = "black";
text.style.color = "white"; 
text.style.textAlign = "center";
text.style.fontSize = "3em";
text.style.fontFamily = "cursive";

tree1.style.width = "0px";
tree1.style.height = "0px";
tree1.style.border = "transparent solid 50px";
tree1.style.borderBottomColor = "green";
tree1.style.borderBottomWidth = "200px";
tree1.style.margin = "0 auto";
tree1.style.position = "relative";
tree1.style.top = "5px";

tree2.style.width = "0px";
tree2.style.height = "0px";
tree2.style.border = "transparent solid 50px";
tree2.style.borderBottomColor = "green";
tree2.style.borderBottomWidth = "200px";
tree2.style.margin = "0 auto";
tree2.style.position = "relative";
tree2.style.top = "-200px";

tree3.style.width = "0px";
tree3.style.height = "0px";
tree3.style.border = "transparent solid 50px";
tree3.style.borderBottomColor = "green";
tree3.style.borderBottomWidth = "200px";
tree3.style.margin = "0 auto";
tree3.style.position = "relative";
tree3.style.top = "-400px";


// lights.style.width = "15px";
// lights.style.height = "15px";
// lights.style.border = "solid 15px";
// lights.style.borderColor = "red";



    document.body.append(background); 
    background.append(text); 
    background.append(tree1); 
    background.append(tree2); 
    background.append(tree3);
    background.append(trunk); 
    background.append(lights); 
    background.append(moon);  