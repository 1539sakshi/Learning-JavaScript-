// CODE TO CHANGE IMAGE 1

var randomNumber1 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
var randonImage1 = "images/dice"+randomNumber1+".png";
var img = document.querySelectorAll("img")[0];

img.setAttribute("src", randonImage1);


//CODE TO CHANE IMAGE 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber2);
var randonImage2 = "images/dice"+randomNumber2+".png";
var img = document.querySelectorAll("img")[1];

img.setAttribute("src", randonImage2);


//CODE TO CHANGE THE HEADING

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
  heading.innerHTML="Player1 wins! &#127937";
}
else if(randonImage1 < randonImage2){
  heading.innerHTML="Player2 wins! &#127937";
}
else{
  heading.innerHTML="&#127937 Draw! &#127937";
}
