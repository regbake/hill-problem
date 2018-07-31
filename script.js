var angle = 0; //global angle to maintain
var vehicleX = 75;
var isSlopePositive, isSlopeSame, initialTime, deltaTime;

//start checking for angle
setInterval(checkAngle, 60);

//on any key down
document.onkeydown = checkKey;

var angleControls = {
  addAngle: function() {
    var incline = document.getElementsByClassName('system')[0];
    angle--;

    incline.style.transform = 'rotate(' + angle + 'deg)';
    this.updateAngle();
  },

  lessAngle: function() {
    var incline = document.getElementsByClassName('system')[0];
    angle++;

    incline.style.transform = 'rotate(' + angle + 'deg)';
    this.updateAngle();
  },

  updateAngle: function() {
    document.getElementById('current-angle').innerHTML = angle;

    initialTime = Date.now();
  }
};

function manageAcceleration() {
  var acc = 9.8 * Math.sin(angle * (Math.PI / 180));

  document.getElementById('current-acc').innerHTML = acc;
}

//set the angle to pos or negative
function checkAngle() {
  deltaTime = Date.now() - initialTime;

  if (angle > 0) {
    isSlopePositive = true;

    //***Change the position of the 'vehivle', simulate move
    vehicleX++;
    document.getElementsByClassName('vehicle')[0].style.left = vehicleX + 'px';
    manageAcceleration();
  } else if (angle < 0) {
    isSlopePositive = false;

    //***Change the position of the 'vehivle', simulate move
    vehicleX--;
    document.getElementsByClassName('vehicle')[0].style.left = vehicleX + 'px';
    manageAcceleration();
  } else {
    //no movement
    //TODO define edge case
  }
}

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode === 37) {
    //left arrow
    angleControls.addAngle();
  } else if (e.keyCode === 39) {
    //right
    angleControls.lessAngle();
  }
}

//TODO: Function to measure start and stop time, or time elapsed from inflection point/
//which is when acc goes from 0 to 1/-1
//or actually any change in slope, the object will continue to accelerate at a constant
//rate as long as that slope is constant, the acceleration will increase with an increase
//in slope

//When the slope changes... start the clock?
