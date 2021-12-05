var Epsilon = new Date("Dec 20 2021 11:45:00").getTime();
var Xmas = new Date("Dec 25, 2021 00:00:00").getTime();
var NYE = new Date("Jan 01, 2022 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceE = (Epsilon - now)/1000;
  var distanceX = (Xmas - now)/1000;
  var distance22 = (NYE - now)/1000;

  //var daysE = Math.ceil(distanceE / 86400);
  var hoursE2 = Math.ceil(distanceE / 3600);
  var elapsedE = -1*hoursE2;
  var daysE = Math.floor(distanceE / 86400);
  var hoursE = Math.floor((distanceE % 86400) / 3600);
  var minsE = Math.floor((distanceE % 3600) / 60);
  var secsE = Math.floor(distanceE % 60);
  var daysX = Math.floor(distanceX / 86400);
  var hoursX = Math.floor((distanceX % 86400) / 3600);
  var minsX = Math.floor((distanceX % 3600) / 60);
  var secsX = Math.floor(distanceX % 60);
  var days22 = Math.floor(distance22 / 86400);
  var hours22 = Math.floor((distance22 % 86400) / 3600);
  var mins22 = Math.floor((distance22 % 3600) / 60);
  var secs22 = Math.floor(distance22 % 60);

  var IoW = ["in Exeter!", "in Exeter!", "travelling to Chocky City!", "in Chocky City!", "travelling to Southampton!", "travelling to Portsmouth!", "in Portsmouth!", "in Portsmouth!", "crossing the Solent!", "on the Island Line!", "in Shanklin Premier Inn.", "in Shanklin Premier Inn.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "on the Isle of Wight!", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "sleeping.", "going to see Father Christmas!", "going to see Father Christmas!", "going to see Father Christmas!", "going to see Father Christmas!", "going to see Father Christmas!", "going to see Father Christmas!", "leaving the Isle of Wight!", "crossing the Solent!", "back in Portsmouth!"]

  //if (daysK9 > 1) {
    //document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysK9 + " days is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  //}
 
  //else if (hoursK9 > 0) {
    //document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursK9 + " hours is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  //}
 
  //else if (hoursK9 > -8) {
    //document.getElementById("countdown").innerHTML = "We are " + elapsedK9 + " hours into KOPPA 9! The train arriving at PLATFORM DAI is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  //}

  if ((daysE > 1) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Check out the new <a href='https://www.youtube.com/playlist?list=PL_j-qqG4iXvqASbvqtkY5Zbx-wg7ydTT4'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days! NT Epsilon is in " + daysE + " days!";
  }
 
  else if (daysE > 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days! NT Epsilon is in " + daysE + " days!";
  }

  else if ((daysE == 1) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Check out the new <a href='https://www.youtube.com/playlist?list=PL_j-qqG4iXvqASbvqtkY5Zbx-wg7ydTT4'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days! NT Epsilon is in " + daysE + " day and " + hoursE + " hours!";
  }
 
  else if (daysE == 1) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days! NT Epsilon is in " + daysE + " day and " + hoursE + " hours!";
  }

  else if ((daysE == 0) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "NT Epsilon is in " + hoursE + " hours, " + minsE + " minutes and " + secsE + " seconds! Check out the new <a href='https://www.youtube.com/playlist?list=PL_j-qqG4iXvqASbvqtkY5Zbx-wg7ydTT4'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days!";
  }
 
  else if (daysE == 0) {
    document.getElementById("countdown").innerHTML = "NT Epsilon is in " + hoursE + " hours, " + minsE + " minutes and " + secsE + " seconds! Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days!";
  }

  else if ((hoursE2 > -52) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedE + " hours into NT Epsilon! We are currently " + IoW[elapsedE] + " Check out the new <a href='https://www.youtube.com/playlist?list=PL_j-qqG4iXvqASbvqtkY5Zbx-wg7ydTT4'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days!";
  }
 
  else if (hoursE2 > -52) {
    document.getElementById("countdown").innerHTML = "We are " + elapsedE + " hours into NT Epsilon! We are currently " + IoW[elapsedE] + " Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days!";
  }
 
  else if ((daysX > 0) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Check out the new <a href='https://www.youtube.com/playlist?list=PL_j-qqG4iXvqASbvqtkY5Zbx-wg7ydTT4'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days and " + hoursX + " hours!";
  }
 
  else if (daysX > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days and " + hoursX + " hours!";
  }
 
  else if (daysX == 0) {
    if (hoursX > 13) {
      document.getElementById("countdown").innerHTML = "Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + hoursX + " hours, " + minsX + " minutes and " + secsX + " seconds! Check out the NT Santa Tracker!";
    }

    else if ((hoursX < 14) && (hoursX > 6)) {
      document.getElementById("countdown").innerHTML = "Check out the new <a href='https://www.youtube.com/playlist?list=PL_j-qqG4iXvqASbvqtkY5Zbx-wg7ydTT4'> Nutty Trains Advent Calendar </a> video! Christmas is in " + hoursX + " hours, " + minsX + " minutes and " + secsX + " seconds! Check out the NT Santa Tracker!";
    }

    else if (hoursX > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Christmas is in " + hoursX + " hours, " + minsX + " minutes and " + secsX + " seconds! Check out the NT Santa Tracker!";
    }
  
    else if (minsX > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Christmas is in " + minsX + " minutes and " + secsX + " seconds! Check out the NT Santa Tracker!";
    }
  
    else if (secsX > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Christmas is in " + secsX + " seconds! Check out the NT Santa Tracker!";
    }
  }

  else if (daysX > -3){
    document.getElementById("countdown").innerHTML = "Happy Christmas from Nutty Trains!";
  }

  else if (days22 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! 2021 ends in " + days22 + " days, " + hours22 + " hours, " + mins22 + " minutes and " + secs22 + " seconds!";
  }

  else if (days22 == 0) {
    if (hours22 > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to NT! 2021 ends in " + hours22 + " hours, " + mins22 + " minutes and " + secs22 + " seconds!";
    }
  
    else if (mins22 > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to NT! 2021 ends in " + mins22 + " minutes and " + secs22 + " seconds!";
    }
  
    else if (secs22 > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to NT! 2021 ends in " + secs22 + " seconds!";
    }
  }

  else if (days22 == -1) {
    if (hours22 > -10) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains!";
    }

    else if (hours22 > -13) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with NT Podcast 1, going live in " + (hours22 + 13) + " hours, " + (60 + mins22) + " minutes and " + (60 + secs22) + " seconds!";
    }

    else if (hours22 > -14) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with NT Podcast 1, going live in " + (60 + mins22) + " minutes and " + (60 + secs22) + " seconds!";
    }

    else {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with <a href='https://www.youtube.com/channel/UClR0hSe8ki-Wn9PD-2_gHdQ'> NT Podcast 1! </a>";
    }
  }

  else if (days22 > -4) {
    document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains!";
  }

  else {
    document.getElementById("countdown").innerHTML = "Welcome to NT!";
  }

},1000);
