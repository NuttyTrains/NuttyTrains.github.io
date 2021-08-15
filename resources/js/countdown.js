var Xi4 = new Date("Aug 14, 2021 09:00:00").getTime();
var Koppa8 = new Date("Aug 15, 2021 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceX4 = (Xi4 - now)/1000;
  var distanceK8 = (Koppa8 - now)/1000;

  var daysX4 = Math.ceil(distanceX4 / (86400));
  var hoursX4 = Math.ceil(distanceX4 / (3600));
  var elapsedX4 = -1*hoursX4;
  var hoursK8 = Math.ceil(distanceK8 / (3600));
  var elapsedK8 = -1*hoursK8;

  if (daysX4 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysX4 + " days is the XI 3 service to CAMBRIDGE, calling at LONDON, SOME PLACES ON THE WAY TO CAMBRIDGE, DEPRESSION, and DEATH.";
  }
 
  else if (hoursX4 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursX4 + " hours is the XI 3 service to CAMBRIDGE, calling at LONDON, SOME PLACES ON THE WAY TO CAMBRIDGE, DEPRESSION, and DEATH.";
  }
 
  else if (hoursX4 > -10) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX4 + " hours into XI 3! The train arriving at PLATFORM DAI is the XI 3 service to CAMBRIDGE, calling at LONDON, SOME PLACES ON THE WAY TO CAMBRIDGE, DEPRESSION, and DEATH.";
  }

  else if (hoursK8 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursK8 + " hours is the KOPPA 7 service to SAAAAF LONDON, calling at NORTHERN LINE, TRAMS, CROYDON, and IKEA";
  }

  else if (hoursK8 > -8) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedK8 + " hours into KOPPA 7! The train arriving at PLATFORM DAI is the KOPPA 7 service to SAAAAF LONDON, calling at NORTHERN LINE, TRAMS, CROYDON, and IKEA.";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},60000);
