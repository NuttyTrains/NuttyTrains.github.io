var countDownDate = new Date("Dec 11, 2019 22:12:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (countDownDate - now)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
    
  if (distance > 7*86400) {
        document.getElementById("countdown").innerHTML = "";
  }
  
  else {
        if (distance > 0) {
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        }
  
        else {
              if (distance > -86400) {
              document.getElementById("countdown").innerHTML = "<big><strong>It's NT Time!!! <i>不好猫!</i></strong></big>";
              }
  
              else {
                    document.getElementById("countdown").innerHTML = "";
              }
        }
  }
},1000);
