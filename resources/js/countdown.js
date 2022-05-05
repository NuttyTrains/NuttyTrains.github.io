var Crossrail = new Date("May 24, 2022 06:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceCR = (Crossrail - now)/1000;

  var daysCR = Math.floor(distanceCR / 86400);
  var hoursCR = Math.floor((distanceCR % 86400) / 3600);
  var elapsedCR = -1 * Math.ceil(distanceCR / 3600);

  //if (daysNTCI2 > 0) {
  //  document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' Nu'y Trains! Next train staapping Camborne in " + daysNTCI2 + " days is NTCI2, me loverr! I tell e', that'd be a good service down Kernow! Fuck knows where we're 'eaded though";
  //}

  //else if (daysNTCI2 == 0) {
  //  document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' Nu'y Trains! Next train staapping Camborne in " + hoursNTCI2 + " 'ours is NTCI2, me loverr! I tell e', that'd be a good service down Kernow! Fuck knows where we're 'eaded though";
  //}

  //else if (elapsedNTCI2 < 48) {
  //  document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' NTCI2! We've been out and about fer " + elapsedNTCI2 + " hours now, me loverr! We'll be 'eaded to Plymouth, 'Zance, St Ives, Newquay, Penryn, Falmouth and Camborne! Let's show this shity boi 'ow we do things down Kernow! Don' ew forrget, trains don't staap Camborne Wednesdays!";
  //}

  if (daysCR > -1) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Crossrail opens in " + daysCR + " days, but without us being there :(";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT! There will be no more adventures until after exams :(";
  }

},1000);
