var randomnumber1=Math.floor(Math.random()*6)+1;
var diceimage1="dice"+randomnumber1+".png";
var randomimageSource="images/"+diceimage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimageSource);
var randomnumber2=Math.floor(Math.random()*6)+1;
var diceimage2="dice"+randomnumber2+".png";
var randomimageSource2="images/"+diceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimageSource2);
if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player1👌 wins";
}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML="Player2🙌 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw!👏";
}
