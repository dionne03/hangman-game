window.onload=startGame();

//Array to storage the letters already used
var lettersUsed = [];

//Function to start the game 
function startGame(){
  // Categories of guess the word
var cartoons = ["Dexter", "Power Puff Girls", "Ed, Edd & Eddy", "Los Chicos del Barrio", "Coraje el perro cobarde"];
var cartoon_select = cartoons[Math.floor(Math.random() * cartoons.length)];
//Number of guesses 
var numberOfGuesses = 0; //Numero de intentos buena o mala
var lifes = 10;           //Numero de vidas cuando fallas la letra
//Lines of the hidden word 
var lines = "";

for(var i = 0; i < cartoon_select.length ; i++){
  if(cartoon_select[i] === ' '){
    lines += "- ";
  } else {
    lines += "_ ";
  }
}
//Show hidden word with lines on html
document.getElementById("word").innerHTML = lines;
console.log(lines + cartoon_select);
}

// Letters and alphabet function
function checkLetters(letter){   //esta funcion va a recibir cada letra que yo(usuario) ingrese
    
  if(validateLetters(letter)){
    lettersUsed.push(letter)
    console.log("si se puede usar:" + letter );
  } else {
    alert("do not repeat letters")
    console.log("escoge otra, no repitas letras");
  }
  document.getElementById("letterToGuess").value="";
}

// Validate letters no repeting letters
function validateLetters(letter){
  console.log(lettersUsed);
  for(var i=0; i<lettersUsed.length; i++){
    if(lettersUsed[i] === letter)
      return false;
  }
  return true;
}