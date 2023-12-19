# Project 2: Greeting Card

* Author: Nathaniel Kohtz
* Class: AP Computer Science
* Semester: winter 2023

## Overview

creates a black background with a tree with ornaments on it, with Merry Christmas text at the top, with a moon gif and a song.


## Compiling and Using


navigate to the project folder. there should be a Index.html file, a image folder, a music folder, a scripts folder, this readme.md file, and a rubric file. open the Index.html and have a browser tab open. the greeting card should appear in your browser. Program does not require user input.

## Discussion

some problems I ran into was getting the relative position to line up correctly, and getting the image to load properly, and getting things to properly appear on the screen.

there where 13 elements in the project. 5 used to create the tree leaves, 4 used for the lights, one for the tree trunk, one for the moon, one for the title, and one for the music. 

the proplem of getting the relative positioning to line up and go where I wanted it to go was difficult, becuase I had to realise that the page was stacking the elements on top of eachother, and I had to give the distance from the top to be a negitive number, so the tree triangles whould line up. getting the image to load properly took me a long time, but the solution was actualy very simple. all I had to do was remove the .. from the  <source src= "../Images/moon.gif"></source>. that got the moon to load properly. and finaly getting things to apear on the screen was not a proplem of appending the elements to the page, but rather it was a proplem of not giving the position numbers a lable. what I mean is that I said trunk.style.top = "-400"; instead of trunk.style.top = "-400px"; giving the number a pixle lable fixed the element not apearing.

## Testing

I tested it by looking at the tab with the project on it and reloading to see if the change I made did what I wanted it to do.

