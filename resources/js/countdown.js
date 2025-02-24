var WR2 = new Date("Feb 25 2025 09:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceWR2 = (WR2 - now)/1000;

  var daysWR2 = Math.floor(distanceWR2 / 86400);
  var hoursWR2 = Math.floor(distanceWR2 / 3600);
  var elapsedWR2 = hoursWR2*(-1);

  if (hoursWR2 > 0 && hoursWR2 < 72) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! We begin White Rose 2 in " + hoursWR2 + " hours! We will be calling at Leeds and some other places, idk how long this service is! Platform DAI for the NT WHITE ROSE 2 service to LEEDS.";
  }

  else if (hoursWR2 > -6 && hoursWR2 < 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! We are " + elapsedWR2 + " hours into White Rose 2! We will be calling at Leeds and who knows where else? Not us! Platform DAI for the WHITE ROSE 2 service to LEEDS.";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
