import { API_URL, Values } from "./config";


async function getDeck(deckId:string):Promise<Values> {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`);
  return response.json();
}

export default getDeck;
