var angle = 0;
var vehicleX = 75;
var isSlopePositive = undefined;
var isSlopeSame = undefined;
var initialTime = undefined;
var currentTime = undefined;
// var incline = document.getElementsByClassName("incline")[0];

//interval to keep checking for inflection
setInterval(checkAngle, 60);

document.onkeydown = checkKey;

function addAngle(){
  var incline = document.getElementsByClassName("system")[0];
  //physics...
  angle--;

  incline.style.transform = "rotate(" + angle + "deg)";
  updateAngle();
}

function lessAngle(){
  var incline = document.getElementsByClassName("system")[0];
  //physics...
  angle++;

  incline.style.transform = "rotate(" + angle + "deg)";
  updateAngle();
}

function updateAngle() {
  document.getElementById("current-angle").innerHTML = angle;

  //the start time of the angle change
  initialTime = Date.now();
}

function manageAcceleration(){
  //calculate acc from angle
  var acc = 9.8*Math.sin(angle*(Math.PI/180));

  document.getElementById("current-acc").innerHTML = acc;
}

//set the angle to pos or negative
function checkAngle() {
  if (angle > 0){
    isSlopePositive = true;

    //***Change the position of the 'vehivle', simulate move
    vehicleX++;
    document.getElementsByClassName("vehicle")[0].style.left = vehicleX + "px";
    manageAcceleration();
  }
  else if (angle < 0) {
    isSlopePositive = false;

    //***Change the position of the 'vehivle', simulate move
    vehicleX--;
    document.getElementsByClassName("vehicle")[0].style.left = vehicleX + "px";
    manageAcceleration();
  } else {
    //no movement
    //TODO define edge case
  }
}

//apply movement functions for left/right keys
function checkKey(e){
  e = e || window.event;

  if (e.keyCode === 37){
    //left arrow
    addAngle();
  }
  else if (e.keyCode === 39){
    //right arrow
    lessAngle();
  }
}

//TODO: Function to measure start and stop time, or time elapsed from inflection point/
//which is when acc goes from 0 to 1/-1
//or actually any change in slope, the object will continue to accelerate at a constant
//rate as long as that slope is constant, the acceleration will increase with an increase
//in slope

//When the slope changes... start the clock?
