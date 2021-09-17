var Digamma2 = new Date("Sep 25, 2021 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceF2 = (Digamma2 - now)/1000;

  var daysF2 = Math.ceil(distanceF2 / (86400));
  var hoursF2 = Math.ceil(distanceF2 / (3600));
  var elapsedF2 = -1*hoursF2;

  if (daysF2 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM ONE (RIP Platform 2) in " + daysF2 + " days is the DIGAMMA 2 service to PILNING(!!), calling at BRIZZLE, SEVERN BEACH and GLOZZA";
  }
 
  else if (hoursF2 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM ONE (RIP Platform 2) in " + hoursF2 + " hours is the DIGAMMA 2 service to PILNING(!!), calling at BRIZZLE, SEVERN BEACH and GLOZZA";
  }
 
  else if (hoursF2 > -11) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedF2 + " hours into DIGAMMA 2! The train arriving at PLATFORM ONE (RIP Platform 2) is the DIGAMMA 2 service to PILNING(!!), calling at BRIZZLE, SEVERN BEACH and GLOZZA";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},60000);
