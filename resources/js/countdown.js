var K13 = new Date("Jul 24, 2022 11:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceK13 = (K13 - now)/1000;

  var daysK13 = Math.floor(distanceK13 / 86400);
  var hoursK13 = Math.floor((distanceK13 % 86400) / 3600);
  var elapsedK13 = -1 * Math.ceil(distanceK13 / 3600);

  if (daysK13 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + daysK13 + " days! We will be calling at Windsor, Windsor Castle and The Tower of London. Platform DAI for the KOPPA 13 service to Windsor.";
  }

  else if (daysK13 == 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + hoursK13 + " hours! We will be calling at Windsor, Windsor Castle and The Tower of London. Platform DAI for the KOPPA 13 service to Windsor.";
  }

  else if (elapsedK13 < 9) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedK13 + " hours into Koppa 13! We will be calling at Windsor, Windsor Castle and The Tower of London. Platform DAI for the KOPPA 13 service to Windsor.";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
