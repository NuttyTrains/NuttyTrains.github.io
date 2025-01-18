var Xmas24 = new Date("Dec 06, 2024 09:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceXmas24 = (Xmas24 - now)/1000;

  var daysXmas24 = Math.floor(distanceXmas24 / 86400);
  var hoursXmas24 = Math.floor(distanceXmas24 / 3600);
  var elapsedXmas24 = hoursXmas24*(-1);

  if (hoursXmas24 > 16 && hoursXmas24 < 72) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! James is enroute to Milan! We begin NT Xmas 24 in " + hoursXmas24 + " hours! We will be calling at vin, glühwein and vino.";
  }

  else if (hoursXmas24 > 0 && hoursXmas24 < 24) {
    //document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedOx24 + " hours into Koppa 18! We will be calling at ???. Platform DAI for the KOPPA 18 service to LONDON.";
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! James and Matthew are enroute to Milan! We begin NT Xmas 24 in " + hoursXmas24 + " hours! We will be calling at vin, glühwein and vino.";
  }

  else if (hoursXmas24 > -3 && hoursXmas24 < 0) {
    document.getElementById("countdown").innerHTML = "Benvenuti in Italia! NT Xmas 24 is go! We have been travelling for " + elapsedXmas24 + " hours!";
  }

  else if (hoursXmas24 > -6 && hoursXmas24 < 0) {
    document.getElementById("countdown").innerHTML = "Benvenuti in Svizzera! NT Xmas 24 is go! We have been travelling for " + elapsedXmas24 + " hours!";
  }

  else if (hoursXmas24 > -52 && hoursXmas24 < 0) {
    document.getElementById("countdown").innerHTML = "Wilkommen in der Schweiz! NT Xmas 24 is go! We have been travelling for " + elapsedXmas24 + " hours!";
  }

  else if (hoursXmas24 > -78 && hoursXmas24 < 0) {
    document.getElementById("countdown").innerHTML = "Willkommen in Deutschland! NT Xmas 24 is go! We have been travelling for " + elapsedXmas24 + " hours!";
  }

  else if (hoursXmas24 > -96 && hoursXmas24 < 0) {
    document.getElementById("countdown").innerHTML = "Bienvenue en France! NT Xmas 24 is go! We have been travelling for " + elapsedXmas24 + " hours!";
  }

  else if (hoursXmas24 > -100 && hoursXmas24 < 0) {
    document.getElementById("countdown").innerHTML = "Welcome back to London! NT Xmas 24 is go! We have been travelling for " + elapsedXmas24 + " hours!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
