var countDownDate = new Date("Mar 05, 2020 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (now - countDownDate)/1000;
  var days = Math.floor(distance / (86400));

  var chocky = 66 * Math.exp(distance/290000);
  var chock = chocky.toExponential(6);
  var anarchy = Math.ceil((290000/86400)*Math.log(68000000/66)) - days;
  
// Fucking build properly, you useless piece of shite
document.getElementById("countdown").innerHTML = " The UK has " + chock + " chock cases. We're all going to die and turn to anarchy in " + anarchy + " days. Reality is an illusion, the universe is a hologram, buy toilet roll!"; 
},1);
