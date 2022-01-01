var NYE = new Date("Jan 01, 2022 00:00:00").getTime();
var KX = new Date("Jan 23, 2022 11:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance22 = (NYE - now)/1000;
  var distanceKX = (KX - now)/1000;

  var daysKX = Math.floor(distanceKX / 86400);
  var hoursKX = Math.floor((distanceKX % 86400) / 3600);
  var elapsedKX = -1 * Math.ceil(distanceKX / 3600);
  var days22 = Math.floor(distance22 / 86400);
  var hours22 = Math.floor((distance22 % 86400) / 3600);
  var mins22 = Math.floor((distance22 % 3600) / 60);
  var secs22 = Math.floor(distance22 % 60);

  if (days22 == -1) {
    if (hours22 > -10) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains!";
    }

    else if (hours22 > -13) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with NT Podcast 1, going live in " + (hours22 + 13) + " hours, " + (60 + mins22) + " minutes and " + (60 + secs22) + " seconds!";
    }

    else if (hours22 > -14) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with NT Podcast 1, going live in " + (60 + mins22) + " minutes and " + (60 + secs22) + " seconds!";
    }

    else {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with <a href='https://open.spotify.com/episode/2OcVkxshxjmgMuECymMmU9'> NT Podcast 1! </a>";
    }
  }

  else if (days22 > -4) {
    document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains!";
  }

  else if (daysKX > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysKX + " days is the KOPPA X service to UXBRIDGE, calling at HATFIELD, ALLY PALLY, SHENFIELD, EMERSON PARK, GREENFORD and OMICRON";
  }

  else if (daysKX == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursKX + " hours is the KOPPA X service to UXBRIDGE, calling at HATFIELD, ALLY PALLY, SHENFIELD, EMERSON PARK, GREENFORD and OMICRON";
  }

  else if (elapsedKX > 26) {
    document.getElementById("countdown").innerHTML = "Koppa X is underway! We are " + elapsedKX + " hours into Nutty Trains! We will be calling at HATFIELD, ALLY PALLY, SHENFIELD, EMERSON PARK, GREENFORD, UXBRIDGE and OMICRON!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
