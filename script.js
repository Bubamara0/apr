function change() {
  if (window.document.formListe.liste.selectedIndex != 0)
    window.location =
      window.document.formListe.liste.options[
        document.formListe.liste.selectedIndex
      ].value;
  else if (window.document.formListe2.liste2.selectedIndex != 0)
    window.location =
      window.document.formListe2.liste2.options[
        document.formListe2.liste2.selectedIndex
      ].value;
}

const button = document.querySelector(".pMentions");
const contenerButton = document.querySelector(".mentionsLegalesContener");

button.addEventListener("click", () => {
  if (getComputedStyle(contenerButton).display != "none") {
    contenerButton.style.display = "none";
  } else {
    contenerButton.style.display = "flex";
  }
});

// ###################################################################### MENU BURGER
let navWrapper = document.querySelector(".nav-wrapper"),
  navToogler = document.querySelector(".nav-toogler");
navToogler.addEventListener("click", function (event) {
  navWrapper.classList.toggle("active");
});
// ###################################################################### Deuxième menu qui apparaît
function change() {
  if (window.document.formListe.liste.selectedIndex != 0)
    window.location =
      window.document.formListe.liste.options[
        document.formListe.liste.selectedIndex
      ].value;
}
window.addEventListener("scroll", () => {
  let menuDeux = document.querySelectorAll(".menuDeux")[0];
  let scroll = window.scrollY;
  let hauteur = 500;
  if (scroll >= 500) {
    menuDeux.style.visibility = "visible";
    menuDeux.style.opacity = "100%";
  } else {
    menuDeux.style.visibility = "hidden";
    menuDeux.style.opacity = "0%";
  }
});
//######################################################################## Formulaire d'envoie
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const message = document.querySelector("#message").value;
  message.replace(/(?:\r\n|\r|\n)/g, "%0D%0A");
  //encoder des sauts de ligne pour la boite mail
  window.location.href = `mailto:cindy.b@institutsolacroup.com?subject=contact - ${name} &body=${message}`;
  window.location.reload(false);
  return false;
});
// AUDIO CAMION
function playAudioKlaxon() {
  var x = document.getElementById("myKlaxon");
  x.play();
  return false;
}
function playAudioRoad() {
  var x = document.getElementById("myRoad");
  x.play();
}
