var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();
var Phase3 = new Date("May 17, 2021 00:00:00").getTime();
var Phase4 = new Date("Jun 19, 2021 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
  var P3 = (Phase3 - now)/1000;
  var P4 = (Phase4 - now)/1000;
   
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  var days2 = distance / (86400);

  var days3 = Math.ceil(P3 / (86400));
  var days4 = Math.ceil(P4 / (86400));
  
  var a = 315.9848724;
  var b = 152/1000;

  var chock = a * Math.exp(b * (days2+2));
  var chock2 = Math.floor(chock/1000000000000000000000000000);
  

  if (days3 > 1) {
    document.getElementById("countdown").innerHTML = "<small>Welcome to NT! The UK has " + chock2 + " octillion cases of chock. Indoor restaurants and pubs open in " + days3 + " days! Reality is an illusion, the universe is a hologram, buy toilet roll!</small>";
  }
    
  else if (days3 == 1) {
    document.getElementById("countdown").innerHTML = "<small>Welcome to NT! The UK has " + chock2 + " octillion cases of chock. Indoor restaurants and pubs open tomorrow! Reality is an illusion, the universe is a hologram, buy toilet roll!</small>";
  }
    
  else if (days3 > -7) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Indoor restaurants and pubs are now open! Go out and enjoy... after exams!";
  }
    
  else if (days4 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " octillion cases of chock. Koppa 5 is in " + days4 + " days! Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }
      
  else if (days4 == 1) {
    document.getElementById("countdown").innerHTML = "The next train to arrive at PLATFORM DAI will be the KOPPA 5 service to LONDON tomorrow! Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }
    
  else if (days4 > -3) {
    document.getElementById("countdown").innerHTML = "<small>The next train to arrive at PLATFORM DAI will be the KOPPA 5 service to LONDON, calling at INSANITY, DEPRESSION, MASOCHISM, PIZZA EXPRESS, THE COUNCIL ESTATE, and CHOCK</small>";
  }
    
  else if (days4 > -7) {
    document.getElementById("countdown").innerHTML = "<small>The next train to arrive at PLATFORM DAI will be the XI 1 service to OXFORD, calling at PAIN, MISERY, TORYLAND, BANANA TREE, and REVERENCE OF OUR GLORIOUS ETERNAL LEADER</small>";
  }

  else {
    document.getElementById("countdown").innerHTML = "Farewell ChockClock, you've been a friend throughout. BBB! Reality is an illusion, the universe is a hologram, buy toilet roll! - ChockClock, 2020-2021";
  }

},1);

// This is 75% of the banner change - post-exams, I will change it to 100%, by permanently replacing the chockclock with "Welcome to NT - the next train at platform DAI will be..."
