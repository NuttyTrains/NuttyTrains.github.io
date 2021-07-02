var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();
var Koppa5 = new Date("Jun 19, 2021 12:20:00").getTime();
var Xi1 = new Date("Jun 23, 2021 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
  var K5 = (Koppa5 - now)/1000;
  var X1 = (Xi1 - now)/1000;
   
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  var days2 = distance / (86400);

  var days5 = Math.floor(K5 / (86400));
  var hours5 = Math.ceil(K5 / (3600));
  var elapsed5 = -1 * hours5;
  var hours1 = Math.ceil(X1 / (3600));
  var elapsed1 = -1 * hours1;
  
  var a = 315.9848724;
  var b = 152/1000;

  var chock = a * Math.exp(b * (days2+2));
  var chock2 = Math.floor(chock/1000000000000000000000000000);
  

  if (days5 > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " octillion cases of chock. Koppa 5 is in " + days5 + " days! Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }
 
  else if (hours5 > 0) {
    document.getElementById("countdown").innerHTML = "<small>The train arriving at PLATFORM DAI in " + hours5 + " hours is the KOPPA 5 service to LONDON, calling at INSANITY, DEPRESSION, MASOCHISM, PIZZA EXPRESS, THE COUNCIL ESTATE, and CHOCK</small>";
  }
 
  else if (hours5 > -1) {
    document.getElementById("countdown").innerHTML = "It is NT Time! It is time for Koppa 5, calling at INSANITY, DEPRESSION, MASOCHISM, PIZZA EXPRESS, THE COUNCIL ESTATE, and CHOCK!";
  }

  else if (hours5 > -8) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed5 + " hours into Koppa 5! Insanity? Tick!";
  }

  else if (hours5 > -18) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed5 + " hours into Koppa 5! Insanity? Tick! Masochism? Tick!";
  }

  else if (hours5 > -28) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed5 + " hours into Koppa 5! Insanity? Tick! Masochism? Tick! Depression? Tick!";
  }

  else if (hours5 > -38) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed5 + " hours into Koppa 5! Insanity? Tick! Masochism? Tick! Depression? Tick! The Council Estate? Tick!";
  }

  else if (hours5 > -48) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed5 + " hours into Koppa 5! Insanity? Tick! Masochism? Tick! Depression? Tick! The Council Estate? Tick! Chock? Tick!";
  }

  else if (hours1 > 0) {
    document.getElementById("countdown").innerHTML = "<small>The train arriving at PLATFORM DAI in " + hours1 + " hours is the XI 1 service to OXFORD, calling at PAIN, MISERY, TORYLAND, BANANA TREE, and REVERENCE OF OUR GLORIOUS ETERNAL LEADER</small>";
  }

  else if (hours1 > -1) {
    document.getElementById("countdown").innerHTML = "It is NT Time! It is time for Xi 1, calling at PAIN, MISERY, TORYLAND, BANANA TREE, and REVERENCE OF OUR GLORIOUS ETERNAL LEADER";
  }

  else if (hours1 > -4) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed1 + " hours into Xi 1! Pain? Tick!";
  }

  else if (hours1 > -7) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed1 + " hours into Xi 1! Pain? Tick! Misery? Tick!";
  }

  else if (hours1 > -10) {
    document.getElementById("countdown").innerHTML = "It is NT Time! We are " + elapsed1 + " hours into Xi 1! Pain? Tick! Misery? Tick! Reverence of our glorious eternal leader? Tick!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The UK has " + chock2 + " octillion cases of chock. Reality is an illusion, the universe is a hologram, buy toilet roll!";
  }

  //else {
    //document.getElementById("countdown").innerHTML = "Farewell ChockClock, you've been a friend throughout. BBB! Reality is an illusion, the universe is a hologram, buy toilet roll! - ChockClock, 2020-2021";
  //}

},1);

// This is ~75% of the banner change - post-lockdown, I will change it to 100%, by permanently replacing the chockclock with "Welcome to NT - the next train at platform DAI will be..."
