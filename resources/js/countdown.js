var Ox24 = new Date("Aug 10, 2024 10:00:00").getTime();
var Edin = new Date("Aug 19, 2024 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceOx24 = (Ox24 - now)/1000;
  var distanceEdin = (Edin - now)/1000;

  var daysOx24 = Math.floor(distanceOx24 / 86400);
  var hoursOx24 = Math.floor((distanceOx24 % 86400) / 3600);
  var elapsedOx24 = hoursOx24*(-1);
  var elapsedOx24b = elapsedOx24-24;

  var daysEdin = Math.floor(distanceEdin / 86400);

  if (daysOx24 < 3) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + daysOx24 + " days! We will be calling at ???. Platform DAI for the KOPPA 18 service to LONDON.";
  }

  else if (daysOx24 == 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + hoursOx24 + " hours! We will be calling at ???. Platform DAI for the KOPPA 18 service to LONDON.";
  }

  else if (hoursOx24 > -12 && hoursOx24 < 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedOx24 + " hours into Koppa 18! We will be calling at ???. Platform DAI for the KOPPA 18 service to LONDON.";
  }

  else if (hoursOx24 > -24 && hoursOx24 < 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The destination of this KOPPA 18 service has changed. This is now an AUGUST 24 service to ???. We are sorry for any inconvenience this may cause to your journey.";
  }

  else if (hoursOx24 > -34 && hoursOx24 < 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedOx24b + " hours into August 24! We will be calling at Oxford et al. Platform DAI for the AUGUST 24 service to ???.";
  }

  else if (daysEdin > 0) {
    document.getElementById("countdown").innerHTML = "This show contains no maths (and other lies): James will be speaking at Edinburgh Fringe in " + daysEdin + " days! Buy your tickets <a href='https://fringe.alephjamesa.co.uk/'>here!</a>";
  }

  else if (daysEdin > -5) {
    document.getElementById("countdown").innerHTML = "This show contains no maths (and other lies): James is speaking at Edinburgh Fringe RIGHT NOW! Buy your tickets <a href='https://fringe.alephjamesa.co.uk/'>here!</a>";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
