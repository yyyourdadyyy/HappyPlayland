function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active-burger");
  
    var bars = document.querySelectorAll(".bar");
    bars.forEach(function(bar) {
      bar.classList.toggle("active-burgerR");
    });
  }