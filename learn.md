🔽importam express din express, functie ce returneaza o aplicatie de tip express

const app = express();

🔽folosim post din diferitele conventii de request  avute la dispozitie (post,get,put,patch, delete, head, etc) pentru a permite userului sa adauge in baza de date

app.post("/decks", (req:Request, res:Response) => {
res.send("sodasdasmn world");
});

🔽ne conectam la cluster-ul din atlas
".connect" sete defapt o promisiune, ceea ce inseamna ca poutem folosi
metoda then, pentru a astepta mai intai ca conexiunea la api-ul mongodb
sa fie efectuata dupa care sa dam listen la portul nostru

mongoose.connect('mongodb+srv://admin:frQIuGMLFFrrKJLU@mydeck.r1silpa.mongodb.net/?retryWrites=true&w=majority').then(()=>{
console.log("listening on port 5000")
    🔽serverul o sa "asculte" la portul 5000
    app.listen(5000);
})

MongoDB lucreaza cu modele si scheme, deci o sa trebuiasca sa creeam un model / schema intr-un folder separat creat in src numit "models"

in models adaugam un fisire ts cu pascal case, unde o sa implementam
modelul/schema

Deck.ts

import mongoose from "mongoose";

🔽creem schema dorita cu ajutorul mongoose -ului

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const Deck = new Schema({
title:String,
})

🔽creem modelul

const DeckModel = mongoose.model("Deck", DeckSchema)

🔽in final il exportam pentru a-l putea utiliza
export default DeckModel
