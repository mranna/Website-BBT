"use strict";

showClock();
setInterval("showClock()",1000);
var myIndex = 0;
carousel();

function showClock(){
    var thisDay = new Date();
    var localDate  = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();
    document.getElementById("currentTime").innerHTML ="<br>" + "<span>" + localTime + "<span/>";
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}