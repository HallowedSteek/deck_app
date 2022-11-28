import Deck from "../models/Deck";
import { Request, Response } from "express";

async function getDecks(req: Request, res: Response) {
  //cum dam fetch la deck urile din mongo?
  const decks = await Deck.find();

  //cum trimitem inapoi ce am primit
  res.json(decks);
}

export default getDecks;
