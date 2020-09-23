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

function DLRMore() {
  var dlrdots = document.getElementById("dlrdots");
  var dlrmoreText = document.getElementById("dlrmore");
  var dlrbtnText = document.getElementById("DLRMoreBtn");

  if (dlrdots.style.display === "none") {
    dlrdots.style.display = "inline";
    dlrbtnText.innerHTML = "Show DLR Station List"; 
    dlrmoreText.style.display = "none";
  } 
  else {
    dlrdots.style.display = "none";
    dlrbtnText.innerHTML = "Hide DLR Station List"; 
    dlrmoreText.style.display = "inline";
  }
}

function DLRStationNumber() {
  var x = document.getElementById("DLRStations").rows.length -1;
    return "We have visited " + x + " DLR Stations";
}

function OrangeMore() {
  var orangedots = document.getElementById("orangedots");
  var orangemoreText = document.getElementById("orangemore");
  var orangebtnText = document.getElementById("OrangeMoreBtn");

  if (orangedots.style.display === "none") {
    orangedots.style.display = "inline";
    orangebtnText.innerHTML = "Show Overground Station List"; 
    orangemoreText.style.display = "none";
  } 
  else {
    orangedots.style.display = "none";
    orangebtnText.innerHTML = "Hide Overground Station List"; 
    orangemoreText.style.display = "inline";
  }
}

function OrangeStationNumber() {
  var x = document.getElementById("OrangeStations").rows.length -1;
    return "We have visited " + x + " Overground Stations";
}

function PurpMore() {
  var purpdots = document.getElementById("purpdots");
  var purpmoreText = document.getElementById("purpmore");
  var purpbtnText = document.getElementById("PurpMoreBtn");

  if (purpdots.style.display === "none") {
    purpdots.style.display = "inline";
    purpbtnText.innerHTML = "Show Purple Station List"; 
    purpmoreText.style.display = "none";
  } 
  else {
    purpdots.style.display = "none";
    purpbtnText.innerHTML = "Hide Purple Station List"; 
    purpmoreText.style.display = "inline";
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
