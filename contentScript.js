// contentScript.js

// Funzione per BOMBARDARE i popup
function removeElement() {
  var elementoDaRimuovere = document.querySelector('ytd-enforcement-message-view-model');
  if (elementoDaRimuovere) {
    elementoDaRimuovere.remove();
    console.log("Elemento rimosso!");
  }
}
// Aggiungo un listener perché si
document.addEventListener('DOMSubtreeModified', removeElement);

removeElement();
