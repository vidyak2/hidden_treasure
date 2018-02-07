//Extra challenge: Create background music 
//Create variable
var music = new Audio("audio/backgroundmusic.mp3")

//Extra challenge: Make the game area larger
//There is now 36 spaces 
var maxX = 6;
var maxY = 6;

//(x,y) grid, with first square = (0,0)
var userX = 0;
var userY = 0;

//Extra challenge: Hide treasure in random (x,y) values between 0 and 5
var treasureX = Math.floor(Math.random() * 6);
var treasureY = Math.floor(Math.random() * 6);

//Keep track of the treasure
console.log(treasureX)
console.log(treasureY)

//Extra challenge: Create a villain 
//The villain is found randomly in the same board area as the user
var villainX = Math.floor(Math.random() * 6);
var villainY = Math.floor(Math.random() * 6);

//Keep track of villain 
console.log(villainX)
console.log(villainY)

//Main loop control
var treasureFound = false;
var foundvillain = false;

//Get user name
var name = prompt("Welcome brave adventurer! What is your name?");

//Extra challenge: Create a start button attached to the function "begin"
function begin() {

  //Music plays on start
  music.play();

  //Lower music volume, since this is only for background ambiance
  music.volume = 0.2;


  //Main loop
  while (!treasureFound && !foundvillain) {
    //Prompt once game begins
    var direction = prompt("Which direction would you like to go in? (North, South, East, West)")

    //Extra challenge: Case insensitive inputs 
    //User can input direction name with any case
    var directioncaseinsensitive = direction.toLowerCase();
    console.log(directioncaseinsensitive);

    //Temporary vars used for checking validity of the new user location
    var newX
    var newY

    //See what new user location should be
    if (directioncaseinsensitive == "north") {
      newX = userX;
      newY = userY + 1;
      //Check if new user location is valid
      //neither <0, nor >max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!!")
      }
    } else if (directioncaseinsensitive == "east") {
      newX = userX + 1;
      newY = userY;
      //neither value <0, neither is > max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!!")
      }
    } else if (directioncaseinsensitive == "south") {
      newX = userX;
      newY = userY - 1;
      //neither value <0, neither is > max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!!")
      }
    } else if (directioncaseinsensitive == "west") {
      newX = userX - 1;
      newY = userY;
      //neither value <0, neither is > max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!!")
      }
    } else {
      console.log("Please enter a valid direction")
    }

    //Check if the villain found the user
    if (newX == villainX && newY == villainY) {
      //If yes, the game ends
      foundvillain = true;
      console.log("The wolves have found you!! You lost!!")
    }

    //Check if new user location matches the treasure
    if (userX == treasureX && userY == treasureY) {
      //If yes, the game ends
      treasureFound = true;
      console.log("Congrats!! You won!!")
    }
  }
}
