var Sampi7 = new Date("Sep 03, 2021 11:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceS7 = (Sampi7 - now)/1000;

  var daysS7 = Math.ceil(distanceS7 / (86400));
  var hoursS7 = Math.ceil(distanceS7 / (3600));
  var elapsedS7 = -1*hoursS7;

  if (daysS7 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysS7 + " days is the SAMPI 7 service to GILFACH FARGOED, calling at TREHERBERT, PONTYPRIDD OFF-LICENCE, CAERPHILTHY CRACK-DEN and <a href='https://www.redbubble.com/i/shower-curtain/Pacer-Memorial-by-NuttyTrains/78376475.YH6LW'>THE PACER MEMORIAL<sup>TM</sup></a>";
  }
 
  else if (hoursS7 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursS7 + " hours is the SAMPI 7 service to GILFACH FARGOED, calling at TREHERBERT, PONTYPRIDD OFF-LICENCE, CAERPHILTHY CRACK-DEN and <a href='https://www.redbubble.com/i/shower-curtain/Pacer-Memorial-by-NuttyTrains/78376475.YH6LW'>THE PACER MEMORIAL<sup>TM</sup></a>";
  }
 
  else if (hoursS7 > -10) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedS7 + " hours into XI 4! The train arriving at PLATFORM DAI is the SAMPI 7 service to GILFACH FARGOED, calling at TREHERBERT, PONTYPRIDD OFF-LICENCE, CAERPHILTHY CRACK-DEN and <a href='https://www.redbubble.com/i/shower-curtain/Pacer-Memorial-by-NuttyTrains/78376475.YH6LW'>THE PACER MEMORIAL<sup>TM</sup></a>";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},60000);
