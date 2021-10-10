var Koppa9 = new Date("Oct 09, 2021 13:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceK9 = (Koppa9 - now)/1000;

  var daysK9 = Math.ceil(distanceK9 / (86400));
  var hoursK9 = Math.ceil(distanceK9 / (3600));
  var elapsedK9 = -1*hoursK9;

  if (daysK9 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysK9 + " days is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  }
 
  else if (hoursK9 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursK9 + " hours is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  }
 
  else if (hoursK9 > -8) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedK9 + " hours into KOPPA 9! The train arriving at PLATFORM DAI is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},60000);
