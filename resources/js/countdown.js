var Crossrail = new Date("May 24, 2022 06:00:00").getTime();
var K12 = new Date("May 28, 2022 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceCR = (Crossrail - now)/1000;
  var distanceK12 = (K12 - now)/1000;

  var daysCR = Math.floor(distanceCR / 86400);
  var daysK12 = Math.floor(distanceK12 / 86400);
  var hoursK12 = Math.floor((distanceK12 % 86400) / 3600);
  var elapsedK12 = -1 * Math.ceil(distanceK12 / 3600);

  if (daysCR > -1) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Crossrail opens in " + daysCR + " days, but without us being there :(";
  }

  else if (daysK12 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next Crossrail train will be stopping in " + daysK12 + " days! We will be calling at Paddington, Tottenham Court Road, Farringdon, Liverpool Street, Whitechapel, Canary Wharf, Custom House, Woolwich and Abbey Wood!";
  }

  else if (daysK12 == 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next Crossrail train will be stopping in " + hoursK12 + " hours! We will be calling at Paddington, Tottenham Court Road, Farringdon, Liverpool Street, Whitechapel, Canary Wharf, Custom House, Woolwich and Abbey Wood!";
  }

  else if (elapsedK12 < 4) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedK12 + " hours into our Koppa 12 Crossrail adventure! We will be calling at Paddington, Tottenham Court Road, Farringdon, Liverpool Street, Whitechapel, Canary Wharf, Custom House, Woolwich and Abbey Wood!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
