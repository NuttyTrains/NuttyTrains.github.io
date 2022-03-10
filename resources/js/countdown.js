var K11 = new Date("Mar 25, 2022 20:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceK11 = (K11 - now)/1000;

  var daysK11 = Math.floor(distanceK11 / 86400);
  var hoursK11 = Math.floor((distanceK11 % 86400) / 3600);
  var elapsedK11 = -1 * Math.ceil(distanceK11 / 3600);

  if (daysK11 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysK11 + " days is the KOPPA 11 service to GUILDFORD, calling at SOME RANDOM COMMUTER TOWNS, PIZZA EXPRESS IN WOKING, and NOT JEFFREY EPSTEIN'S BASEMENT";
  }

  else if (daysK11 == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursK11 + " hours is the KOPPA 11 service to GUILDFORD, calling at SOME RANDOM COMMUTER TOWNS, PIZZA EXPRESS IN WOKING, and NOT JEFFREY EPSTEIN'S BASEMENT";
  }

  else if (elapsedK11 < 26) {
    document.getElementById("countdown").innerHTML = "Koppa 11 is underway! We are " + elapsedK11 + " hours into Nutty Trains! We will be calling at GUILDFORD, SOME RANDOM COMMUTER TOWNS, PIZZA EXPRESS IN WOKING, and NOT JEFFREY EPSTEIN'S BASEMENT";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
