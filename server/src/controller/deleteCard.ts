import { Request, Response } from "express";
import Deck from "../models/Deck";

async function deleteCard(req: Request, res: Response) {
  const deckId = await req.params.deckId;
  const index = await req.params.index;

  const deck = await Deck.findById(deckId);

  deck?.cards.splice(parseInt(index), 1);

  deck?.save();

  res.json(deck);
  console.log("succes");
}

export default deleteCard;
