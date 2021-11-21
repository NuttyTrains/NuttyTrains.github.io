var Aleph26 = new Date("Nov 20, 2021 07:00:00").getTime();
var Aleph27 = new Date("Nov 24, 2021 13:00:00").getTime();
var Koppa9 = new Date("Dec 01, 2021 10:00:00").getTime();
var Xmas = new Date("Dec 25, 2021 00:00:00").getTime();
var NYE = new Date("Jan 01, 2022 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceA26 = (Aleph26 - now)/1000;
  var distanceA27 = (Aleph27 - now)/1000;
  var distanceK9 = (Koppa9 - now)/1000;
  var distanceX = (Xmas - now)/1000;
  var distance22 = (NYE - now)/1000;

  //var daysK9 = Math.ceil(distanceK9 / 86400);
  //var hoursK9 = Math.ceil(distanceK9 / 3600);
  //var elapsedK9 = -1*hoursK9;
  var daysA26 = Math.floor(distanceA26 / 86400);
  var hoursA26 = Math.floor((distanceA26 % 86400) / 3600);
  var minsA26 = Math.floor((distanceA26 % 3600) / 60);
  var secsA26 = Math.floor(distanceA26 % 60);
  var daysA27 = Math.floor(distanceA27 / 86400);
  var hoursA27 = Math.floor((distanceA27 % 86400) / 3600);
  var minsA27 = Math.floor((distanceA27 % 3600) / 60);
  var secsA27 = Math.floor(distanceA27 % 60);
  var daysK9 = Math.floor(distanceK9 / 86400);
  var hoursK9 = Math.floor((distanceK9 % 86400) / 3600);
  var minsK9 = Math.floor((distanceK9 % 3600) / 60);
  var secsK9 = Math.floor(distanceK9 % 60);
  var daysX = Math.floor(distanceX / 86400);
  var hoursX = Math.floor((distanceX % 86400) / 3600);
  var minsX = Math.floor((distanceX % 3600) / 60);
  var secsX = Math.floor(distanceX % 60);
  var days22 = Math.floor(distance22 / 86400);
  var hours22 = Math.floor((distance22 % 86400) / 3600);
  var mins22 = Math.floor((distance22 % 3600) / 60);
  var secs22 = Math.floor(distance22 % 60);

  //if (daysK9 > 1) {
    //document.getElementById("countdown").innerHTML = "Welcome to NT! The next train to arrive at PLATFORM DAI in " + daysK9 + " days is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  //}
 
  //else if (hoursK9 > 0) {
    //document.getElementById("countdown").innerHTML = "Welcome to NT! The train arriving at PLATFORM DAI in " + hoursK9 + " hours is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  //}
 
  //else if (hoursK9 > -8) {
    //document.getElementById("countdown").innerHTML = "We are " + elapsedK9 + " hours into KOPPA 9! The train arriving at PLATFORM DAI is the KOPPA 9 service to BATTERSEA POWER STATION STATION, calling at COCKFOSTERS, HAMMERSMITH, BROMPTON and NINE ELMS";
  //}

  if (daysA26 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds! The next train to arrive at PLATFORM DAI in " + daysA26 + " days is the ALEPH 26 service to OKEHAMPTON";
  }

  else if (daysA26 == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursA26 + " hours, " + minsA26 + " minutes and " + secsA26 + " seconds is the ALEPH 26 service to OKEHAMPTON! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds!";
  }

  else if ((daysA26 == -1) && (hoursA26 > -12)) {
    document.getElementById("countdown").innerHTML = "Welcome to Aleph 26! James is currently riding the Okehampton line and pestering Geoff and Vicki! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds!";
  }

  else if (daysA27 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds! The next train to arrive at PLATFORM DAI in " + daysA27 + " days is the ALEPH 27 service to AYLESBURY";
  }

  else if (daysA27 == 0) {
    document.getElementById("countdown").innerHTML = "The train arriving at PLATFORM DAI in " + hoursA27 + " hours, " + minsA27 + " minutes and " + secsA27 + " seconds is the ALEPH 27 service to AYLESBURY! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds!";
  }

  else if ((daysA27 == -1) && (hoursA27 > -7)) {
    document.getElementById("countdown").innerHTML = "Welcome to Aleph 27! Matthew is currently exploring the Chiltern Depot with RailSoc in Aylesbury! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds!";
  }

  else if (daysK9 > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! The Nutty Trains Advent Calendar goes live in " + daysK9 + " days, " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds!";
  }

  else if (daysK9 == 0) {
    if (hoursK9 > 0) {
      document.getElementById("countdown").innerHTML = "The Nutty Trains Advent Calendar goes live in " + hoursK9 + " hours, " + minsK9 + " minutes and " + secsK9 + " seconds!";
    }
  
    else if (minsK9 > 0) {
      document.getElementById("countdown").innerHTML = "The Nutty Trains Advent Calendar goes live in " + minsK9 + " minutes and " + secsK9 + " seconds!";
    }
  
    else if (secsK9 > 0) {
      document.getElementById("countdown").innerHTML = "The Nutty Trains Advent Calendar goes live in " + secsK9 + " seconds! What are you waiting for? Head to the NT Youtube channel!";
    }
  }
 
  else if ((daysX > 5) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Check out the new <a href='https://www.youtube.com/channel/UClR0hSe8ki-Wn9PD-2_gHdQ'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days!";
  }
 
  else if (daysX > 5) {
    document.getElementById("countdown").innerHTML = "Welcome to NT! Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days!";
  }
 
  else if ((daysX > 0) && (hoursX < 14) && (hoursX > 6)) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Check out the new <a href='https://www.youtube.com/channel/UClR0hSe8ki-Wn9PD-2_gHdQ'> Nutty Trains Advent Calendar </a> video! Christmas is in " + daysX + " days and " + hoursX + " hours!";
  }
 
  else if (daysX > 0) {
    document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + daysX + " days and " + hoursX + " hours!";
  }
 
  else if (daysX == 0) {
    if (hoursX > 13) {
      document.getElementById("countdown").innerHTML = "Our new Nutty Trains Advent Calendar video goes live in " + (hoursX + 10) % 24 + " hours, " + minsX + " minutes and " + secsX + " seconds! Christmas is in " + hoursX + " hours, " + minsX + " minutes and " + secsX + " seconds!";
    }

    else if ((hoursX < 14) && (hoursX > 6)) {
      document.getElementById("countdown").innerHTML = "Check out the new <a href='https://www.youtube.com/channel/UClR0hSe8ki-Wn9PD-2_gHdQ'> Nutty Trains Advent Calendar </a> video! Christmas is in " + hoursX + " hours, " + minsX + " minutes and " + secsX + " seconds!";
    }

    else if (hoursX > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Christmas is in " + hoursX + " hours, " + minsX + " minutes and " + secsX + " seconds!";
    }
  
    else if (minsX > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Christmas is in " + minsX + " minutes and " + secsX + " seconds!";
    }
  
    else if (secsX > 0) {
      document.getElementById("countdown").innerHTML = "Welcome to Nutty Trains! Christmas is in " + secsX + " seconds!";
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
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with NT Podcast 1, going live in " + hours22 + 13 + " hours, " + 60 + mins22 + " minutes and " + 60 + secs22 + " seconds!";
    }

    else if (hours22 > -14) {
      document.getElementById("countdown").innerHTML = "Happy New Year from Nutty Trains! Start your year off right with NT Podcast 1, going live in " + 60 + mins22 + " minutes and " + 60 + secs22 + " seconds!";
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
