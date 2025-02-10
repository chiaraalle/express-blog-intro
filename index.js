/*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Testare su postman
*/

const express = require('express') //importo express
const app = express() //salvo il risultato in una variabile, inizializzo express invocandola come una funzione
const port = 3000 //Porta 3000: utilizzata in ambienti di sviluppo di applicazioni web.

//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
app.get('/', (req, res) => {  //definisco la prima rotta
  res.send('Server del mio blog')
})

//Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
app.get('/api/bacheca', (req, res) => {  
    //Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
    const posts = [
        {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "imgs/cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
          },
          {
            titolo: "Ciambellone",
            contenuto: "Un soffice e delizioso ciambellone perfetto per ogni occasione. Facile da preparare e ideale per la colazione.",
            immagine: "imgs/ciambellone.jpeg",
            tags: ["dolce", "colazione", "soffice"]
        },
        {
            titolo: "Pane Fritto Dolce",
            contenuto: "Pane fritto dolce con una spolverata di zucchero a velo. Un classico che non delude mai!",
            immagine: "imgs/pane_fritto_dolce.jpeg",
            tags: ["dolce", "fritto", "tradizione"]
        },
        {
            titolo: "Pasta alla Barbabietola",
            contenuto: "Pasta fresca con un'incredibile salsa alla barbabietola. Un piatto unico e colorato per ogni pranzo.",
            immagine: "imgs/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "piatto unico"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: "Una torta rustica che richiama i sapori della tradizione. Facile da preparare e ideale per una merenda in famiglia.",
            immagine: "imgs/torta_paesana.jpeg",
            tags: ["torta", "rustica", "tradizione"]
        }
    ]
    res.json(posts) //è utile per inviare oggetti o array strutturati come risposta. Converte il tipo di dato da js a json rendendolo più comprensibile al client
  })

  //avvio il server mettendolo in ascolto sulla porta che indicato
  app.listen(port, () => {   
    console.log(`Example app listening on port ${port}`)
  })

  //Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

  app.use(express.static('public')); //Con questa funzione puoi indicare una cartella in cui Express cercherà i file da restituire direttamente agli utenti quando ne fanno richiesta.
  