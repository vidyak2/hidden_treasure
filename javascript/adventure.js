//Define the size of the game play area (the board)
var maxX = 2;
var maxY = 2;

//(x,y) grid, with first square = (0,0)
var userX = 0;
var userY = 0;

//Hide the treasure, also with (x,y) values, not randomized yet
var treasureX = 2;
var treasureY = 1;

//Main loop control
var treasureFound = false;

//Get user's name
var name = prompt("Welcome brave adventurer! What is your name?");

//You can add "Hello ____, where would you want to move?
while (!treasureFound) {
  var direction = prompt("Which direction would you like to go in? (North, South, East, West)")
  console.log(direction);

  //Temporary vars only used for checking the validity of the new user location after move
  var newX
  var newY

  //See what new user location should be

  //Check if new user location is valid

  //Check if new user location is treasure

  if (direction == "north") {
    newX = userX;
    newY = userY + 1;
    //neither value <0, neither is > max
    if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX;
      userY = newY;
    } else {
      console.log("There is a forbidden mountain range in that direction, you cannot go!!")
    }
  } else if (direction == "east") {
    newX = userX + 1;
    newY = userY;
    //neither value <0, neither is > max
    if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX;
      userY = newY;
    } else {
      console.log("There is a forbidden mountain range in that direction, you cannot go!!")
    }
  } else if (direction == "south") {
    newX = userX;
    newY = userY - 1;
    //neither value <0, neither is > max
    if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX;
      userY = newY;
    } else {
      console.log("There is a forbidden mountain range in that direction, you cannot go!!")
    }
  } else if (direction == "west") {
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

  //See if user location matches treasure
  if (userX == treasureX && userY == treasureY) {
    treasureFound = true;

    console.log("You won!")
  }
}
