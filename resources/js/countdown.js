var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  var days2 = distance / (86400);

  var a = 315.9848724;
  var b = 152/1000;

  var chock = a * Math.exp(b * (days2+2));
  var chock2 = Math.floor(chock/1000000000000000000000);

  var anarchy = Math.floor(((1000/52)*Math.log(0.8*(55980000)/a))/4) - days;
  

document.getElementById("countdown").innerHTML = " The UK has " + chock2 + " sextillion chock cases. We're all going to die and turn to anarchy in " + anarchy + " days. Reality is an illusion, the universe is a hologram, buy toilet roll!"; 
},1000);
