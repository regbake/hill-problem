var angle = 10;
// var incline = document.getElementsByClassName("incline")[0];

function addAngle(){
  var incline = document.getElementsByClassName("incline")[0];
  angle++;

  incline.style.transform = "rotate(-" + angle + "deg)";
  updateAngle();
}

function lessAngle(){
  var incline = document.getElementsByClassName("incline")[0];
  angle--;

  incline.style.transform = "rotate(-" + angle + "deg)";
  updateAngle();
}

function updateAngle() {
  document.getElementById("current-angle").innerHTML = angle;
}
