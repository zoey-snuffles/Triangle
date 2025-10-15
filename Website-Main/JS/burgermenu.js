var Burger =
{ 
init: function() 
{ 
var link = document.getElementsByClassName("topnav"); 
for (var i = 0; i < link.length; i++) 
{ 
link[i].addEventListener("click", clickListener); 
} 
function clickListener(event) 
{ 
var li = event.currentTarget; 
li.classList.toggle("toggleclass"); 
}// end of clickListener function 
}// end of init function 
}; //end of object 
Burger.init();