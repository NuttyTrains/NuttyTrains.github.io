var countDownDate = new Date("Mar 05, 2020 17:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (countDownDate - now)/1000;
  var distancetwo = (countDownDate - now);
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  
  var chock = Math.floor(10**(distancetwo/800000 +2));
    
  document.getElementById("countdown").innerHTML = " The UK has " + chock + " chock cases. We're all going to die. Reality is an illusion, the universe is a hologram, buy toilet roll!";
},1000);
