var NTCI2 = new Date("Apr 03, 2022 19:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceNTCI2 = (NTCI2 - now)/1000;

  var daysNTCI2 = Math.floor(distanceNTCI2 / 86400);
  var hoursNTCI2 = Math.floor((distanceNTCI2 % 86400) / 3600);
  var elapsedNTCI2 = -1 * Math.ceil(distanceNTCI2 / 3600);

  if (daysNTCI2 > 0) {
    document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' Nu'y Trains! Next train staapping Camborne in " + daysNTCI2 + " days is NTCI2, me loverr! I tell e', that'd be a good service down Kernow! Fuck knows where we're 'eaded though";
  }

  else if (daysNTCI2 == 0) {
    document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' Nu'y Trains! Next train staapping Camborne in " + hoursNTCI2 + " 'ours is NTCI2, me loverr! I tell e', that'd be a good service down Kernow! Fuck knows where we're 'eaded though";
  }

  else if (elapsedNTCI2 < 48) {
    document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' NTCI2! We've been out and about fer " + elapsedNTCI2 + " hours now, me loverr! We'll be 'eaded to Plymouth, 'Zance, St Ives, Newquay, Penryn, Falmouth and Camborne! Let's show this shity boi 'ow we do things down Kernow! Don' ew forrget, trains don't staap Camborne Wednesdays!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT! There will be no more adventures until after exams, unless Crossrail opens :(";
  }

},1000);
