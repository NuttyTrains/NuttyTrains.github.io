var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));

  var a = 289.8848724;
  var b = 152/1000;

  var chock = Math.floor(a * Math.exp(b * days));

document.getElementById("countdown").innerHTML = " The UK has " + chock + " chock cases. We're all going to die. Reality is an illusion, the universe is a hologram, buy toilet roll!"; 
},1000);