
// ######################################################################## MENTIONS LEGALES #########################################################

const button = document.querySelector(".pMentions");
const contenerButton = document.querySelector(".mentionsLegalesContener");

button.addEventListener("click", () => {
  if (getComputedStyle(contenerButton).display != "none") {
    contenerButton.style.display = "none";
  } else {
    contenerButton.style.display = "flex";
  }
});


