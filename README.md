<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="imgs/ps2-logo.png" alt="Project logo"></a>
</p>

<h3 align="center">PS2 GAMESTATION CSS</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project is a recreation of a PS2 console using only HTML and CSS, with the help of JavaScript to give simple functionalities to some of the buttons. The goal of this project is to demonstrate the possibilities offered by CSS for designing objects and pages, using different positioning, flex, etc. tools.

## 🏁 Getting Started <a name = "getting_started"></a>

The project is published on GitHub Pages, but you can also pull it from GitHub if you prefer. Simply run a `git pull` on the project, there are no dependencies to download or anything like that, you should be able to launch the `index.html` file just by downloading it.

Github pages: https://shuii18.github.io/ps2GamestationCSS/

## 🎈 Usage <a name="usage"></a>

The page consists of two main elements, the PS2 console and a monitor.

### PS2 Console

The console has two buttons on the top, one for power and the other for eject.

- The power button will turn on the console, but nothing can be done unless the monitor is also turned on.
- The eject button has the functionality of opening the CD compartment to put the desired game in the original console, in our case pressing it will simply make its light blink once in blue and then turn off.
- We also find the inputs for the two controllers, which simply activate the hover function as if they were doing something, but their functionality has not been added yet.

### Monitor

The monitor consists of a screen and two buttons at the bottom, one for power and the other for off.
They simply turn the monitor on and off.

### Functionality

The page has different functions depending on the combination of active buttons:

- If the power button of the PS2 is turned on and the monitor is also turned on, we will be able to see the PS2 start-up animation with its sound.
- If the PS2 power button is off and the monitor is turned on, we will see the screen on without a signal and we will also hear the sound of old monitors when there is no signal.

## ⛏️ Built Using <a name = "built_using"></a>

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Structure
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Design
- [JavaScript](https://www.javascript.com) - Functionality

## ✍️ Authors <a name = "authors"></a>

- [@shuii18](https://github.com/shuii18) - Idea & Development
