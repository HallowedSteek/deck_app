import * as dotenv from "dotenv";

dotenv.config();

import bodyParser from "body-parser"; //send post req
import express, { Request, Response } from "express"; //framework for creating the routing for our app
import mongoose from "mongoose"; //create models for our posts
import cors from "cors"; // cross origin requests

import Deck from "./models/Deck";
import createDeck from "./controller/createDeck";
import deleteDeck from "./controller/deleteDeck";
import getDecks from "./controller/getDecks";
import cardForDeck from "./controller/cardsForDeck";
import deleteCard from "./controller/deleteCard";
import getCards from "./controller/getCards";

const PORT: number = 5000;

const app = express();

app.use(cors());

//middleware function🔽 trebuie sa fie pusa inainte de endpoint-uri. Ce face? de fiecare data cand cineva o sa faca un request catre api, mai intai o sa se apeleze functia asta
app.use(express.json());

//endpoint pt get 🔽

app.get("/decks", getDecks);
app.get("/decks/:deckId/cards", getCards);

//un endpoint pt post deck 🔽
app.post("/decks", createDeck);

//un endpoint pt adaugat carduri 🔽
app.post("/decks/:deckId/cards", cardForDeck);

//endpoint pt stergere 🔽
app.delete("/decks/:deckId", deleteDeck);
app.delete("/decks/:deckId/cards", deleteCard);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});


