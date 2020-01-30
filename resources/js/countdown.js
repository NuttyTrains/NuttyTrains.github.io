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
  }
  
  else if (distance > 8*3600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! ϙ2 begins in: " + hours + "h "
        + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 4*3600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James is on his way! Matthew is in college. ϙ2 begins in: 
        " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 3*3600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James is in devil country! Matthew is still in college. ϙ2 begins in: 
        " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 2*3600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James is is Axminster. I don't know where Matthew is. ϙ2 begins in: 
        " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 3600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James is in Chocky Town! Matthew is probably at home. ϙ2 begins in: 
        " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James and Matthew are both heading to Waterloo! ϙ2 begins in: 
        " + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 60) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James should be pulling into Waterloo any minute now! ϙ2 begins in: 
        " + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 0) {
        document.getElementById("countdown").innerHTML = seconds ;
  }
  
  else if (distance > -86400) {
        document.getElementById("countdown").innerHTML = "<big><big>It's NT Time!!! <i>不好猫!</i></big></big>";
  }
  
  else {
        document.getElementById("countdown").innerHTML = "Welcome to NT";
  }
},1000);
