var angle = 0;
var vehicleX = 75;
var isSlopePositive = undefined;
// var incline = document.getElementsByClassName("incline")[0];

//interval to keep checking for inflection
setInterval(checkAngle, 60);

document.onkeydown = checkKey;

function addAngle(){
  var incline = document.getElementsByClassName("system")[0];
  angle--;

  incline.style.transform = "rotate(" + angle + "deg)";
  updateAngle();
}

function lessAngle(){
  var incline = document.getElementsByClassName("system")[0];
  angle++;

  incline.style.transform = "rotate(" + angle + "deg)";
  updateAngle();
}

function updateAngle() {
  document.getElementById("current-angle").innerHTML = angle;
}

function manageAcceleration(){
  var acc = 9.8*Math.sin(angle*(Math.PI/180));
  console.log(acc, angle)

  document.getElementById("current-acc").innerHTML = acc;
}

//set the angle to pos or negative
function checkAngle() {
  if (angle > 0){
    isSlopePositive = true;

    vehicleX++;
    document.getElementsByClassName("vehicle")[0].style.left = vehicleX + "px";
    manageAcceleration();
  }
  else if (angle < 0) {
    isSlopePositive = false;

    vehicleX--;
    document.getElementsByClassName("vehicle")[0].style.left = vehicleX + "px";
    manageAcceleration();
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
