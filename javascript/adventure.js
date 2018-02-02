//Define the size of the game play area (the board)
//var maxX = 2;
//var maxY = 2;

//Extra challenge: Make the game area larger: they now have 100 spaces to play in
var maxX = 6;
var maxY = 6;

//(x,y) grid, with first square = (0,0)
var userX = 0;
var userY = 0;

//Hide the treasure, also with (x,y) values, not randomized yet
var treasureX = 2;
var treasureY = 1;

//Extra challenge: Define variables to start game, and create a starting button attached to the html function "start"
var currentlyplaying = false;
var startingbutton;

startingbutton = start.add.button()

//Extra challenge: Hide treasure in random (x,y) values between 0 and 5
var treasureX = Math.floor(Math.random() * 6);
var treasureY = Math.floor(Math.random() * 6);

//So we can keep track of the treasure in console.log
console.log(treasureX)
console.log(treasureY)

//Main loop control
var treasureFound = false;

//Get user's name
var name = prompt("Welcome brave adventurer! What is your name?");

function start() {

  //You can add "Hello ____, where would you want to move?"
  while (!treasureFound) {
    var direction = prompt("Which direction would you like to go in? (North, South, East, West)")
    console.log(direction);

    //Extra challenge: Input is now case insensitive, so user can input direction name with any case
    var directioncaseinsensitive = direction.toLowerCase();
    console.log(directioncaseinsensitive);

    //Temporary vars only used for checking the validity of the new user location after move
    var newX
    var newY

    //See what new user location should be
    if (directioncaseinsensitive == "north") {
      newX = userX;
      newY = userY + 1;
      //Check if new user location is valid
      //neither value <0, neither is > max
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
    //Check if new user location is treasure
    //See if user location matches treasure
    if (userX == treasureX && userY == treasureY) {
      treasureFound = true;

      console.log("You won!")
    }
  }

}
