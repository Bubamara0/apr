const btn = document.querySelector("#btn");

function sendMail() {
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const message = document.querySelector("#message").value;
  console.log(name, mail, message);
  message.replace(/(?:\r\n|\r|\n)/g, "%0D%0A");

  // encoder des sauts de ligne pour la boite mail
  window.location.href = `mailto:cindy.b@institutsolacroup.com?subject=contact - ${name} &body=${message}`;
  window.location.reload(false);
  return false;
}

btn.addEventListener("click", () => {
  sendMail();
});
