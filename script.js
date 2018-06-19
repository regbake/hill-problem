var angle = 0;
var vehicleX = 75;
var isSlopePositive = undefined;
// var incline = document.getElementsByClassName("incline")[0];

//interval to keep checking for inflection
setInterval(checkAngle, 1000);

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

//set the angle to pos or negative
function checkAngle() {
  if (angle > 0){
    isSlopePositive = true;

    vehicleX++;
    document.getElementsByClassName("vehicle")[0].style.left = vehicleX + "px";
  }
  else {
    isSlopePositive = false;

    vehicleX--;
    document.getElementsByClassName("vehicle")[0].style.left = vehicleX + "px";
  }

}
