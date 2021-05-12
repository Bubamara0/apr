// script banderole cookie
var acces2 = undefined;
readcookie();
function readcookie() {
  var name = "test_cookie=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      acces2 = c.substring(name.length, c.length);
    }
  }
}
if (acces2 == 1) {
  $("#boxcookie").addClass("sm_hidden");
}
$("#okcookie").click(function () {
  $("#boxcookie").addClass("sm_hidden");
  var exdays = 30;
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "test_cookie=1; expires=" + expires + "; path=/";
  acces2 = 1;
  readcookie();
});
$("#nocookie").click(function () {
  $("#boxcookie").addClass("sm_hidden");
});
