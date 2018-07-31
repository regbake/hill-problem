var vehicleX = 75;
var isSlopePositive, isSlopeSame, initialTime, deltaTime;

//start checking for angle
setInterval(checkAngle, 60);

//on any key down
document.onkeydown = checkKey;

var angleControls = {
  angle: 0,
  addAngle: function() {
    var incline = document.getElementsByClassName('system')[0];
    this.angle--;

    incline.style.transform = 'rotate(' + this.angle + 'deg)';
    this.updateAngle();
  },

  lessAngle: function() {
    var incline = document.getElementsByClassName('system')[0];
    this.angle++;

    incline.style.transform = 'rotate(' + this.angle + 'deg)';
    this.updateAngle();
  },

  //keeps track of current angle in degrees
  updateAngle: function() {
    document.getElementById('current-angle').innerHTML = this.angle;

    initialTime = Date.now();
  }
};

function setAcceleration() {
  var acc = 9.8 * Math.sin(angleControls.angle * (Math.PI / 180));

  document.getElementById('current-acc').innerHTML = acc;
}

//set the angle to pos or negative
function checkAngle() {
  if (angleControls.angle > 0) {
    isSlopePositive = true;

    //***Change the position of the 'vehicle', simulate move
    vehicleX++;
    document.getElementsByClassName('vehicle')[0].style.left = vehicleX + 'px';
    setAcceleration();
  } else if (angleControls.angle < 0) {
    isSlopePositive = false;

    //***Change the position of the 'vehicle', simulate move
    vehicleX--;
    document.getElementsByClassName('vehicle')[0].style.left = vehicleX + 'px';
    setAcceleration();
  } else {
    //no movement, angle is 0
    isSlopePositive = null;

    setAcceleration();
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
