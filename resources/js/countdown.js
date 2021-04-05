var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();
var Digamma1 = new Date("Apr 14, 2021 12:51:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
  var DG1 = (Digamma1 - now)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  var days2 = distance / (86400);
    
  var daysDG1 = Math.ceil((DG1 - 43200) / (86400));
  var hoursDG1 = Math.floor((DG1 % (86400)) / (3600));
  var minutesDG1 = Math.floor((DG1 % (3600)) / (60));
  var secondsDG1 = Math.floor((DG1 % (60)));

  var a = 315.9848724;
  var b = 152/1000;

  var chock = a * Math.exp(b * (days2+2));
  var chock2 = Math.floor(chock/1000000000000000000000);
  

  if (DG1 > 86400+43200) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " sextillion chock cases. ϝ1 begins in " + daysDG1 + " days!"
  }

  else if (DG1 > 43200) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " sextillion chock cases. ϝ1 is tomorrow!";
  }

  else if (DG1 > 16200) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! ϝ1 begins in: " + hoursDG1 + "h " + minutesDG1 + "m " + secondsDG1 + "s ";
  }

  else if (DG1 > 12600) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Matthew is on his way to PAD and James is heading to CBN: ϝ1 begins in: " + hoursDG1 + "h " + minutesDG1 + "m " + secondsDG1 + "s ";
  }

  else if (DG1 > 6600) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! We're off! Matthew is travelling to Brizzle and James to Plymouth! ϝ1 begins in: " + hoursDG1 + "h " + minutesDG1 + "m " + secondsDG1 + "s ";
  }

  else if (DG1 > 3600) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Matthew is currently waiting in Brizzle and James is travelling to Exeter! ϝ1 begins in: " + hoursDG1 + "h " + minutesDG1 + "m " + secondsDG1 + "s ";
  }

  else if (DG1 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! We are both closing in on Taunton! ϝ1 begins in: " + minutesDG1 + "m " + secondsDG1 + "s!";
  }

  else if (DG1 > -4800) {
    document.getElementById("countdown").innerHTML = "IT IS NT TIME!!! Matthew and James are in Taunton!";
  }

  else if (DG1 > -6600) {
    document.getElementById("countdown").innerHTML = "IT IS NT TIME!!! Matthew and James are travelling to Weston-super-mare!";
  }

  else if (DG1 > -8400) {
    document.getElementById("countdown").innerHTML = "IT IS NT TIME!!! Matthew and James are in Weston-super-mare!";
  }

  else if (DG1 > -10800) {
    document.getElementById("countdown").innerHTML = "IT IS NT TIME!!! Matthew and James are travelling to Brizzle!";
  }

  else if (DG1 > -18000) {
    document.getElementById("countdown").innerHTML = "IT IS NT TIME!!! Matthew and James are in Brizzle!";
  }

  else if (DG1 > -36000) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! We are both travelling home from ϝ1";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " sextillion chock cases. Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }

},1);

// This is 50% of the banner change - post-exams, I will change it to 100%, by permanently replacing the chockclock with "Welcome to NT - the next train at platform DAI will be..."
