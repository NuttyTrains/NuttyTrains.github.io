var KX = new Date("Jan 23, 2022 11:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceKX = (KX - now)/1000;

  var daysKX = Math.floor(distanceKX / 86400);
  var hoursKX = Math.floor((distanceKX % 86400) / 3600);
  var elapsedKX = -1 * Math.ceil(distanceKX / 3600);

  if (daysKX > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysKX + " days is the KOPPA X service to UXBRIDGE, calling at HATFIELD, ALLY PALLY, SHENFIELD, EMERSON PARK, GREENFORD and OMICRON";
  }

  else if (daysKX == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursKX + " hours is the KOPPA X service to UXBRIDGE, calling at HATFIELD, ALLY PALLY, SHENFIELD, EMERSON PARK, GREENFORD and OMICRON";
  }

  else if (elapsedKX < 26) {
    document.getElementById("countdown").innerHTML = "Koppa X is underway! We are " + elapsedKX + " hours into Nutty Trains! We will be calling at HATFIELD, ALLY PALLY, SHENFIELD, EMERSON PARK, GREENFORD, UXBRIDGE and OMICRON!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
