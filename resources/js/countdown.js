var Xi2 = new Date("Jul 29, 2021 12:00:00").getTime();
var Koppa6 = new Date("Aug 1, 2021 11:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceX2 = (Xi2 - now)/1000;
  var distanceK6 = (Koppa6 - now)/1000;

  var daysX2 = Math.ceil(distanceX2 / (86400));
  var hoursX2 = Math.ceil(distanceX2 / (3600));
  var elapsedX2 = -1*hoursX2;
  var hoursK6 = Math.ceil(distanceK6 / (3600));
  var elapsedK6 = -1*hoursK6;

  if (daysX2 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysX2 + " days is the XI 2 service to OXFORD, calling at ISIS, PUNTING, WOZZA, and THE MIDNIGHT TRAIN.";
  }
 
  else if (hoursX2 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursX2 + " hours is the XI 2 service to OXFORD, calling at ISIS, PUNTING, WOZZA, and THE MIDNIGHT TRAIN.";
  }
 
  else if (hoursX2 > -4) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX2 + " hours into XI 2! The train arriving at PLATFORM DAI is the XI 2 service to OXFORD, calling at ISIS, CYCLING, and ISLIP (AGAIN).";
  }

  else if (hoursX2 > -9) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX2 + " hours into XI 2! The train arriving at PLATFORM DAI is the XI 2 service to HEREFORD, calling at JEZZA'S FARM, SHITTY LITTLE COTSWOLDS STATIONS and WOZZA.";
  }

  else if (hoursX2 > -13) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX2 + " hours into XI 2! The train arriving at PLATFORM DAI is the XI 2 service back to OXFORD, calling at WOZZA, JEZZA'S FARM, and THE MIDNIGHT TRAIN.";
  }
 
  else if (hoursX2 > -20) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX2 + " hours into XI 2! The train arriving at PLATFORM DAI is the XI 2 service to SLEEP, calling at SLEEP, SLEEP and SLEEP.";
  }
 
  else if (hoursX2 > -30) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedX2 + " hours into XI 2! The train arriving at PLATFORM DAI is the XI 2 service to OXFORD, calling at ISIS, PUNTING and DIDCOT (MAYBE).";
  }

  else if (hoursK6 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursK6 + " hours is the KOPPA 6 service to SOMEWHERE IN LONDON, calling at BOWIS, DEL BOY, GLORIOUS LEADER KIM, and MAYBE SOME OTHER PLACES, IDK.";
  }

  else if (hoursK6 > -8) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedK6 + " hours into KOPPA 6! The train arriving at PLATFORM DAI is the KOPPA 6 service to SOMEWHERE IN LONDON, calling at BOWIS, DEL BOY, GLORIOUS LEADER KIM, and MAYBE SOME OTHER PLACES, IDK.";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI is the XI 3 service to CAMBRIDGE, calling at DEPRESSION, DEPRESSION, DEPRESSION and DEATH.";
  }

},1);
