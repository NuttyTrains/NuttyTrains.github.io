function More() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("MoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show Station List"; 
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Hide Station List"; 
    moreText.style.display = "inline";
  }
}

function StationNumber() {
  var x =document.getElementById("Stations").rows.length -1;
    return "We have visited " + x + " stations";
}

function TubeMore() {
  var tubedots = document.getElementById("tubedots");
  var tubemoreText = document.getElementById("tubemore");
  var tubebtnText = document.getElementById("TubeMoreBtn");

  if (tubedots.style.display === "none") {
    tubedots.style.display = "inline";
    tubebtnText.innerHTML = "Show Tube Station List"; 
    tubemoreText.style.display = "none";
  } 
  else {
    tubedots.style.display = "none";
    tubebtnText.innerHTML = "Hide Tube Station List"; 
    tubemoreText.style.display = "inline";
  }
}

function TubeStationNumber() {
  var x = document.getElementById("TubeStations").rows.length -1;
    return "We have visited " + x + " Tube Stations";
}

function SteamMore() {
  var steamdots = document.getElementById("steamdots");
  var steammoreText = document.getElementById("steammore");
  var steambtnText = document.getElementById("SteamMoreBtn");

  if (steamdots.style.display === "none") {
    steamdots.style.display = "inline";
    steambtnText.innerHTML = "Show Heritage Station List"; 
    steammoreText.style.display = "none";
  } 
  else {
    steamdots.style.display = "none";
    steambtnText.innerHTML = "Hide Heritage Station List"; 
    steammoreText.style.display = "inline";
  }
}

function SteamStationNumber() {
  var x = document.getElementById("SteamStations").rows.length -1;
    return "We have visited " + x + " Heritage Stations";
}

function IkeaMore() {
  var ikeadots = document.getElementById("ikeadots");
  var ikeamoreText = document.getElementById("ikeamore");
  var ikeabtnText = document.getElementById("IkeaMoreBtn");

  if (ikeadots.style.display === "none") {
    ikeadots.style.display = "inline";
    ikeabtnText.innerHTML = "Show IKEA List"; 
    ikeamoreText.style.display = "none";
  } 
  else {
    ikeadots.style.display = "none";
    ikeabtnText.innerHTML = "Hide IKEA List"; 
    ikeamoreText.style.display = "inline";
  }
}

function IkeaNumber() {
  var x = document.getElementById("IKEA").rows.length -1;
    return "We have visited " + x + " IKEAs";
}

function ChockMore() {
  var chockdots = document.getElementById("chockdots");
  var chockmoreText = document.getElementById("chockmore");
  var chockbtnText = document.getElementById("ChockMoreBtn");

  if (chockdots.style.display === "none") {
    chockdots.style.display = "inline";
    chockbtnText.innerHTML = "Show Chock Station List"; 
    chockmoreText.style.display = "none";
  } 
  else {
    chockdots.style.display = "none";
    chockbtnText.innerHTML = "Hide Chock Station List"; 
    chockmoreText.style.display = "inline";
  }
}

function ChockNumber() {
  var x = document.getElementById("Chock").rows.length -1;
    return "We have visited " + x + " Stations during The Chock<sup>TM</sup>";
}
