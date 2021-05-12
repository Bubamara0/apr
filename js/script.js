
function change(){
  if (window.document.formListe.liste.selectedIndex != 0)
  window.location = window.document.formListe.liste.options
    [document.formListe.liste.selectedIndex].value
  else if (window.document.formListe2.liste2.selectedIndex != 0)
  window.location = window.document.formListe2.liste2.options
    [document.formListe2.liste2.selectedIndex].value
}






