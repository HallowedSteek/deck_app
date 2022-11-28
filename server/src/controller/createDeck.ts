import { Request, Response } from "express";
import Deck from "../models/Deck";

async function createDeck(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save(); //dupa ce creezi un obiect nou trebuie sa il si salvezi
  res.json(createdDeck);
}

export default createDeck;
