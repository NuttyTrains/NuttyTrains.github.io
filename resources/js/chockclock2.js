var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
  var days2 = distance / (86400);

  var chocky = 66 * Math.exp(distance/290000);
  var chockK = chocky/1000;
  var chockM = chockK/1000;
  var chockB = chockM/1000;
  var chockT = chockB/1000;
  var chockQu = chockT/1000;
  var chockQ = chockQu/1000;
  var chockSx = chockQ/1000;
  var chockSp = chockSx/1000;
  var chockO = chockSp/1000;
  var chockN = chockO/1000;
  var chockD = chockN/1000;
  var chockUD = chockD/1000;
  var chockDD = chockUD/1000;
  var chockTD = chockDD/1000;
  var chockQuD = chockTD/1000;
  var chockQD = chockQuD/1000;
  var chockSD = chockQD/1000;
  var chockSpD = chockSD/1000;
  var chockOD = chockSpD/1000;
  var chockND = chockOD/1000;
  var chockV = chockND/1000;
  var chockUV = chockV/1000;
  var chockDV = chockUV/1000;
  var chockTV = chockDV/1000;
  var chockQuV = chockTV/1000;
  var chockQV = chockQuV/1000;
  var chockSV = chockQV/1000;
  var chockSpV = chockSV/1000;
  var chockOV = chockSpV/1000;
  var chockNV = chockOV/1000;
  var chockTr = chockNV/1000;
  var chock = Math.floor(chockTD);

  var anarchy = Math.ceil((290000/86400)*Math.log(68000000/66)) - days;
  

document.getElementById("countdown").innerHTML = " The UK has " + chock + " tredecillion chock cases. We're all going to die and turn to 不好猫 in " + anarchy + " days. Reality is an illusion, the universe is a hologram, buy toilet roll!"; 
},1000);
