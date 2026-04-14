// =============================================================
//  PARTIE 1 — JavaScript pur
//  Exécution : node exercices.js
//  Thème     : médiathèque de films
// =============================================================

// -------------------------------------------------------------
// Exercice 1
// Déclarer une constante 'movie1' contenant un objet avec les
// propriétés : id (number), title (string), year (number),
// genre (string), rating (number entre 0 et 10).
//
// Exemple de données :
//   id: 1, title: "Parasite", year: 2019, genre: "Thriller", rating: 8.5
// -------------------------------------------------------------

const movie1 = { id: 1, title: "Parasite", year: 2019, genre: "Thriller", rating: 8.5 }

// -------------------------------------------------------------
// Exercice 2
// Déclarer une constante 'movie2' avec un second film de votre choix.
// -------------------------------------------------------------

const movie2 = { id: 2, title: "Interstellar", year: 2014, genre: "Science-fiction", rating: 8.6 }

// -------------------------------------------------------------
// Exercice 3
// Créer un tableau 'catalog' qui contient movie1 et movie2.
// -------------------------------------------------------------

const catalog = [movie1, movie2]

// -------------------------------------------------------------
// Exercice 4
// Ajouter deux nouveaux films directement dans le tableau,
// sans créer de nouvelles variables.
// Utilisez un genre et une note différents de ceux déjà présents.
// -------------------------------------------------------------

catalog.push(
  { id: 3, title: "Get Out", year: 2017, genre: "Horreur", rating: 7.7 },
  { id: 4, title: "La La Land", year: 2016, genre: "Comédie musicale", rating: 8.0 }
)

// -------------------------------------------------------------
// Exercice 5 — template literals
// Afficher chaque film avec console.log dans ce format :
//   • [2019] Parasite — Thriller (8.5/10)
// Utilisez une boucle forEach et un template literal.
// -------------------------------------------------------------

catalog.forEach(movie => console.log(`• [${movie.year}] ${movie.title} — ${movie.genre} (${movie.rating}/10)`))

// -------------------------------------------------------------
// Exercice 6 — arrow function
// Créer une arrow function 'formatMovie' qui prend un film
// en paramètre et retourne la chaîne formatée de l'exercice 5.
// Vérifier en appelant formatMovie(movie1) et en affichant le résultat.
// -------------------------------------------------------------

const formatMovie = movie => `• [${movie.year}] ${movie.title} — ${movie.genre} (${movie.rating}/10)`

console.log(formatMovie(movie1))

// -------------------------------------------------------------
// Exercice 7 — map
// Utiliser map sur 'catalog' pour obtenir un tableau de toutes
// les chaînes formatées, puis afficher chaque ligne.
// Ne pas réécrire la logique de formatage : réutiliser formatMovie.
// -------------------------------------------------------------

catalog.map(formatMovie).forEach(line => console.log(line))

// -------------------------------------------------------------
// Exercice 8 — filter
// Créer un tableau 'highRated' contenant uniquement les films
// avec une note supérieure ou égale à 8.
// Afficher le nombre de films trouvés et leurs titres.
// -------------------------------------------------------------

const highRated = catalog.filter(movie => movie.rating >= 8)
console.log(highRated.length, "films trouvés")
highRated.forEach(movie => console.log(movie.title))

// -------------------------------------------------------------
// Exercice 9 — find
// Écrire une fonction 'findById' qui prend un id en paramètre
// et retourne le film correspondant, ou undefined si introuvable.
// Tester avec un id qui existe et un id qui n'existe pas.
// Afficher le résultat avec optional chaining :
//   console.log(result?.title ?? "Film introuvable")
// -------------------------------------------------------------

const findById = id => catalog.find(movie => movie.id === id)

const result1 = findById(1)
console.log(result1?.title ?? "Film introuvable")

const result2 = findById(99)
console.log(result2?.title ?? "Film introuvable")

// -------------------------------------------------------------
// Exercice 10 — sort + déstructuration
// Trier le catalogue par note décroissante (meilleure note en premier).
// Attention : sort modifie le tableau original. Utilisez le spread
// operator pour trier une copie : [...catalog].sort(...)
// Afficher les titres dans l'ordre en utilisant la déstructuration :
//   for (const { title, rating } of sortedCatalog) { ... }
// -------------------------------------------------------------

const sortedCatalog = [...catalog].sort((a, b) => b.rating - a.rating)

for (const { title, rating } of sortedCatalog) {
  console.log(`${title} — ${rating}/10`)
}
