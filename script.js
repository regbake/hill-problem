var vehicleX = 75; // this is just the 'middle' based on pixelsgit
var isSlopePositive, isSlopeSame, initialTime, nextTime, deltaTime;

//start checking for angle
var intervalLength = 60;
setInterval(checkAngle, intervalLength);

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

    initialTime = getTime();

    // ### TO DO: Figure out how to get the initial time of the angle change, and then the next time it is clicked
    // if (initialTime.min != initialTime) {
    //   nextTime = getTime();
    // } else {
    //   console.log('err');
    // }
  }
};

var accelerationControls = {
  setAcceleration: function() {
    var acc = 9.8 * Math.sin(angleControls.angle * (Math.PI / 180));

    document.getElementById('current-acc').innerHTML = acc;
  },

  calcAcceleration: function(slope) {}
};

var getTime = function() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var minutes = currentTime.getMinutes();

  return {
    min: minutes,
    sec: seconds
  };
};

// set the angle to pos or negative
// This is triggered every 1/intervalLength second
function checkAngle() {
  // console.log('initial: ', initialTime, ' next time: ', nextTime);
  // reflect vehicle px position in dom
  var vehicleLocation = document.getElementById('vehicleX');
  vehicleLocation.innerHTML = vehicleX;

  if (angleControls.angle > 0) {
    isSlopePositive = true;

    //***Change the position of the 'vehicle' ++
    document.getElementsByClassName('vehicle')[0].style.left = vehicleX + 'px';
    accelerationControls.setAcceleration();
  } else if (angleControls.angle < 0) {
    isSlopePositive = false;

    //***Change the position of the 'vehicle' --
    document.getElementsByClassName('vehicle')[0].style.left = vehicleX + 'px';
    accelerationControls.setAcceleration();
  } else {
    //no movement, angle is 0
    isSlopePositive = null;

    accelerationControls.setAcceleration();
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
