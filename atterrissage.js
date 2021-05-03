
function change(){
  if (window.document.formListe.liste.selectedIndex != 0)
  window.location = window.document.formListe.liste.options
    [document.formListe.liste.selectedIndex].value
}

