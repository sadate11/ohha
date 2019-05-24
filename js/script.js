var musicButton = document.getElementById('menu-music');
var aboutButton = document.getElementById('menu-about');
var pressButton = document.getElementById('menu-press');

var musicImage = document.getElementById('music-img');
var aboutImage = document.getElementById('about-img');
var pressImage = document.getElementById('press-img');

var menu = document.getElementsByClassName('menu-item');

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

aboutButton.addEventListener("mouseover", function() {
  aboutImage.style.display = "initial";
  musicImage.style.display = "none";
  pressImage.style.display = "none";
})

pressButton.addEventListener("mouseover", function() {
  aboutImage.style.display = "none";
  musicImage.style.display = "none";
  pressImage.style.display = "initial";
})

musicButton.addEventListener("mouseover", function() {
  aboutImage.style.display = "none";
  musicImage.style.display = "initial";
  pressImage.style.display = "none";
})

const albumCoverOne = document.getElementById('album-one');
const albumCoverTwo = document.getElementById('album-two');


function showPlaylistOne() {
  var x = document.getElementById("music-list-one");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showPlaylistTwo() {
  var x = document.getElementById("music-list-two");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Hide and show Band members info

function showOne() {
  var x = document.getElementById("info-one");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showTwo() {
  var x = document.getElementById("music-list-two");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showPlaylistThree() {
  var x = document.getElementById("music-list-two");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
