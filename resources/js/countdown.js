var F3 = new Date("Aug 28, 2022 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceF3 = (F3 - now)/1000;

  var daysF3 = Math.floor(distanceF3 / 86400);
  var hoursF3 = Math.floor((distanceF3 % 86400) / 3600);
  var elapsedF3 = -1 * Math.ceil(distanceF3 / 3600);

  if (daysF3 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + daysF3 + " days! We will be calling at Didcot, Swindon, Glozza, Brizzle, Bath, Westbury, Yeovil and Weymouth. Platform DAI for the DIGAMMA 3 service to Weymouth.";
  }

  else if (daysF3 == 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! The next train will be arriving in " + hoursF3 + " hours! We will be calling at Didcot, Swindon, Glozza, Brizzle, Bath, Westbury, Yeovil and Weymouth. Platform DAI for the DIGAMMA 3 service to Weymouth.";
  }

  else if (elapsedF3 < 17) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! We are " + elapsedF3 + " hours into Digamma 3! We will be calling at Didcot, Swindon, Glozza, Brizzle, Bath, Westbury, Yeovil and Weymouth. Platform DAI for the DIGAMMA 3 service to Weymouth.";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
