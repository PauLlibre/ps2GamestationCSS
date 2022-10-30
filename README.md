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

## 📝 TABLA DE CONTENIDOS

- [About](#about)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Recreación de una consola PS2 utilizando solamente codigo HTML y CSS, usando también JS para dar funcionalidades simples a algunos de los botones.
El objetivo de este proyecto es demostrar las posibilidades que ofrece CSS para el diseño de objetos y páginas, usando distintas herramientas de posicionamiento, flex etc...

## 🏁 Getting Started <a name = "getting_started"></a>

El proyecto está publicado en GitHub Pages, pero también se puede pullear des de GitHub si así se prefiere.
Simplemente hacer git pull del proyecto, no hay ninguna dependencia a descargar ni nada por el estilo, debería ser posible lanzar el archivo index.html solo al descargarlo.

Github pages: https://shuii18.github.io/ps2GamestationCSS/

## 🎈 Usage <a name="usage"></a>

La página se comprende de dos elementos principales, la consola PS2 y un monitor.

### Consola ps2

La consola cuenta con dos botones en la parte superior uno de encendido y otro de eject.

- El botón de encendido encenderá la consola pero no se podrá hacer nada a no ser que se encienda también el monitor.
- El botón de eject es el que en la consola original tenía la funcionalidad de abrir el compartimento de CD para poner el juego deseado, en nuestro caso pulsarlo simplemente hará que su luz parpadee una vez en azul y se apague.
- También encontramos los inputs para los dos controles que simplemente activan la funcion hover como si hicieran algo pero su funcionalidad todavia no ha sido añadida.

### Monitor

El monitor consta de una pantalla y dos botones en la parte inferior, uno de encendido y el otro de apagado.
Simplemente encienden y apagan el monitor.

### Funcionalidad

La pagina tiene distintas funciones dependiendo de la combinación de botones que estén activos:

- Si el boton de encendido de la ps2 está encendido y el monitor también podremos ver la animación de incio de la ps2 con su sonido.
- Si el boton de encendido de la ps2 está apagado y el monitor está encendido veremos la pantalla encendida sin señal y también oiremos el sonido habitual de los monitores antiguos al no tener señal.

## ⛏️ Built Using <a name = "built_using"></a>

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Estructura
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Diseño
- [JavaScript](https://www.javascript.com) - Funcionalidad

## ✍️ Authors <a name = "authors"></a>

- [@shuii18](https://github.com/shuii18) - Idea & Desarrollo
