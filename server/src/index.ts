import * as dotenv from 'dotenv'

dotenv.config()

import bodyParser from "body-parser"; //send post req
import express, { Request, Response } from "express"; //framework for creating the routing for our app
import mongoose from "mongoose"; //create models for our posts
import cors from "cors"; // cross origin requests


import Deck from "./models/Deck";


const PORT: number = 5000;

const app = express();

//middleware function🔽 trebuie sa fie pusa inainte de endpoint-uri. Ce face? de fiecare data cand cineva o sa faca un request catre api, mai intai o sa se apeleze functia asta
app.use(express.json());

//tot post ul este un endpoint pt deck 🔽
app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save(); //dupa ce creezi un obiect nou trebuie sa il si salvezi
  res.json(createdDeck);
});

mongoose
  .connect(
    process.env.MONGO_URL!
  )
  .then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });

