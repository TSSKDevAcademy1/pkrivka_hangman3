"use strict"

//global variables
var secret="JAVASCRIPT";
var lettersGuessed="";

function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }
  return result;
}
var text=document.getElementById("secret");
text.textContent=getGuessedWord(secret, lettersGuessed);

var counter=1;
function onclick(event){
  var el=event.target;

  //deactivate button
  el.setAttribute("disabled", "disabled");
  console.log(el.textContent);

  //update letters guessed
  lettersGuessed+=el.textContent;

  //update secret
  text.textContent=getGuessedWord(secret, lettersGuessed);

  //update picture
  var pic=document.getElementById("picture");  
  if(text.textContent.search(el.textContent)<0)
        {
          if (counter<5){
          counter++;
          pic.setAttribute("src","images/phase"+counter+".png");
          }
          if (counter===5)
            {alert("Game Over");}       
        }

  //well done
  if (secret==text.textContent){
    //for (var btn of document.getElementById("button"))
    alert("WelDone");
  }
}

//restart
var rst=document.getElementById("restart");
rst.addEventListener("click", restart_onclick);

function restart_onclick(){
  lettersGuessed="";
  console.log("restart");
  for (var btn of document.getElementById("buttons").childNodes){
      console.log(btn);
      btn.removeAttribute("disabled");
    }
  counter=1;
  var pic=document.getElementById("picture");  
  pic.setAttribute("src","images/phase1.png");
  text.textContent=getGuessedWord(secret, lettersGuessed);
}

for (var i=65;i<=90;i++){
  var a=String.fromCharCode(i);
  var btn=document.createElement("button");
  btn.setAttribute("type","button");
  btn.setAttribute("class","btn btn-default");
  btn.textContent=a;
  var group=document.getElementById("buttons");
  group.appendChild(btn);
  btn.addEventListener("click", onclick);
}

