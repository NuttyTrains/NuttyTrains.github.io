var Ox24 = new Date("Jul 20, 2024 11:00:00").getTime();
var Edin = new Date("Aug 19, 2024 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceOx24 = (Ox24 - now)/1000;
  var distanceEdin = (Edin - now)/1000;

  var daysOx24 = Math.floor(distanceOx24 / 86400);
  var hoursOx24 = Math.floor((distanceOx24 % 86400) / 3600);
  var elapsedOx24 = -1 * Math.ceil(distanceOx24 / 3600);

  var daysEdin = Math.floor(distanceEdin / 86400);

  if (daysOx24 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + daysOx24 + " days! We will be calling at Oxford et al. Platform DAI for the DIGAMMA 4 service to Salisbury.";
  }

  else if (daysOx24 == 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + hoursOx24 + " hours! We will be calling at Oxford et al. Platform DAI for the DIGAMMA 4 service to Salisbury.";
  }

  else if (elapsedOx24 < 12) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedOx24 + " hours into Digamma 4! We will be calling at Oxford et al. Platform DAI for the DIGAMMA 4 service to Salisbury.";
  }

  else if (elapsedOx24 < 23) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The destination of this DIGAMMA 4 service has changed. This is now a KOPPA 17 service to Surrey. We are sorry for any inconvenience this may cause to your journey.";
  }

  else if (elapsedOx24 < 32) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedOx24-23 + " hours into Koppa 17! We will be calling at some random collection of stations in Southwest London. Platform DAI for the KOPPA 17 service to SURREY.";
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
