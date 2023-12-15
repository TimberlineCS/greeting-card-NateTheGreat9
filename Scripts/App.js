//Nathaniel Kohtz
//Period 1
//Date Dec 15 2023

/*Provide a description about what this program does here*/

// creates a black background with a tree with ornimants on it, with Merry Christmas
//text at the top, with a moon gif and a song.
//to see this file, go to a browser tab and open the index file.

//some proplems I ran into was getting the relitive posising to line up corretly, and getting the 
//image to load properly, and getting things to properly appear on the screen. 

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

    var background = document.createElement("div"); //creeates the elements on the greeting card
    var tree1 = document.createElement("div");
    var tree2 = document.createElement("div");
    var tree3 = document.createElement("div");
    var tree4 = document.createElement("div");
    var tree5 = document.createElement("div")
    var trunk = document.createElement("div");
    var light1 = document.createElement("div");
    var light2 = document.createElement("div");
    var light3 = document.createElement("div");
    var light4 = document.createElement("div");
    var moon = document.createElement("img");
    var text = document.createElement("div");

 

background.style.width = "99%";//creates the background
background.style.height = "800px";
background.style.backgroundColor = "#000000";
background.style.padding = "5px";


text.innerHTML = "Merry Christmas"//creates the text
text.style.backgroundColor = "black";
text.style.color = "white"; 
text.style.textAlign = "center";
text.style.fontSize = "3em";
text.style.fontFamily = "Times New Roman";

tree1.style.width = "0px"; //creates the parts of the tree
tree1.style.height = "0px";
tree1.style.border = "transparent solid 50px";
tree1.style.borderBottomColor = "green";
tree1.style.borderBottomWidth = "200px";
// tree1.style.borderLeftWidth = "400";
// tree1.style.borderRightWidth = "400";
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

tree4.style.width = "0px";
tree4.style.height = "0px";
tree4.style.border = "transparent solid 50px";
tree4.style.borderBottomColor = "green";
tree4.style.borderBottomWidth = "200px";
tree4.style.margin = "0 auto";
tree4.style.position = "relative";
tree4.style.top = "-600px";

tree5.style.width = "0px";
tree5.style.height = "0px";
tree5.style.border = "transparent solid 50px";
tree5.style.borderBottomColor = "green";
tree5.style.borderBottomWidth = "200px";
tree5.style.margin = "0 auto";
tree5.style.position = "relative";
tree5.style.top = "-800px";

trunk.style.width = "0px"; //creates the trunk of the tree
trunk.style.height = "0px";
trunk.style.border = "solid 20px";
trunk.style.borderColor = "brown";
trunk.style.margin = "0 auto";
trunk.style.position = "relative";
trunk.style.top = "-800px";

light1.style.width = "0px"; // creates the ornaments
light1.style.height = "0px";
light1.style.border = "solid 5px";
light1.style.borderColor = "red";
light1.style.margin ="0 auto"
light1.style.position = "relative";
light1.style.top = "-1100px";
light1.style.left = "-5px"

light2.style.width = "0px";
light2.style.height = "0px";
light2.style.border = "solid 5px";
light2.style.borderColor = "red";
light2.style.margin ="0 auto"
light2.style.position = "relative";
light2.style.top = "-990px";
light2.style.left = "10px"

light3.style.width = "0px";
light3.style.height = "0px";
light3.style.border = "solid 5px";
light3.style.borderColor = "red";
light3.style.margin ="0 auto"
light3.style.position = "relative";
light3.style.top = "-950px";
light3.style.left = "-17px"

light4.style.width = "0px";
light4.style.height = "0px";
light4.style.border = "solid 5px";
light4.style.borderColor = "yellow";
light4.style.margin ="0 auto"
light4.style.position = "relative";
light4.style.top = "-1270px";
light4.style.left = "0px"

moon.src = "Images/moon.gif";//creates the moon gif
moon.style.width = "200px";
moon.style.border = "solid 0px";
moon.style.margin = "0 auto";
moon.style.position = "relative";
moon.style.top = "-1350px";
moon.style.left ="1000px";



var music = new Audio("Music/carol-of-the-bells-xmas-background-hip-hop-music-for-video-60-second-178242.mp3");//creates the music
music.controls = true;



    document.body.append(background); //appends everything to the webpage
    background.append(text); 
    background.append(tree1); 
    background.append(tree2); 
    background.append(tree3);
    background.append(tree4);
    background.append(tree5);
    background.append(trunk); 
    background.append(light1); 
    background.append(light2); 
    background.append(light3); 
    background.append(light4); 
    background.append(moon);  
  
    document.body.appendChild(music);
