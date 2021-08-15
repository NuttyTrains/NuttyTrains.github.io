var Xi3 = new Date("Aug 14, 2021 09:00:00").getTime();
var Koppa7 = new Date("Aug 15, 2021 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceX3 = (Xi3 - now)/1000;
  var distanceK7 = (Koppa7 - now)/1000;

  var daysX3 = Math.ceil(distanceX3 / (86400));
  var hoursX3 = Math.ceil(distanceX3 / (3600));
  var elapsedX3 = -1*hoursX3;
  var hoursK7 = Math.ceil(distanceK7 / (3600));
  var elapsedK7 = -1*hoursK7;

  if (daysX3 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysX3 + " days is the XI 3 service to CAMBRIDGE, calling at LONDON, SOME PLACES ON THE WAY TO CAMBRIDGE, DEPRESSION, and DEATH.";
  }
 
  else if (hoursX3 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursX3 + " hours is the XI 3 service to CAMBRIDGE, calling at LONDON, SOME PLACES ON THE WAY TO CAMBRIDGE, DEPRESSION, and DEATH.";
  }
 
  else if (hoursX3 > -10) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX3 + " hours into XI 3! The train arriving at PLATFORM DAI is the XI 3 service to CAMBRIDGE, calling at LONDON, SOME PLACES ON THE WAY TO CAMBRIDGE, DEPRESSION, and DEATH.";
  }

  else if (hoursK7 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursK7 + " hours is the KOPPA 7 service to SAAAAF LONDON, calling at NORTHERN LINE, TRAMS, CROYDON, and IKEA";
  }

  else if (hoursK7 > -8) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedK7 + " hours into KOPPA 7! The train arriving at PLATFORM DAI is the KOPPA 7 service to SAAAAF LONDON, calling at NORTHERN LINE, TRAMS, CROYDON, and IKEA.";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1);
