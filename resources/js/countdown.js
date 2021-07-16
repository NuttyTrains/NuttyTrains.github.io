var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();
var Freedom = new Date("Jul 19, 2021 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
  var FD = (Freedom - now)/1000;
   
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  var days2 = distance / (86400);

  var daysF = Math.ceil(FD / (86400));
  
  var a = 315.9848724;
  var b = 152/1000;

  var chock = a * Math.exp(b * (days2+2));
  var chock2 = Math.floor(chock/1000000000000000000000000000);
  

  if (daysF > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " octillion cases of chock. 'All' restrictions end in " + daysF + " days! Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }
 
  else if (daysF == 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " octillion cases of chock. 'All' restrictions end tomorrow! Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }
 
  else if (daysF > -3) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! 'All' chock restrictions have ended! Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }
 
  else if (daysF > -14) {
    document.getElementById("countdown").innerHTML = "Farewell ChockClock, you've been a friend throughout. BBB! Reality is an illusion, the universe is a hologram, buy toilet roll! - ChockClock, 2020-2021";
  }
 
  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1);
