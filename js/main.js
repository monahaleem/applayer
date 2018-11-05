function myFunction() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block" ) {
      x.style.display = "none";
    } else {
      x.style.display = "block";    
      document.getElementsByClassName("icon").display="contents";
      }
  }
  onkeydown="keydownFunction()" onkeyup="keyupFunction()"
