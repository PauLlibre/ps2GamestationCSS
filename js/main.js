// VARIABLES DECLARE

let tvScreen = document.getElementById("tv");
let psOnButton = document.getElementById("onLight");
let psEjectButton = document.getElementById("ejectLight");

// LOOP SOUNDS

document.getElementById("startupSound").addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);
document.getElementById("staticSound").addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

// OPEN TV FUNCTION
function tvOn() {
  if (psOnButton.classList.contains("light-power") == true) {
    tvScreen.classList.add("screen-on-display");
    document.getElementById("startupSound").volume = 0.5;
    document.getElementById("startupSound").play();
  } else {
    tvScreen.classList.add("screen-on-noDisplay");
    document.getElementById("staticSound").volume = 0.05;
    document.getElementById("staticSound").play();
  }
}

// SHUT DOWN TV FUNCTION
function tvOff() {
  document.getElementById("tv").classList.remove("screen-on-display");
  document.getElementById("tv").classList.remove("screen-on-noDisplay");
  document.getElementById("staticSound").volume = 0;
  document.getElementById("startupSound").volume = 0;
}

// OPEN/CLOSE PS2
function openPs2() {
  if (psOnButton.classList.contains("light-power")) {
    psOnButton.classList.remove("light-power");
    document.getElementById("startupSound").volume = 0;
    if (tvScreen.classList.contains("screen-on-display")) {
      tvScreen.classList.remove("screen-on-display");
      tvScreen.classList.add("screen-on-noDisplay");
      document.getElementById("staticSound").volume = 0.05;
      document.getElementById("staticSound").play();
    }
  } else {
    psOnButton.classList.add("light-power");

    if (tvScreen.classList.contains("screen-on-noDisplay")) {
      tvScreen.classList.remove("screen-on-noDisplay");
      document.getElementById("staticSound").volume = 0;
      tvScreen.classList.add("screen-on-display");
      document.getElementById("startupSound").volume = 0.5;
      document.getElementById("startupSound").play();
    }
  }
}

// EJECT BUTTON

function ejectDisk() {
  for (let i = 0; i <= 3; i++) {
    psEjectButton.classList.add("light-eject");
    setTimeout(() => {
      psEjectButton.classList.remove("light-eject");
    }, 600);
  }
}
