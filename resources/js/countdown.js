var K11 = new Date("Mar 26, 2022 10:00:00").getTime();
var O1 = new Date("Mar 27, 2022 08:00:00").getTime();
var NTCI2 = new Date("Apr 04, 2022 14:30:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceK11 = (K11 - now)/1000;
  var distanceO1 = (O1 - now)/1000;
  var distanceNTCI2 = (NTCI2 - now)/1000;

  var daysK11 = Math.floor(distanceK11 / 86400);
  var hoursK11 = Math.floor((distanceK11 % 86400) / 3600);
  var elapsedK11 = -1 * Math.ceil(distanceK11 / 3600);
  var hoursO1 = Math.floor((distanceO1 % 86400) / 3600);
  var elapsedO1 = -1 * Math.ceil(distanceO1 / 3600);
  var daysNTCI2 = Math.floor(distanceNTCI2 / 86400);
  var hoursNTCI2 = Math.floor((distanceNTCI2 % 86400) / 3600);
  var elapsedNTCI2 = -1 * Math.ceil(distanceNTCI2 / 3600);

  if (daysK11 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysK11 + " days is the KOPPA 11 service to GUILDFORD, calling at SOME RANDOM COMMUTER TOWNS, PIZZA EXPRESS IN WOKING, and NOT JEFFREY EPSTEIN'S BASEMENT";
  }

  else if (daysK11 == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursK11 + " hours is the KOPPA 11 service to GUILDFORD, calling at SOME RANDOM COMMUTER TOWNS, PIZZA EXPRESS IN WOKING, and NOT JEFFREY EPSTEIN'S BASEMENT";
  }

  else if (elapsedK11 < 12) {
    document.getElementById("countdown").innerHTML = "Koppa 11 is underway! We are " + elapsedK11 + " hours into Nutty Trains! We will be calling at GUILDFORD, SOME RANDOM COMMUTER TOWNS, PIZZA EXPRESS IN WOKING, and NOT JEFFREY EPSTEIN'S BASEMENT";
  }

  else if (daysO1 == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursO1 + " hours is the ORPHAN 1 service to THE SOUTH COAST, calling at GATWICK, BRIGHTON, HASTINGS, BATTLE and OH SHIT WE ARE RUNNING OUT OF TIME";
  }

  else if (elapsedO1 < 12) {
    document.getElementById("countdown").innerHTML = "NT Orphan 1 is underway! We are " + elapsedO1 + " hours into Nutty Trains! We will be calling at GATWICK, BRIGHTON, HASTINGS, BATTLE and OH SHIT WE ARE RUNNING OUT OF TIME";
  }

  else if (daysNTCI2 > 0) {
    document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' Nu'y Trains! Next train staapping Camborne in " + daysNTCI2 + " days is NTCI2, me loverr! I tell e', that'd be a good service down Kernow! Fuck knows where we're 'eaded though";
  }

  else if (daysNTCI2 == 0) {
    document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' Nu'y Trains! Next train staapping Camborne in " + hoursNTCI2 + " 'ours is NTCI2, me loverr! I tell e', that'd be a good service down Kernow! Fuck knows where we're 'eaded though";
  }

  else if (elapsedNTCI2 < 48) {
    document.getElementById("countdown").innerHTML = "Oooh Arrgh! Welc'm t' NTCI2! We've been out and about fer " + elapsedNTCI2 + " hours now, me loverr! We'll be 'eaded to Plymouth, Liskeard, Looe, Newquay, Penryn, Falmouth and Camborne! Let's show this shity boi 'ow we do things down Kernow! Don' ew forrget, trains don't staap Camborne Wednesdays!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT! There will be no more adventures until after exams, unless Crossrail opens :(";
  }

},1000);
