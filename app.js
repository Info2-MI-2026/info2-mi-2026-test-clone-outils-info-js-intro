// =============================================================
//  PARTIE 2 — JavaScript dans le navigateur
//  Prérequis : avoir ajouté <script src="app.js"></script>
//              dans index.html juste avant </body>
//  Console    : F12 → onglet "Console"
// =============================================================


// -------------------------------------------------------------
// Exercice 1 — Sélectionner des éléments
//
// a) Sélectionner l'élément dont l'id est "message" avec
//    getElementById et l'afficher dans la console.
//
// b) Faire la même chose avec querySelector("#message").
//    Quelle est la différence entre les deux ?
//
// c) Sélectionner tous les éléments ayant la classe "info"
//    avec querySelectorAll(".info") et afficher le résultat.
//    Remarquer que ce n'est pas un tableau ordinaire.
// -------------------------------------------------------------

const messageById = document.getElementById("message")
console.log(messageById)

const messageByQuery = document.querySelector("#message")
console.log(messageByQuery)

const infoElements = document.querySelectorAll(".info")
console.log(infoElements)

// -------------------------------------------------------------
// Exercice 2 — Événement click : changer un texte
//
// Sélectionner le bouton #btn-change et lui ajouter un
// écouteur d'événement "click".
// Au clic, modifier le texte du paragraphe #status.
// Utiliser la propriété textContent (pas innerHTML).
//
// Syntaxe de base :
//   element.addEventListener("click", () => {
//     // code exécuté au clic
//   })
// -------------------------------------------------------------

const btnChange = document.getElementById("btn-change")
const statusEl = document.getElementById("status")

btnChange.addEventListener("click", () => {
  statusEl.textContent = "Le texte a été modifié !"
})

// -------------------------------------------------------------
// Exercice 3 — Ajouter et retirer une classe CSS
//
// Sélectionner le bouton #btn-validate, l'input #username,
// et lui ajouter un écouteur "click".
//
// Au clic :
//   - Si la valeur de l'input fait moins de 3 caractères :
//       → ajouter la classe "error" à l'input
//       → (le message d'erreur apparaît automatiquement via CSS)
//
//   - Sinon :
//       → retirer la classe "error" de l'input
//       → afficher dans la console "Pseudo valide : ..."
//
// Propriétés utiles :
//   input.value          → la valeur saisie (string)
//   input.value.length   → sa longueur
//   element.classList.add("class-name")
//   element.classList.remove("class-name")
// -------------------------------------------------------------

const btnValidate = document.getElementById("btn-validate")
const username = document.getElementById("username")

btnValidate.addEventListener("click", () => {
  if (username.value.length < 3) {
    username.classList.add("error")
  } else {
    username.classList.remove("error")
    console.log("Pseudo valide :", username.value)
  }
})

// -------------------------------------------------------------
// Exercice 4 — Événement survol : mouseenter / mouseleave
//
// Sélectionner la div #movie-card.
//
// a) Ajouter un écouteur "mouseenter" : quand la souris entre
//    dans l'élément, ajouter la classe "highlighted".
//
// b) Ajouter un écouteur "mouseleave" : quand la souris quitte
//    l'élément, retirer la classe "highlighted".
//
// Observer le changement visuel défini dans style.css.
//
// Note : on pourrait faire la même chose en CSS pur avec :hover.
//        Ici on le fait en JS pour comprendre le mécanisme
//        des événements — Vue repose sur ce même principe.
// -------------------------------------------------------------

const movieCard = document.getElementById("movie-card")

movieCard.addEventListener("mouseenter", () => {
  movieCard.classList.add("highlighted")
})

movieCard.addEventListener("mouseleave", () => {
  movieCard.classList.remove("highlighted")
})
