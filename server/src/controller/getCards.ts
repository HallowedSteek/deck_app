import Deck from "../models/Deck";
import { Request, Response } from "express";

async function getCards(req: Request, res: Response) {
 
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);


  res.json(deck);
}

export default getCards;
