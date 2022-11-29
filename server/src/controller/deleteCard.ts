import express, { Request, Response } from "express";
import Deck from "../models/Deck";

async function deleteCard(req: Request, res: Response) {
  //ia id-ul din url
  const deckId = await req.params.deckId;

  const deck = await Deck.findById(deckId);

  const auxCards:any = deck!.cards.map(
    (card: string, idx: number) => {
      card !== req.body.cards[idx]?card : ""
    }
  );
  //trimitem mesaj ca a fost sters cu succes
  res.json(auxCards);
  console.log("succes");
}

export default deleteCard;
