const openNav=()=> {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
      var y = document.getElementById("closeNavbar")
      y.className = "visible";
      x.className += " responsive";
  }
}

const  closeNav=()=> {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar responsive") {
      var y = document.getElementById("closeNavbar")
      y.className = "close";
      x.className = "navbar";
  }
}
console.log("hello")