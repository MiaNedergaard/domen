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

// SIDENAVIGATION - FARVE PÅ FØRSTE NAV-PRIK

var elems = document.querySelectorAll('#d1 a');   //  find alle a-tags inde i #d1         
elems[0].className = 'selected';                  //  giv farve til første a-tag (nav-prik)           

// ---------- SIDENAVIGATION FARVESKIFT PÅ SCROLL ----------
    window.addEventListener("scroll", function() {
      
        if (elFllVsbl(document.getElementById("dome"))) {
            document.getElementById("op1").style.backgroundColor = 'rgb(185, 121, 68)';
            document.getElementById("op2").style.backgroundColor = '';

        }
        else if (elFllVsbl(document.getElementById("overskrift1")) || elFllVsbl(document.getElementById("knap1"))) {
            document.getElementById("op2").style.backgroundColor = 'rgb(185, 121, 68)';
            document.getElementById("op1").style.backgroundColor = '';
            //fjerner startfarven fra første nav-prik
            document.querySelector('.selected').className = 'class';
        }
        else if (elFllVsbl(document.getElementById("video"))) {
            document.getElementById("op3").style.backgroundColor = 'rgb(185, 121, 68)';
            document.getElementById("op4").style.backgroundColor = '';
        }
        else if (elFllVsbl(document.getElementById("slider-prik"))) {
            document.getElementById("op4").style.backgroundColor = 'rgb(185, 121, 68)';
            document.getElementById("op3").style.backgroundColor = '';
        }
        else if (elFllVsbl(document.getElementById("overskrift5"))) {
            document.getElementById("op5").style.backgroundColor = 'rgb(185, 121, 68)';
        }
        else if (elFllVsbl(document.getElementById("anmeldelser-scroll")) || elFllVsbl(document.getElementById("anmeldelse-slut"))) {
            document.getElementById("op6").style.backgroundColor = 'rgb(185, 121, 68)';
        }
        else {
            document.getElementById("op1").style.backgroundColor = '';
            document.getElementById("op2").style.backgroundColor = '';
            document.getElementById("op3").style.backgroundColor = '';
            document.getElementById("op4").style.backgroundColor = '';
            document.getElementById("op5").style.backgroundColor = '';
            document.getElementById("op6").style.backgroundColor = '';
        }
    })

  function elFllVsbl(el) {
    return (
      el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
  }

// ---------- SLIDER SCROLL HORISONTALT ----------

(function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();

// SØG FUNKTION ENTER

var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // Fjern default action
    event.preventDefault();
    // Gå til error på klik på enter
    window.location.href = "error.html";
  }
});

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
