const hamburger = document.getElementById("hamburgerMenu")
const sideNav = document.getElementById("sideNav")
const crossBtn = document.getElementById("crossBar")

hamburger.addEventListener("click", displaySide)
crossBtn.addEventListener("click", crossBar)

function displaySide(){
  sideNav.style.display = "block"
}

function crossBar(){
  sideNav.style.display = "none"
}


