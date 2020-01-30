var countDownDate = new Date("Jan 31, 2020 17:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (countDownDate - now)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
    
  if (distance > 14*86400) {
        document.getElementById("countdown").innerHTML = "Welcome to NT";
  },1000);
  
  else if (distance > 0) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! ϙ2 begins in: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
  },1000);
  
  else if (distance > -172800) {
              document.getElementById("countdown").innerHTML = "<big><big>It's NT Time!!! <i>不好猫!</i></big></big>";
  },1000);
  
  else {document.getElementById("countdown").innerHTML = "Welcome to NT";
  },1000);
