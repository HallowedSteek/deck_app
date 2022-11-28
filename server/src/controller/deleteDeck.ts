import { Request, Response } from "express";
import Deck from "../models/Deck";



async function deleteDeck(req: Request, res: Response) {
  //ia id-ul din url
  const deckId = await req.params.deckId;

  //sterge item ul
  const deck = await Deck.findByIdAndDelete(deckId);

  //trimitem mesaj ca a fost sters cu succes
  res.json(deck);
  console.log("succes");
}

export default deleteDeck;
