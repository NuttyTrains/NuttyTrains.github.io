function More(dots, moreText, btnText, writing) {
  var dots1 = document.getElementById(dots);
  var moreText1 = document.getElementById(moreText);
  var btnText1 = document.getElementById(btnText);

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Show " + writing; 
    moreText1.style.display = "none";
  } 
  else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Hide " + writing; 
    moreText1.style.display = "inline";
  }
}