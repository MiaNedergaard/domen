/* NAVBAR SCROLL EFFECT */
const body = document.body;
let lastScroll = 0;

//SCROLL NAVBAR
window.addEventListener('resize', () => {
    document.getElementById('responsive-nav').className = 'responsive-nav';
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    document.getElementById('responsive-nav').className = 'responsive-nav';

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

// FAQ

var acc = document.getElementsByClassName("foldud");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Åbningstider - lavet med array

let a = [
    "Mandag - Torsdag: 10:00 - 18:00",
    "Fredag - lørdag: 10:00 - 20:00",
    "Søndag: 10:00 - 18:00",
  ]
  
  for (showMe in a){
    åbningstider.innerHTML += '<li>' + a [ showMe ] + '</li>';
  
  }

// Mapbox i footer

mapboxgl.accessToken = 'pk.eyJ1IjoibWlhbmVkZXJnYWFyZCIsImEiOiJjbDBxZWNqcW4yNWhzM2Vwd2l5MmwwMHZjIn0.qtSZbLPjUQ336Kvoq07YqQ'; 
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mianedergaard/cl3cucxon000015nmun6v6jf6', 
  center: [10.21854, 56.15885],
  zoom: 13.7
});