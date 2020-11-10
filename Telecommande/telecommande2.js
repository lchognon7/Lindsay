"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("cigales.wav"); // cigales // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/1335.mp3"); // tchin
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/1720.mp3"); // bouchon
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("valseuses.wav"); // Extrait les Valseuses
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
    let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/2127.mp3"); // glaçons
    bruit.play();
  });

  document.querySelector("main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
    let bruit = new Audio("petanque.wav"); // Petanque
    bruit.play();
  });